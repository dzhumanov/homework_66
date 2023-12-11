import React from "react";
import { Meals } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Meals | null;
  onDelete: (id: string) => void;
}

const MealsList: React.FC<Props> = ({ meals, onDelete }) => {
  return (
    <div className="d-flex flex-column">
      <ul>
        {meals ? (
          Object.keys(meals).map((key) => (
            <Meal
              key={key}
              id={key}
              name={meals[key].name}
              category={meals[key].category}
              cal={meals[key].cal}
              onDelete={() => onDelete(key)}
            />
          ))
        ) : (
          <div className="mt-5 fs-3 fw-bold mx-auto">No available meals</div>
        )}
      </ul>
    </div>
  );
};

export default MealsList;
