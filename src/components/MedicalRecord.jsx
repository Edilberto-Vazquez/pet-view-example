import React from "react";
import "../styles/components/MedicalRecord.css";
import RecordList from "./RecordList";

const MedicalRecord = ({ consultations }) => (
  <section className="medical-record">
    <div className="medical-record-header">
      <span>Fecha</span>
      <span>consultas</span>
      <span>vacunas</span>
    </div>
    <div className="medical-record-list">
      {consultations.map((item) => {
        return <RecordList consultations={item} key={item.datedrecord_id} />;
      })}
    </div>
  </section>
);

export default MedicalRecord;
