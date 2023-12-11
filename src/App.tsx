import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import {Routes, Route} from 'react-router-dom';
import Meals from "./containers/Meals/Meals";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Meals/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
