import React from "react";
import "./rightBar.scss";
import { makeRequest } from "../../src/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../../src/context/authContext";
import { useContext } from "react";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, [currentUser]);
  useEffect(() => {
    console.log(users);
  }, [users]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <div className="userInfo">
            <div className="online" />
            {/* Render the list of users */}
            {users.map((user) => (
              <div key={user.id} className="user">
                <span> {user.name}</span>{" "}
                {/* Assuming the user object has a 'name' property */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
