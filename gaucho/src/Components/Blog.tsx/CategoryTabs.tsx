
// src/components/blog/CategoryTabs.tsx
import React from 'react';
import { TabType } from './types';

interface CategoryTabsProps {
  tabs: TabType[];
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {tabs.map((tab) => (
        <button 
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-full ${
            activeTab === tab 
              ? 'bg-[#80A8D6] text-white' 
              : 'bg-white border border-[#80A8D6]/30 text-gray-700 hover:bg-gray-100'
          } transition-all duration-300 shadow-sm`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};