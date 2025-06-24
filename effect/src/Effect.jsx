import React from "react";

const Effect = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  React.useEffect(() => {
    console.log("Component mounted:");
    setTimeout(() => {
      alert("Data fetched successfully!");
    }, 3000);
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default Effect;
