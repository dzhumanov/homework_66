import { NavLink } from "react-router-dom"

const Toolbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid w-75">
            <NavLink to="/" className='navbar-brand'>Calorie tracker</NavLink>
            <NavLink to='' className='nav-item nav-link text-white'>Add Meal</NavLink>
        </div>
      </nav>
    );
}

export default Toolbar;