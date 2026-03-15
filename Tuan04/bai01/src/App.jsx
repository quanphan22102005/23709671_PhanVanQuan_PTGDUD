import React, { useState, useEffect } from 'react';
import UserList from './components/UserList'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log("Dữ liệu về rồi nè:", data); 
        setUsers(data);
      } catch (error) {
        console.error("Lỗi fetch dữ liệu:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      {}
      <UserList list={users} />
    </div>
  );
}

export default App;