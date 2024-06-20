import { useAuth } from "../context/AuthContext";
import NavItem from "./NavItem";

function DesktopNav() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav
      className={`hidden text-indigo-50 ml-8 md:flex flex-col items-center md:grow md:justify-between md:flex-row lg:ml-28 `}
    >
      <ul className="flex flex-col md:flex-row md:space-x-12">
        {/* <NavItem to="dashboard" /> */}
        <NavItem to="trade" />
        {/* <NavItem to="wallet" /> */}
        <NavItem to="premium" />
      </ul>
      {!isAuthenticated ? (
        <NavItem to="login" />
      ) : (
        <div className="flex gap-5">
          {/* <NavItem to="Profile" /> */}
          <NavItem to="logout" onClick={logout} />
        </div>
      )}
    </nav>
  );
}

export default DesktopNav;
