import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
import "./ResidentList.css"
import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(8);
  const [numberPage, residentsSlice, pages, changePageTo] = usePagination(residents, quantityPagination);

  return (
    <>
      <div className="container-pagination">
        <p>Tamaño de la pagina</p>
        <select name="quantity_per_pages" value={quantityPagination}
        onChange={(e) => setQuantityPagination(Number(e.target.value))}>
          <option>8</option>
          <option>16</option>
          <option>32</option>
        </select>
      </div>

      {!residentsSlice.length && <span className="info"><p>No hay residentes en esta ubicación</p></span>}

      {Boolean(residentsSlice.length) && (
        <ul> 
          {residentsSlice.map(residentUrl => (
            <li key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
        </ul>
      )}

      <div className="container-button">
        <button onClick={() => changePageTo(numberPage - 1)}><span>Back</span></button>
        {pages.map((i) => (
          <button
            key={i}
            onClick={() => changePageTo(i)}
            style={{ color: numberPage === i ? " #4ec121" : undefined }}
          >
            {i}
          </button>
        ))}
        <button onClick={() => changePageTo(numberPage + 1)}><span>Next</span></button>
      </div>
    </>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array.isRequired,
};

export default ResidentList;




/*const getPageButtons = () => {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    const button = <button onClick={() => changePageTo(i)}>(i)</button>;

    buttons.push(button);
  }

  return buttons;
};*/