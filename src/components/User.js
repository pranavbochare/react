import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const { name, location, contact } = props;
  return (
    <div className="user-card">
      <h2>count : {count}</h2>
      <h2>count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h3>Id : {contact}</h3>
    </div>
  );
};
export default User;
