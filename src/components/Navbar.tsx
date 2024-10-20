import React, { useState } from 'react';
import { Bell, Search, Home, Compass, Sun, Moon, Menu } from 'lucide-react';

const Navbar: React.FC<{ toggleTheme: () => void; isDarkTheme: boolean }> = ({ toggleTheme, isDarkTheme }) => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <header className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-sm sticky top-0 z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className={`text-xl font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>My Home Page</h1>
          <button onClick={() => setNavVisible(!navVisible)} className="sm:hidden">
            <Menu size={20} className="text-gray-500" />
          </button>
        </div>
        {navVisible && (
          <div className={`flex flex-col w-full sm:flex-row sm:space-x-4 mt-2 items-center ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <nav className="flex flex-row space-x-2 sm:flex-row sm:space-x-0">
              <a href="#" className={`flex items-center ${isDarkTheme ? 'text-white' : 'text-gray-500'} hover:${isDarkTheme ? 'text-gray-300' : 'text-gray-900'}`}>
                <Home size={20} className="mr-1" />
                Home
              </a>
              <a href="#" className={`flex items-center ${isDarkTheme ? 'text-white' : 'text-gray-500'} hover:${isDarkTheme ? 'text-gray-300' : 'text-gray-900'}`}>
                <Compass size={20} className="mr-1" />
                Explore
              </a>
            </nav>
            <div className="flex items-center w-full mt-2 sm:mt-0 justify-center">
              <input
                type="text"
                placeholder="Search for contacts and projects"
                className={`border rounded-lg px-4 py-2 w-full max-w-xl ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-white text-gray-900'}`}
              />
              <button className="ml-2">
                <Search className={`${isDarkTheme ? 'text-white' : 'text-gray-500'}`} size={25} />
              </button>
            </div>
            <div className="flex items-center mt-2 sm:mt-0 justify-center">
              <button onClick={toggleTheme} className={`${isDarkTheme ? 'text-white' : 'text-gray-500'} mr-2`}>
                {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Bell className={`${isDarkTheme ? 'text-white' : 'text-gray-500'}`} size={20} />
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="User" className="w-8 h-8 rounded-full ml-2" />
              <button className={`${isDarkTheme ? 'bg-red-600' : 'bg-red-500'} text-white px-4 py-2 rounded ml-2`}>+ Create</button>
            </div>
          </div>
        )}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for contacts and projects"
              className={`border rounded-lg px-4 py-2 w-full max-w-xl ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
            />
            <button className="ml-2">
              <Search className={`${isDarkTheme ? 'text-white' : 'text-gray-500'}`} size={25} />
            </button>
          </div>
          <button onClick={toggleTheme} className={`${isDarkTheme ? 'text-white' : 'text-gray-500'}`}>
            {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Bell className={`${isDarkTheme ? 'text-white' : 'text-gray-500'}`} size={20} />
          <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="User" className="w-8 h-8 rounded-full" />
          <button className="bg-red-500 text-white px-4 py-2 rounded">+ Create</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
