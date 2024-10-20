import React, { useState } from 'react';
import { Filter, Send, Image, Paperclip } from 'lucide-react';
import NewsFeedItem from './NewsFeedItem';

interface MiddleColumnProps {
  isDarkTheme: boolean;
}

const MiddleColumn: React.FC<MiddleColumnProps> = ({ isDarkTheme }) => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState<Array<{
    id: number;
    author: string;
    avatar: string;
    organization: string;
    content: string;
    privacy: 'Everyone' | 'Organization Colleagues' | 'Project Colleagues' | 'Specific People' | 'Only Me';
    type: string;
  }>>([
    {
      id: 1,
      author: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      organization: "Save the Oceans",
      content: "We've just launched our new beach cleanup initiative! Join us this weekend.",
      privacy: "Everyone",
      type: "Project Update"
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      organization: "Education for All",
      content: "Exciting news! We've reached our fundraising goal for the new school building.",
      privacy: "Organization Colleagues",
      type: "Fundraising Update"
    }
  ]);

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: "Current User",
        avatar: "https://randomuser.me/api/portraits/women/17.jpg",
        organization: "Your Organization",
        content: postContent,
        privacy: "Everyone" as const,
        type: "Status Update"
      };
      setPosts([newPost, ...posts]);
      setPostContent('');
    }
  };

  return (
    <div className={`w-full lg:w-1/2 space-y-6 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className={`shadow rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <Filter className="mr-2" size={20} />
          Timeline/Newsfeed Filters
        </h2>
        <div className="flex space-x-2">
          <button className={`px-3 py-1 ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-600'} rounded-full text-sm font-medium`}>All</button>
          <button className={`px-3 py-1 ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600'} rounded-full text-sm font-medium`}>Projects</button>
          <button className={`px-3 py-1 ${isDarkTheme ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-600'} rounded-full text-sm font-medium`}>Updates</button>
        </div>
      </div>
      <div className={`shadow rounded-lg p-4 ${isDarkTheme ? 'bg-gray-700' : 'bg-white'}`}>
        <h2 className="text-lg font-semibold mb-4">Post a Timeline Update</h2>
        <form onSubmit={handlePostSubmit}>
          <textarea
            className={`w-full p-2 border rounded-lg resize-none text-sm ${isDarkTheme ? 'bg-gray-600 text-white border-gray-500' : 'bg-white text-gray-800 border-gray-300'}`}
            rows={3}
            placeholder="What's happening in your charity world?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2">
              <button type="button" className={`text-gray-500 hover:${isDarkTheme ? 'text-blue-400' : 'text-blue-500'}`}>
                <Image size={20} />
              </button>
              <button type="button" className={`text-gray-500 hover:${isDarkTheme ? 'text-blue-400' : 'text-blue-500'}`}>
                <Paperclip size={20} />
              </button>
            </div>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center text-sm`}
            >
              <Send className="mr-2" size={16} />
              Post Update
            </button>
          </div>
        </form>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <NewsFeedItem key={post.id} {...post} isDarkTheme={isDarkTheme} />
        ))}
      </div>
    </div>
  );
};

export default MiddleColumn;
