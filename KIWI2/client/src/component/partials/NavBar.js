import { menuItems } from '../../menuItems';
import MenuItems from './menu/MenuItems';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <div className='container-fluid'>
                <a href="/" className='navbar-brand'>KIWI/logo</a>
               
                <button type="button" className='navbar-toggler' data-bs-toogle="collapse" data-bs-target="#navbarCollapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id="navbarCollapse" className='collapse navbar-collapse'>
                    <ul className="nav navbar-nav">
                    {menuItems.map((menu, index) => {
                        return <MenuItems items={menu} key={index} />;
                    })}
                    </ul>
                    <ul className="nav navbar-nav ms-auto">
                         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admin</a>
                         <div className='dropdown-menu dropdown-menu-end'>
                            <a className="dropdown-item" href="#">Moderations</a>
                            <a className="dropdown-item" href="#">Settings</a>
                            <div className='dropdown-divider'></div>
                            <a className="dropdown-item" href="#">Logout</a>
                         </div>

                    </ul>
                </div>
            </div>
      </nav>
    );
  };
  
  export default Navbar;