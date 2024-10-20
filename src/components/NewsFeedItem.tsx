import React from 'react';
import { Shield, Globe, Users, UserCircle, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface NewsFeedItemProps {
  isDarkTheme: boolean;
  id: number;
  author: string;
  avatar: string;
  organization: string;
  content: string;
  privacy: 'Everyone' | 'Organization Colleagues' | 'Project Colleagues' | 'Specific People' | 'Only Me';
  type: string;
}

const NewsFeedItem: React.FC<NewsFeedItemProps> = ({ author, avatar, organization, content, privacy, type, isDarkTheme }) => {
  const getPrivacyIcon = () => {
    switch (privacy) {
      case 'Everyone':
        return <Globe size={14} />;
      case 'Organization Colleagues':
        return <Users size={14} />;
      case 'Project Colleagues':
        return <UserCircle size={14} />;
      case 'Specific People':
      case 'Only Me':
        return <Shield size={14} />;
    }
  };

  return (
    <div className={`shadow rounded-lg p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img src={avatar} alt={author} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <span className="font-semibold">{author}</span>
            <div className="text-sm flex items-center">
              <span>{organization}</span>
              <span className="mx-1">•</span>
              {getPrivacyIcon()}
              <span className="ml-1">{privacy}</span>
            </div>
          </div>
        </div>
        <div className="text-sm">
          {type}
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between text-sm">
        <button className="flex items-center hover:text-blue-500">
          <ThumbsUp size={16} className="mr-1" />
          Like
        </button>
        <button className="flex items-center hover:text-blue-500">
          <MessageCircle size={16} className="mr-1" />
          Comment
        </button>
        <button className="flex items-center hover:text-blue-500">
          <Share2 size={16} className="mr-1" />
          Share
        </button>
      </div>
    </div>
  );
};

export default NewsFeedItem;
