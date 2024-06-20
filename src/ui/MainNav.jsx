import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="bg-indigo-700 px-10 py-6 flex justify-between md:px-16 md:flex-row gap-x-4">
      <NavLink to="/premium">
        <Logo theme="light" />
      </NavLink>
      <DesktopNav />
      <MobileNav isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
}

export default MainNav;
