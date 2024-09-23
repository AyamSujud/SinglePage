import React from 'react';
import { Link } from 'react-router-dom';

function MaintenancePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Halaman Sedang Diperbaiki</h1>
        <p className="text-lg text-gray-600 mb-6">Kami sedang memperbarui halaman ini. Silakan kembali Lagi nanti.</p>

        <Link to="/">
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-Hijau">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MaintenancePage;


