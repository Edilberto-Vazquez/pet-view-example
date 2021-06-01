import React from "react";
import cortoz from "../assets/corto-z.jpg";
import "../styles/components/PetData.css";

const PetData = (props) => (
  <section className="pet-card">
    <div className="pet-card-header">
      <img src={cortoz} alt="pet" />
      <h2>{props.pet_name}</h2>
    </div>
    <div className="pet-card-information">
      <span>Fecha de nacimiento: {props.birth}</span>
      <span>Raza: {props.breed}</span>
      <span>Alergias: {props.allergies}</span>
      <span>Op. Quirúrgicas: {props.surgical_interventions}</span>
    </div>
    <div className="pet-card-edit">
      <button>Editar Información</button>
    </div>
  </section>
);

export default PetData;
