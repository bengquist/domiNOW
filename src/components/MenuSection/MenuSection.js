import React from "react";
import "./MenuSection.css";
import { Link } from "react-router-dom";

export default props => {
  const { sectionKey, section, items } = props;
  const itemsList = items.map((val, i) => {
    const itemKey = val.apiKey;
    const { name, basePrice, description, customizationGroups } = val;

    return (
      <Link to={`/options/${itemKey}`}>
        <div className="menu-item" key={i}>
          <p className="menu-item-name">{name}</p>
          <p className="menu-item-description">{description}</p>
          <p className="menu-item-price">${basePrice.toFixed(2)}</p>
        </div>
      </Link>
    );
  });

  console.log(sectionKey, section, items);

  return (
    <div className="menu-section">
      <h1 className="section-name">{section}</h1>
      {itemsList}
    </div>
  );
};
