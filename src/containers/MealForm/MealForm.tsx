import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { mealProps } from "../../types";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";

const MealForm = () => {
  const [meal, setMeal] = useState<mealProps>({
    name: "",
    category: "",
    cal: 0,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setMeal((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.post("meals.json", meal);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container w-75">
      <Form.Group controlId="select" className="mt-3">
        <Form.Label>Category:</Form.Label>
        <Form.Select name="category" required onChange={onChange}>
          <option>Select a category</option>
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </Form.Select>
      </Form.Group>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="meal">
          <Form.Label>Meal description:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Type something"
            onChange={onChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="textArea">
          <Form.Label>kcal</Form.Label>
          <Form.Control
            type="number"
            name="cal"
            placeholder="Enter kcal"
            onChange={onChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default MealForm;
