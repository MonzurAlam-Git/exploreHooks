   //   setCount(count + 1);
    //   If batching doesn't happen, count would be updated three times, but each update is based on the initial value of count. This means after the button click, count would only increase by 1 instead of 3 because each setCount call sees the initial count value of 0
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //     // count would correctly increase by 2 after the button click. This is because setCount uses the functional form to ensure each update is based on the most recent state. React batches these updates and applies them in a single render pass, making the component more efficient.
  //   };
