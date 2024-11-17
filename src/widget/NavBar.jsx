import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/">Profile List</Link>
        </li>
        <li>
          <Link to="/admin">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
