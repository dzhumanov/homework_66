import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { mealProps } from "../../types";
import axiosApi from "../../axiosApi";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSpinner from "../../components/Preloader/ButtonSpinner";

const MealForm = () => {
  const [meal, setMeal] = useState<mealProps>({
    name: "",
    category: "",
    cal: 0,
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await axiosApi.get(`meals/${id}.json`);
          setMeal({ ...response.data, id: id });
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchMeal();
  }, [id]);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, type, value } = event.target;

    const processedValue = type === "number" ? parseFloat(value) : value;

    setMeal((prevState) => ({
      ...prevState,
      [name]: processedValue,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await axiosApi.put(`meals/${id}.json`, meal);
      } else {
        await axiosApi.post("meals.json", meal);
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container w-75">
      <Form.Group controlId="select" className="mt-3">
        <Form.Label>Category:</Form.Label>
        <Form.Select
          name="category"
          required
          onChange={onChange}
          value={meal.category}
        >
          <option>Select a category</option>
          <option value="breakfast">breakfast</option>
          <option value="snack">snack</option>
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
            value={meal.name}
          />
        </Form.Group>
        <Form.Group controlId="textArea">
          <Form.Label>kcal</Form.Label>
          <Form.Control
            type="number"
            name="cal"
            placeholder="Enter kcal"
            onChange={onChange}
            value={meal.cal}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          {loading ? <ButtonSpinner /> : id ? "Edit meal" : "Add meal"}
        </Button>
      </Form>
    </div>
  );
};

export default MealForm;
