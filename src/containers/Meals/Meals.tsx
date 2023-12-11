import { useEffect, useState } from "react";
import { Meals, mealProps } from "../../types";
import axiosApi from "../../axiosApi";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
  const [meals, setMeals] = useState<Meals | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("meals.json");
      setMeals(response.data);
    } catch (error) {
      console.log("Error!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <>
      {meals && Object.keys(meals).length > 0 ? (
        <MealsList meals={meals} />
      ) : (
        <div className="col-6">
          <h1 className="text-center mt-5">No meals</h1>
        </div>
      )}
    </>
  );
};

export default Meals;
