import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacterByUrl } from "../../services/getCharacterByUrl";
import "./ResidentCard.css"
    
const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);
    
  useEffect(() => {
    const loadResident = async () => {
      const residentData = await getCharacterByUrl(url);
      setResident(residentData);       
    };

    loadResident();
  }, [url]);

  return (
    <> 
      {!resident ? (
        <p>Loading Character</p>
      ) : (
        <article>
          <div>
            <img src={resident.image} alt={resident.name} />
          </div>
          <h4>{resident.name}</h4>   
          <ul>
            <li>
              <b>Specie</b>
              <p>{resident.species}</p>
            </li>
            <li>
              <b>Origin</b>
              <p>{resident.origin.name}</p>
            </li>
            <li>
              <b>Status</b>
              <p>{resident.status}</p>
            </li>
            <li>
              <b>Appearances</b>
              <p>{resident.episode.length}</p>
            </li>
          </ul> 
        </article>
      )}
    </>
  );
};

ResidentCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResidentCard;
