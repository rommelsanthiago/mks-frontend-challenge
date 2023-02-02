'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(initialState)
    
  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    setState(storageValue ? JSON.parse(storageValue) : initialState);
  }, [initialState, key]);

  const setValue = (value: T) => {
    setState(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setValue] as const;
}

export default usePersistedState;