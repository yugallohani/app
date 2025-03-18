import { Award, LayoutDashboard, LogOut, Medal, ScrollText, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TokenUp</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/feed"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/feed') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <ScrollText className="h-5 w-5 mr-1" />
              Feed
            </Link>
            
            <Link
              to="/leaderboard"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/leaderboard') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Medal className="h-5 w-5 mr-1" />
              Leaderboard
            </Link>
            
            <Link
              to="/dashboard"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/dashboard') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <LayoutDashboard className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/profile') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <UserCircle className="h-5 w-5 mr-1" />
              Profile
            </Link>
            
            <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-700">
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}