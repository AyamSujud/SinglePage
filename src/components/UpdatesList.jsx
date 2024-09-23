import React from 'react';
import { Link } from 'react-router-dom';

function UpdatesList() {
  return (
    <div className="max-w-3xl mx-5 my-12 bg-white p-5 rounded-md shadow">
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <img
          src="Lensa.jpg"
          alt="Product"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">TELE 75-300mm MULUS NO JAMUR</h2>
        <p className="text-lg font-bold text-gray-800 mb-4">Rp1.500.000</p>

        <Link to="/MaintenancePage" className="w-full block text-center bg-Hijau text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">
          Buy
        </Link>
      </div>
    </div>
  );
}

export default UpdatesList;

