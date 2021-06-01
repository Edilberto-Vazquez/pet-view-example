import React, { useState } from "react";
import Consultation from "./Consultation";
import "../styles/components/RecordList.css";

const RecordList = ({ consultations }) => {
  const [seeConsult, setSeeConsult] = useState(false);

  const handleClick = (condition) => {
    setSeeConsult(!condition);
  };

  return (
    <div className="record-list">
      <div className="record-item">
        <span>{consultations.date}</span>
        <button onClick={() => handleClick(seeConsult)}>Ver Consulta</button>
        <button>Ver Vacunas</button>
      </div>
      {seeConsult === true ? (
        <Consultation
          symptoms={consultations.symptoms}
          diagnosis={consultations.diagnosis}
          doctor={consultations.user_name}
        />
      ) : null}
    </div>
  );
};

export default RecordList;
