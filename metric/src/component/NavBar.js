import { NavLink }  from 'react-router-dom';

const Navbar = () => (
    <header>
      <nav>
        <div>
          <NavLink to="/"> Details </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
        </ul>
      </nav>
    </header>
);

export default Navbar;