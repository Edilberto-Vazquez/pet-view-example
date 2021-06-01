import React from "react";
import { connect } from "react-redux";

function VistaMascota({ petdata }) {
  console.log(petdata);
  return (
    <div className="App">
      <h1>Vista Mascota</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    petdata: state.petdata,
  };
};

export default connect(mapStateToProps, null)(VistaMascota);
