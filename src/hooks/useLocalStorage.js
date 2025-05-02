import React from "react";

export default function useLocalStorage(key, initialValue = "") {
  const getStoredValue = () => {
    let storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  };
  const [value, setValue] = React.useState(getStoredValue);

  const updateValue = React.useCallback(
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    },
    [key]
  );

  return [value, updateValue];
}
