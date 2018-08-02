import React from "react";
import "./MenuSection.css";

export default props => {
  const { sectionKey, section, items } = props;
  const itemsList = items.map((val, i) => {
    const itemKey = val.apiKey;
    const { name, basePrice, description, customizationGroups } = val;

    return (
      <div key={i}>
        <p>{name}</p>
        <p>{description}</p>
        <p>${basePrice.toFixed(2)}</p>
      </div>
    );
  });

  console.log(sectionKey, section, items);

  return (
    <div className="menu-section">
      <h1>{section}</h1>
      {itemsList}
    </div>
  );
};
