import { useEffect, useState } from "react";

const getData = (key: string, initalValue: any) => {
  const savedValue = JSON.parse(localStorage.getItem(key)!);
  if (savedValue) return savedValue;
  if (initalValue instanceof Function) return initalValue();
  return initalValue;
};

const useLocalStorage = (key: string, initalValue: any, readOnly: boolean) => {
  const [value, setValue] = useState(() => {
    return getData(key, initalValue);
  });
  useEffect(() => {
    if (!readOnly) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);
  return [value, setValue, readOnly];
};

export default useLocalStorage;
