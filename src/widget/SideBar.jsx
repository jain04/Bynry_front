import React from 'react';
import { Users, MapPin, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';

const Sidebar = ({ sidebarOpen, toggleSidebar, user }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-lg">Profile Manager</span>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-2">
          {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <button className="flex items-center gap-3 p-3 hover:bg-gray-100 w-full">
              <Users className="h-5 w-5" />
              {sidebarOpen && <span>Profiles</span>}
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 p-3 hover:bg-gray-100 w-full">
              <MapPin className="h-5 w-5" />
              {sidebarOpen && <span>Locations</span>}
            </button>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
          {sidebarOpen && (
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          )}
          <LogOut className="h-5 w-5 text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
