import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
