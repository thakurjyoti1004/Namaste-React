import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h1>Name:{props.name}(Function)</h1>
      <h2>Location:{props.location}</h2>
      <h3>jthakur777.jt@gmail.com</h3>
    </div>
  );
};
export default User;
