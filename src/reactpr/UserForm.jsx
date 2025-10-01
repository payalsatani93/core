import React from "react";
import { useState, useEffect } from "react";

function UserForm() {
  // useState → to store the count
  const [count, setCount] = useState(0);

  // useEffect → to perform a side effect
  useEffect(() => {
    // side effect: update the document title
    document.title = `You clicked ${count} times`;
    console.log("Effect ran! Count is:", count);

    // optional cleanup
    return () => {
      console.log("Cleaning up before next effect or unmount");
    };
  }, [count]); // runs every time 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UserForm;
