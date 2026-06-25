import React, { useEffect, useState } from "react";
import API from "../api";
import AlumniCard from "../components/AlumniCard";

function Alumni() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Alumni Directory</h2>
      <div className="grid">
        {users.map((user) => (
          <AlumniCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Alumni;
