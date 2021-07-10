import { useState, useCallback, ChangeEvent } from "react";

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [
    string,
    typeof handler,
    typeof setValue
  ];
};

export default useInput;
