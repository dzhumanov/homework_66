import React from "react";
import { mealProps } from "../../types";

const Meal: React.FC<mealProps> = ({ name, category, cal }) => {
  return (
    <div className="card border border-primary w-75 mx-auto p-3 mt-3">
      <p className="m-0">{category}</p>
      <h2>{name}</h2>
      <p className="m-0">Ccal: {cal}</p>
    </div>
  );
};

export default Meal;
