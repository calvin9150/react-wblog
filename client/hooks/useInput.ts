import { useState, useCallback, ChangeEvent } from "react";

const useInput = (initValue: any) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
