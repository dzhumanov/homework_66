import React from "react";
import { mealProps } from "../../types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ButtonSpinner from "../Preloader/ButtonSpinner";

interface Props extends mealProps {
  id: string;
  onDelete: () => void;
  isLoading?: boolean;
}

const Meal: React.FC<Props> = ({
  name,
  category,
  cal,
  id,
  onDelete,
  isLoading = true,
}) => {
  return (
    <div className="card border border-primary w-75 mx-auto p-3 mt-3">
      <p className="m-0">{category}</p>
      <h2>{name}</h2>
      <p className="m-0">Ccal: {cal}</p>
      <div className="btn-wrapper mt-3">
        <Link to={`/meal-form/${id}`} className="btn btn-success me-3">
          Edit
        </Link>
        <Button variant="danger" onClick={onDelete} disabled={isLoading}>
          {isLoading && <ButtonSpinner />}
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Meal;
