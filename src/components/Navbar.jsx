import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-Hijau p-4">
      <div className="flex items-center">
        <div className="h-10">
          <img src="Cart.png" alt="Logo" className="h-full" />
        </div>
        <div className="ml-4 text-white text-lg font-mono">PakEdiStore</div>
      </div>
      <div className="flex-grow mx-10">
        <input 
          type="text" 
          placeholder="Search In PakEdiStore" className="w-4/6 p-2 flex justify-items-center rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ungu focus:border-transparent" 
        />
      </div>
      
      <ul className="flex space-x-6 text-white text-xl">
        <li><a href="https://example.com" className="hover:text-gray-400">Home</a></li>
        <li><a href="https://example.com" className="hover:text-gray-400">Cart</a></li>
        <li><a href="https://example.com" className="hover:text-gray-400">Order</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


