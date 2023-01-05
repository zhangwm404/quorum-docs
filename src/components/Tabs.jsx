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
              'border-orange-500 text-orange-500': label === currentTab,
              'border-gray-600 opacity-70 dark:opacity-100': label !== currentTab,
            }, 'px-3 border rounded-xl mr-2 text-sm cursor-pointer text-[13px]')}>
            {label}
          </div>
        ))}
      </div>
      {children}
    </TabContext.Provider>
  );
};