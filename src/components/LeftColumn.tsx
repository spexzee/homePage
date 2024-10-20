import React, { useState } from 'react';
import { Calendar, Users, Folder, Image, Building, UserPlus, UserCheck, Plus, CheckCircle } from 'lucide-react';
import ExpandableCard from './ExpandableCard';
import useStore from '../store/useStore'; // Import the store


const LeftColumn: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const { followers, following } = useStore(); // Access followers, following, addFollower, and addFollowing from the store

  const [events, setEvents] = useState<{ title: string; icon: JSX.Element }[]>([]);
  const [projects, setProjects] = useState<{ title: string; icon: JSX.Element }[]>([]);
  const [albums, setAlbums] = useState<{ title: string; icon: JSX.Element }[]>([]);
  const [organizations, setOrganizations] = useState<{ title: string; icon: JSX.Element }[]>([]);
  
  const [newEvent, setNewEvent] = useState('');
  const [newContact, setNewContact] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newAlbum, setNewAlbum] = useState('');
  const [newOrganization, setNewOrganization] = useState('');


  const [contacts, setContacts] = useState<{ title: string; icon: JSX.Element }[]>([]);

  const addEvent = () => {
    if (newEvent) {
      setEvents([...events, { title: newEvent, icon: <CheckCircle size={16} /> }]);
      setNewEvent('');
    }
  };

  const addContact = () => {
    if (newContact) {
      setContacts([...contacts, { title: newContact, icon: <UserPlus size={16} /> }]);
      setNewContact('');
    }
  };

  const addProject = () => {
    if (newProject) {
      setProjects([...projects, { title: newProject, icon: <Folder size={16} /> }]);
      setNewProject('');
    }
  };

  const addAlbum = () => {
    if (newAlbum) {
      setAlbums([...albums, { title: newAlbum, icon: <Image size={16} /> }]);
      setNewAlbum('');
    }
  };

  const addOrganization = () => {
    if (newOrganization) {
      setOrganizations([...organizations, { title: newOrganization, icon: <Building size={16} /> }]); 
      setNewOrganization('');
    }
  };


  return (
    <div className={`w-full lg:w-1/3 space-y-6 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
       <ExpandableCard title="Followers" icon={<UserPlus className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <ul className="flex flex-wrap space-x-4 text-sm text-gray-600">
          {followers.map((follower) => (
            <li key={follower.id} className="flex items-center">
              <img src={follower.avatar} alt={`Avatar of follower`} className="w-8 h-8 rounded-full" />
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Following" icon={<UserCheck className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <ul className="flex flex-wrap space-x-4 text-sm text-gray-600">
          {following.map((follow) => (
            <li key={follow.id} className="flex items-center">
              <img src={follow.avatar} alt={`Avatar of following`} className="w-8 h-8 rounded-full" />
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Events" icon={<Calendar className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            value={newEvent} 
            onChange={(e) => setNewEvent(e.target.value)} 
            placeholder="Add new event" 
            className={`border p-1 flex-grow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          />
          <button onClick={addEvent} className="ml-2 bg-blue-500 text-white p-1 flex items-center rounded">
            <Plus className="inline mr-1" size={16} /> Add
          </button>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {events.map((event, index) => (
            <li key={index} className="flex items-center">
              {event.icon}
              <span className={`${isDarkTheme ? 'text-white' : 'text-black'} ml-2`}>{event.title}</span>
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Contacts" icon={<Users className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            value={newContact} 
            onChange={(e) => setNewContact(e.target.value)} 
            placeholder="Add new contact" 
            className={`border p-1 flex-grow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          />
          <button onClick={addContact} className="ml-2 bg-blue-500 text-white p-1 flex items-center rounded">
            <Plus className="inline mr-1" size={16} /> Add
          </button>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {contacts.map((contact, index) => (
            <li key={index} className="flex items-center">
              {contact.icon}
              <span className={`${isDarkTheme ? 'text-white' : 'text-black'} ml-2`}>{contact.title}</span>
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Projects" icon={<Folder className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            value={newProject} 
            onChange={(e) => setNewProject(e.target.value)} 
            placeholder="Add new project" 
            className={`border p-1 flex-grow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          />
          <button onClick={addProject} className="ml-2 bg-blue-500 text-white p-1 flex items-center rounded">
            <Plus className="inline mr-1" size={16} /> Add
          </button>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center">
              {project.icon}
              <span className={`${isDarkTheme ? 'text-white' : 'text-black'} ml-2`}>{project.title}</span>
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Albums" icon={<Image className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            value={newAlbum} 
            onChange={(e) => setNewAlbum(e.target.value)} 
            placeholder="Add new album" 
            className={`border p-1 flex-grow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          />
          <button onClick={addAlbum} className="ml-2 bg-blue-500 text-white p-1 flex items-center rounded">
            <Plus className="inline mr-1" size={16} /> Add
          </button>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {albums.map((album, index) => (
            <li key={index} className="flex items-center">
              {album.icon}
              <span className={`${isDarkTheme ? 'text-white' : 'text-black'} ml-2`}>{album.title}</span>
            </li>
          ))}
        </ul>
      </ExpandableCard>

      <ExpandableCard title="Organizations" icon={<Building className="mr-2" size={20} />} className={`shadow-lg rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}>
        <div className="flex items-center justify-between">
          <input 
            type="text" 
            value={newOrganization} 
            onChange={(e) => setNewOrganization(e.target.value)} 
            placeholder="Add new organization" 
            className={`border p-1 flex-grow ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          />
          <button onClick={addOrganization} className="ml-2 bg-blue-500 text-white p-1 flex items-center rounded">
            <Plus className="inline mr-1" size={16} /> Add
          </button>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          {organizations.map((organization, index) => (
            <li key={index} className="flex items-center">
              {organization.icon}
              <span className={`${isDarkTheme ? 'text-white' : 'text-black'} ml-2`}>{organization.title}</span>
            </li> 
          ))}
        </ul>
      </ExpandableCard>
    </div>
  );
};

export default LeftColumn;
