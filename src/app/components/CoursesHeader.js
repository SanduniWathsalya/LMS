import { useEffect, useRef, useState } from 'react';

export default function TabHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { name: 'Courses', id: 'courses' },
    { name: 'Assign Teachers', id: 'teachers' },
    { name: 'Followers', id: 'followers' },
  ];

  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.id === activeTab);
    const currentTab = tabRefs.current[index];

    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative bg-white rounded-md mb-4 shadow-sm">
      <div className="flex justify-around relative">
        {/* Sliding underline bar */}
        <div
          className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300 rounded-md"
          style={indicatorStyle}
        />

        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className="relative w-full text-center"
            ref={(el) => (tabRefs.current[index] = el)}
          >
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-2 font-medium text-xl ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
