import { createSignal, createEffect } from "solid-js";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = createSignal(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  createEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
};

export default useLocalStorage;
