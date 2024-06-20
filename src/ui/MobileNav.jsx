import NavItem from './NavItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

function MobileNav({ isOpen, onClick }) {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    onClick();
    logout();
  };

  return (
    <>
      <div
        className="flex items-center text-indigo-50 cursor-pointer md:hidden"
        onClick={onClick}
      >
        {!isOpen ? <AiOutlineMenu size={20} /> : <AiOutlineClose />}
      </div>
      <nav
        className={
          isOpen
            ? `bg-indigo-700 text-indigo-50 fixed left-0 top-0 w-[35%] h-full border-r-gray-800 ease-in-out duration-500 md:hidden`
            : `fixed top-0 bottom-0 w-[35%] ease-in-out duration-500 left-[-100%]`
        }
      >
        <h1 className="text-3xl font-semibold m-5 text-center">
          <Logo />
        </h1>
        <ul className="flex flex-col grow items-center text-lg pt-2">
          <NavItem isMobile={true} to="dashboard" onClick={onClick} />
          <NavItem isMobile={true} to="trade" onClick={onClick} />
          <NavItem isMobile={true} to="wallet" onClick={onClick} />
          <NavItem isMobile={true} to="premium" onClick={onClick} />
          {!isAuthenticated ? (
            <NavItem isMobile={true} to="login" onClick={onClick} />
          ) : (
            <>
              <NavItem isMobile={true} to="Profile" onClick={onClick} />
              <NavItem isMobile={true} to="logout" onClick={handleLogout} />
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
