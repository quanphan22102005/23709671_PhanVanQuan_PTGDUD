import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>This is my profile</h2>
      <p>Name: Phan Van Quan</p>
      <p>MSSV: 23709671</p>
      <Link to="/">
        <button>Back to dashboard</button>
      </Link>
    </div>
  );
};

export default Profile;
