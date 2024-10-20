import { useState } from 'react';

import LeftColumn from './components/LeftColumn';
import MiddleColumn from './components/MiddleColumn';
import RightColumn from './components/RightColumn';
import Navbar from './components/Navbar';


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <LeftColumn isDarkTheme={isDarkTheme} />
          <MiddleColumn isDarkTheme={isDarkTheme} />
          <RightColumn isDarkTheme={isDarkTheme} />
        </div>
      </main>
    </div>
  );
}

export default App;