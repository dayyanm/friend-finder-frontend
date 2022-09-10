import { useEffect, useState } from "react";

function getSavedValue(key, initVal) {
  const savedValue = localStorage.getItem(key);

  if (savedValue) return savedValue;

  return initVal;
}

export default function useLocalStorage(key, initVal) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initVal);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}
