import { useState } from "react";

const UseState = () => {
  //   const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 0, color: "red" });
  const count = state.count;
  const color = state.color;

  //   const handleIncrease = () => {
  //     // setCount(count + 1);
  //     // If batching doesn't happen, count would be updated three times, but each update is based on the initial value of count. This means after the button click, count would only increase by 1 instead of 3 because each setCount call sees the initial count value of 0
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //     // count would correctly increase by 2 after the button click. This is because setCount uses the functional form to ensure each update is based on the most recent state. React batches these updates and applies them in a single render pass, making the component more efficient.
  //   };
  const handleIncrease = () => {
    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
    console.log(state);
  };
  const handleDecrease = () => {
    // setCount(count - 1);
  };
  return (
    <div className="p-8 space-y-6 grid justify-items-center">
      <button onClick={handleIncrease} className="btn btn-success">
        Increase
      </button>
      <h1 className="text-2xl text-center font-extrabold text-teal-400">
        Value : {count}
        <br />
        Color : {color}
      </h1>
      <button onClick={handleDecrease} className="btn btn-error">
        Decrease
      </button>
    </div>
  );
};

export default UseState;
