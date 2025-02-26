import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiFileText, FiLogOut } from "react-icons/fi";

const navLinks = [
  { name: "Dashboard", path: "/", icon: FiHome },
  { name: "Inventory", path: "/inventory", icon: FiBox },
  { name: "Reports", path: "/reports", icon: FiFileText },
];

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isLoggedIn = true; // Example value

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-4 text-xl font-bold text-center border-b">Soko Aerial</div>
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-200",
                location.pathname === path && "bg-blue-500 text-white"
              )}
            >
              <Icon className="mr-3" size={20} />
              {name}
            </Link>
          ))}
        </nav>
        <button className="p-4 text-red-500 flex items-center hover:bg-gray-200">
          <FiLogOut className="mr-3" size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-md flex items-center px-6 justify-between">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Equipment</button>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">{children}</div>
        <footer className="p-4 text-center">
          <p>{isLoggedIn ? "Logged in" : "Logged out"}</p>
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
