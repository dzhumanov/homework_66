import React from "react";
import { mealProps } from "../../types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Meal: React.FC<mealProps & { id: string; onDelete: () => void }> = ({
  name,
  category,
  cal,
  id,
  onDelete,
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
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Meal;
