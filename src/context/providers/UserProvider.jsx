import React, { useState } from "react";
import { UserContext } from "../../context/Context"; 

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("John Doe");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
