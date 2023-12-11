import React from "react";
import { Meals } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Meals | null;
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

const MealsList: React.FC<Props> = ({ meals, onDelete, isLoading }) => {
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
              isLoading={isLoading}
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
