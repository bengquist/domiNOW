import React from "react";
import { Link } from "react-router-dom";
import "./Store.css";

export default props => {
  const {
    apiKey,
    deliveryMin,
    foodTypes,
    hours,
    logoUrl,
    minWaitTime,
    maxWaitTime,
    name,
    offersDelivery,
    offersPickup,
    open,
    phone,
    streetAddress,
    state,
    zip,
    url
  } = props;

  let formattedHours = [];

  for (let day in hours) {
    formattedHours.push(day, ...hours[day]);
  }

  return (
    <Link to={`/store/${apiKey}`} className="store-card">
      <div className="flipper">
        <div className="store-front">
          <img className="store-logo" src={logoUrl} alt="" />
          <h1>{name}</h1>
          <h3>
            {streetAddress}, {state}, {zip}
          </h3>
          {open ? <p>Open</p> : <p>Closed</p>}
        </div>
        <div className="store-back">
          {formattedHours.map(val => <p>{val}</p>)}
        </div>
      </div>
    </Link>
  );
};
