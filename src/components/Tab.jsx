import React from 'react';
import { TabContext } from './Tabs';

export function Tab({ label, children }) {
  const currentTab = React.useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
}