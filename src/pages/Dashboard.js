import React from 'react';
import { Link } from 'react-router-dom';
import Login1 from './Login1';
import Login from './Login2';
import Nav2 from './Nav2';
function Dashboard() {
  return (
    <div>
      <div><Nav2/></div>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-2 gap-8">
        <Link to="/Loginowners">
          <div className="p-6 bg-blue-300 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Pet Owners</h2>
            <p>Login as a pet owner</p>
          </div>
        </Link>
        <Link to="/Loginsitters">
          <div className="p-6 bg-yellow-300 rounded-lg shadow-md transform transition-transform hover:scale-105 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Pet Sitters</h2>
            <p>Login as a pet sitter</p>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
