import React from "react";
import "./Main.css";

const Main = ({
  name,
  picture,
  email,
  phone,
  location,
  registered,
  getData,
}) => {

  return (
    <div className="cardWrapper">
      <div className="cardMain">
        <div className="cardHeader">
          <img src={picture?.large} alt="img" />
          <h1>
            {name?.first} {name?.last}
          </h1>
        </div>
        <div className="cardMiddle">
          <h3>{email}</h3>
          <h3>{phone}</h3>
          <h3>
            {location?.city}/{location?.country}{" "}
          </h3>
        </div>
        <div className="cardFooter">
          <p>Age: {registered?.age}</p>
          <p>Registered: {new Date(registered?.date).toLocaleDateString()}</p>
        </div>
      </div>
      <button className="btn" onClick={getData}>
        Get New User
      </button>
    </div>
  );
};

export default Main;
