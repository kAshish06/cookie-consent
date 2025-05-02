import React from "react";

export default function useLocalStorage(key, initialValue = "") {
  const getStoredValue = () => {
    try {
      let storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (e) {
      console.error("error parsing json", e);
      return initialValue;
    }
  };
  const [value, setValue] = React.useState(getStoredValue);

  const updateValue = React.useCallback(
    (newValue) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, updateValue];
}
