import React from "react";
import "../styles/components/Consultation.css";

const Consultation = (props) => (
  <div className="consultation">
    <div className="consultation-information">
      <span>{props.symptoms}</span>
      <span>{props.diagnosis}</span>
      <button>Ver receta</button>
    </div>
    <div className="edit-information">
      <button>Editar</button>
    </div>
  </div>
);

export default Consultation;
