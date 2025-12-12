import "./Patient.css";

const PatientCard = ({ photo, name, address }) => {
  return (
    <div className="patient-card">
      <img src={photo} alt={name} className="patient-photo" />

      <div className="patient-info">
        <h3 className="patient-name">{name}</h3>
        <p className="patient-address">{address}</p>
      </div>
    </div>
  );
};

export default PatientCard;
