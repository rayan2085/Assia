import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">E-commerce Site</Link>
      <div className="space-x-4">
        <Link to="/cart" className="hover:underline">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
