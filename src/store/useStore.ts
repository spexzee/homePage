import {create} from 'zustand';

interface StoreState {
  followers: { id: number; name: string; avatar: string }[];
  following: { id: number; name: string; avatar: string }[];
  events: { title: string; icon: JSX.Element }[];
  contacts: { title: string; icon: JSX.Element }[];
  projects: { title: string; icon: JSX.Element; value: number }[];
  albums: { title: string; icon: JSX.Element }[];
  organizations: { title: string; icon: JSX.Element }[];
  posts: { id: number; author: string; content: string; image?: string }[];
  tasks: { id: number; text: string; completed: boolean }[];
  isDarkTheme: boolean;
  toggleTheme: () => void;
  addFollower: (follower: { id: number; name: string; avatar: string }) => void;
  addFollowing: (following: { id: number; name: string; avatar: string }) => void;
  addEvent: (event: { title: string; icon: JSX.Element }) => void;
  addContact: (contact: { title: string; icon: JSX.Element }) => void;
  addProject: (project: { title: string; icon: JSX.Element; value: number }) => void;
  addAlbum: (album: { title: string; icon: JSX.Element }) => void;
  addOrganization: (organization: { title: string; icon: JSX.Element }) => void;
  addPost: (post: { id: number; author: string; content: string; image?: string }) => void;
  addTask: (task: { id: number; text: string; completed: boolean }) => void;
}

const useStore = create<StoreState>((set) => {
  const storedTheme = localStorage.getItem('isDarkTheme');
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

  const generateRandomUsers = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      avatar: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
    }));
  };

  return {
    followers: generateRandomUsers(5),
    following: generateRandomUsers(5),
    events: [],
    contacts: [],
    projects: [],
    albums: [],
    organizations: [],
    posts: [],
    tasks: [],
    isDarkTheme: initialTheme,
    toggleTheme: () => {
      set((state) => {
        const newTheme = !state.isDarkTheme;
        localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
        return { isDarkTheme: newTheme };
      });
    },
    addFollower: (follower) => set((state) => ({ followers: [...state.followers, follower] })),
    addFollowing: (following) => set((state) => ({ following: [...state.following, following] })),
    addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
    addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
    addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
    addAlbum: (album) => set((state) => ({ albums: [...state.albums, album] })),
    addOrganization: (organization) => set((state) => ({ organizations: [...state.organizations, organization] })),
    addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  };
});

export default useStore;
