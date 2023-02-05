import React from 'react';

const getSavedData = (key, initialValue) => {
  console.log('getSavedData');
  const storedValue =
    localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  if (storedValue) {
    return storedValue;
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  console.log('useLocalStorage');
  const [value, setValue] = React.useState(() =>
    getSavedData(key, initialValue),
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};
export default useLocalStorage;
