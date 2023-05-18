import { useEffect, useState } from 'react'
import './App.css'
import { getLocationById } from "./services/getLocationById";
import { getRandomNumber } from "./utils/getRandomNumber";
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/SearchForm/SearchForm";
import title from "./assets/teaser.artistid.954191495.jpg";

const background = title;

function App() {
  const [location, setLocation] = useState(null);
  
  const handleMeEstoyEnviando = async (dataId) => {
    let locationInfo ;

    if (!dataId) {
      const randomId = getRandomNumber(1, 126);
      locationInfo = await getLocationById(randomId);
    } else {
      locationInfo = await getLocationById(dataId);
    }

    setLocation(locationInfo);
  };

  useEffect(() => {
    const loadLocation = async () => {
      const randomId = getRandomNumber(1, 126);
      const locationInfo = await getLocationById(randomId);
      setLocation(locationInfo);
    };

    loadLocation();
  }, []);

  return (
    <div>
      <h1 style={{backgroundImage: `url("${background}")`}}></h1>

      <SearchForm meEstoyEnviando={handleMeEstoyEnviando} />

      {location ? <Location location={location} /> : <Loader />}

      <h3>Residents</h3>

      <ResidentList residents={location?.residents}/>
    </div>
  );
}

export default App;
