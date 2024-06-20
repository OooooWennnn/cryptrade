import MainNav from './MainNav';

function Header() {
  return (
    <div className="bg-indigo-700 px-8 md:px-16 py-2 md:py-6 flex flex-col md:flex-row gap-x-4 sm:gap-x-12 items-center">
      <span className="mr-20 text-indigo-50">Cryptrade</span>
      <MainNav />
    </div>
  );
}

export default Header;
