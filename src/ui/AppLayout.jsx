import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
