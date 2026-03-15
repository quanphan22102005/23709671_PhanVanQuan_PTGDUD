import React from 'react';

function UserList({ list }) {
  return (
    <div>
      {list.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserList;