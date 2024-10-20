import React, { useState } from 'react';
import { Clipboard, CheckCircle, Search, Trash } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const RightColumn: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Update project timeline", completed: true },
    { id: 2, text: "Review grant proposal", completed: false },
    { id: 3, text: "Coordinate volunteer training", completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks
    .filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    });

  const progressValues = [
    { title: "Project A", value: 42 },
    { title: "Project B", value: 75 },
    { title: "Project C", value: 13 },
  ];

  return (
    <div className={`w-full lg:w-1/4 space-y-6 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className={`shadow rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold mb-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>Progress Board</h2>
        {progressValues.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between">
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{project.title}</span>
              <span className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>{project.value}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${project.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={`shadow rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold mb-4 flex items-center justify-between ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="flex items-center mr-3">
            <Clipboard className="mr-2" size={20} />
            Tasks
          </span>
          <div className="flex space-x-2">
            <button
              className={`px-2 py-1 text-xs rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-2 py-1 text-xs rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={`px-2 py-1 text-xs rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
        </h2>
        <div className="mb-4">
          <div className={`flex items-center rounded-md p-2 ${isDarkTheme ? 'bg-gray-600' : 'bg-gray-100'}`}>
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search tasks..."
              className={`bg-transparent w-full focus:outline-none text-sm ${isDarkTheme ? 'text-gray-300' : 'text-black'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <form onSubmit={addTask} className="mb-4 flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Add a task..."
            className={`flex-grow px-2 py-1 text-xs border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkTheme ? 'bg-gray-600 text-gray-300' : 'bg-white text-black'}`}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" className="mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white px-2 py-1 rounded">
            Add
          </button>
        </form>
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <li key={task.id} className={`flex items-center justify-between text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center">
                <CheckCircle
                  className={`mr-2 cursor-pointer ${task.completed ? 'text-green-500' : 'text-gray-300'}`}
                  size={16}
                  onClick={() => toggleTask(task.id)}
                />
                <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
              </div>
              <Trash
                size={16}
                className="text-red-500 cursor-pointer"
                onClick={() => deleteTask(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightColumn;
