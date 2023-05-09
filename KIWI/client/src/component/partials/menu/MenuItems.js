import Dropdown from './DropDown';
import { Link } from 'react-router-dom'

const MenuItems = ({ items }) => {
  return (
    <>
      {items.submenu ? (
        <li className="nav-item dropdown ">
      
          <Link  className="nav-link dropdown-toggle" to='/' data-bs-toggle="dropdown">
            {items.title}
          </Link>
          <div className='dropdown-menu'>
             <Dropdown submenus={items.submenu} />
          </div>
        </li>
      ) : (
        <li className="nav-item ">
           <Link className="nav-link" to={items.url}>{items.title}</Link>
        </li>
      )}
    </>
   
  );
};

export default MenuItems;