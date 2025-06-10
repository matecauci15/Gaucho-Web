// src/Components/Blog.tsx/NewsList.tsx (Modificado)
import React from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id?: string; // ID opcional para los enlaces
  date: string;
  title: string;
  summary: string;
}

interface NewsProps {
  title: string;
  viewAllText?: string;
  viewAllLink?: string;
  items: NewsItem[];
}

export const NewsList: React.FC<NewsProps> = ({ 
  title, 

  // viewAllLink = "#",
  items 
}) => {
  return (
    <div className="rounded-xl bg-white shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {/* <Link 
          to={viewAllLink}
          className="text-[#80A8D6] text-sm hover:text-[#F8BC47] transition-colors duration-300"
        >
          {viewAllText}
        </Link> */}
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className={index < items.length - 1 ? "pb-4 border-b border-gray-200" : ""}>
            <span className="text-xs text-[#80A8D6]">{item.date}</span>
            <h4 className="font-medium mb-1 text-gray-800">
              {item.id ? (
                <Link 
                  to={`/blog/${item.id}`}
                  className="hover:text-[#80A8D6] transition-colors duration-300"
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h4>
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};