import React from 'react';

function UserDetail({ user }) {
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default UserDetail;