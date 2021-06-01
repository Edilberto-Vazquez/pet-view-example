import React from "react";
import { connect } from "react-redux";
import "../styles/VistaMascota.css";
import PetData from "../components/PetData";
import MedicalRecord from "../components/MedicalRecord";

function VistaMascota({ petdata }) {
  return (
    <div className="vista-mascota">
      <PetData
        age={petdata.age}
        allergies={petdata.allergies}
        birth={petdata.birth}
        breed={petdata.breed}
        pet_id={petdata.pet_id}
        pet_name={petdata.pet_name}
        surgical_interventions={petdata.surgical_interventions}
      />
      <MedicalRecord
        vaccination={petdata.vaccination}
        consultations={petdata.consultations}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    petdata: state.petdata,
  };
};

export default connect(mapStateToProps, null)(VistaMascota);
