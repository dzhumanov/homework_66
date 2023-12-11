import { useCallback, useEffect, useState } from "react";
import { Meals, mealProps } from "../../types";
import axiosApi from "../../axiosApi";
import MealsList from "../../components/MealsList/MealsList";

const Meals = () => {
  const [meals, setMeals] = useState<Meals | null>(null);
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState<number>(0);

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

  const totalCalories = useCallback(() => {
    if (meals) {
      const currentDate = new Date().toISOString().split("T")[0];
      const calories = Object.values(meals)
        .filter((meal: mealProps) => meal.date.includes(currentDate))
        .reduce((acc, meal) => acc + meal.cal, 0);
      setCalories(calories);
    }
  }, [meals]);

  useEffect(() => {
    totalCalories();
  }, [meals, totalCalories]);

  const onDelete = async (id: string) => {
    await axiosApi.delete("meals/" + id + ".json");
    await fetchData();
  };

  return (
    <div className="container w-75">
      <h2 className="text-center">Total Calories: {calories}</h2>
      {meals && Object.keys(meals).length > 0 ? (
        <MealsList meals={meals} onDelete={onDelete} isLoading={loading} />
      ) : (
        <div>
          <h1 className="text-center mt-5">No meals</h1>
        </div>
      )}
    </div>
  );
};

export default Meals;
