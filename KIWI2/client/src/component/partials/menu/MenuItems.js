import Dropdown from './DropDown';

const MenuItems = ({ items }) => {
  return (
    <>
      {items.submenu ? (
        <li className="nav-item dropdown ">
      
          <a  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            {items.title}
          </a>
          <div className='dropdown-menu'>
             <Dropdown submenus={items.submenu} />
          </div>
        </li>
      ) : (
        <li className="nav-item ">
           <a className="nav-link" href={items.url}>{items.title}</a>
        </li>
      )}
    </>
   
  );
};

export default MenuItems;