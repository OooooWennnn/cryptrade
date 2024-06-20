import { NavLink } from 'react-router-dom';

function NavItem({ isMobile = false, to, onClick = null, children = null }) {
  return (
    <NavLink
      className={`${isMobile ? `my-3` : ``} border-b-2 border-transparent duration-200 hover:border-indigo-50`}
      to={`/${to}`}
      onClick={onClick}
    >
      {children ? children : to.charAt(0).toUpperCase() + to.slice(1)}
    </NavLink>
  );
}

export default NavItem;
