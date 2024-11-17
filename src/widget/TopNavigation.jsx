import { Menu } from "lucide-react";
import React from "react";

const TopNavigation = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;
