import React from 'react';

function UserList({ list }) {
  return (
    <div>
      <h1>Danh sách Users</h1>
      {list.map((user) => (
        <div key={user.id}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;