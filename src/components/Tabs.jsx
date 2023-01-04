import React from 'react';
import clsx from 'clsx'

export const TabContext = React.createContext();

export function Tabs({ labels, children }) {
  let selectedCodeLang = '';
  
  const [
    currentTab,
    setCurrentTab
  ] = React.useState(labels[0]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const selectedCodeLang = localStorage.getItem('selectedCodeLang');
      if (selectedCodeLang && labels.includes(selectedCodeLang)) {
        setCurrentTab(selectedCodeLang);
      }
    }
  }, [labels]);

  return (
    <TabContext.Provider value={currentTab}>
      <div role="tablist" className="flex items-center">
        {labels.map((label) => (
          <div
            key={label}
            onClick={() => {
              setCurrentTab(label);
              if (typeof window !== "undefined") {
                localStorage.setItem('selectedCodeLang', label);
              }
            }}
            className={clsx({
              'border-sky-500 text-sky-500': label === currentTab,
            }, 'px-3 py-[2px] border border-gray-600 rounded-xl mr-2 text-sm cursor-pointer')}>
            {label}
          </div>
        ))}
      </div>
      {children}
    </TabContext.Provider>
  );
};