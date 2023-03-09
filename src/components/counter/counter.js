import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const Incrementer = () => {
    setInterval(() => {
      setCount(count + 1);
    }, 3000);
  };
  useEffect(() => {
    Incrementer();
  }, [count]);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
