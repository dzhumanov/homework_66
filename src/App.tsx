import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Meals from "./containers/Meals/Meals";
import MealForm from "./containers/MealForm/MealForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="meal-form/" element={<MealForm />} />
        <Route path="meal-form/:id" element={<MealForm />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
