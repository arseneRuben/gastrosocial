const Dropdown = ({ submenus }) => {
    return (
      <ul className="dropdown">
        {submenus.map((submenu, index) => (
          <li key={index} >
            <a className="dropdown-item" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Dropdown;