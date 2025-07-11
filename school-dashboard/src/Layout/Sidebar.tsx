import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Students", path: "/students" },
  { name: "Teachers", path: "/teachers" },
  { name: "Fees", path: "/fees" },
  { name: "Complaints", path: "/complaints" },
];

const Sidebar = () => {
  const location = useLocation();
  return (
        <div className="w-64 h-screen bg-white shadow-md p-4 border-r">
      <h1 className="text-2xl font-bold mb-6">🏫 School</h1>
      
      <nav className="flex flex-col gap-4" >
        {navItems.map((item) => (
          <Link  
          key={item.name}
          to={item.path} 
          className={`p-2 rounded-md hover:bg-gray-100 transition ${
              location.pathname === item.path ? "bg-gray-200 font-semibold" : ""
            }`}

          >
            
            {item.name}
          </Link>
        ) )}
      </nav>
    </div>
  )
}

export default Sidebar