import React, { useState, useEffect } from "react";
import axios from "axios";

const OnlineFriends = ({ followerUserIds }) => {
  const [followingUsers, setFollowingUsers] = useState([]);

  useEffect(() => {
    fetchFollowingUsers();
  }, [followerUserIds]);

  const fetchFollowingUsers = async () => {
    try {
      const requests = followerUserIds.map((followerUserId) =>
        axios.get(`/api/${followerUserId}`)
      );
      const responses = await Promise.all(requests);
      const users = responses.map((response) => response.data);
      setFollowingUsers(users);
    } catch (error) {
      console.error("Error fetching following users:", error);
    }
  };

  return (
    <div className="online-friends">
      <h2>Online Friends</h2>
      <ul>
        {followingUsers.map((user) => (
          <li key={user.id}>
            {/* Display the user information */}
            <img src={user.profilePic} alt={user.name} />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineFriends;
