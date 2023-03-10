import { useState } from "react";

const useFormState = (init) => {
  const [value, setVaue] = useState(init);

  const handleChange = (e) => setVaue(e.currentTarget.value);

  const handleReset = () => setVaue("");

  return [value, handleChange, handleReset];
};

export default useFormState;
