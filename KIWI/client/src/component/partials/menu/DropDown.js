import { Link } from 'react-router-dom'


const Dropdown = ({ submenus }) => {
    return (
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <li key={index} >
            <Link className="dropdown-item" to={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;