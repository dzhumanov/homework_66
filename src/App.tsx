import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import { Routes, Route } from "react-router-dom";
import Meals from "./containers/Meals/Meals";
import MealForm from "./containers/MealForm/MealForm";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="meal-form/" element={<MealForm />} />
          <Route path="meal-form/:id" element={<MealForm />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
