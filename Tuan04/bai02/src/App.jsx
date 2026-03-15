import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);       

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Kết nối API thất bại!');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Bài 2</h1>
      
      {}
      {isLoading && <p>Loading...</p>}
      
      {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}
      
      {!isLoading && !error && <UserList list={users} />}
    </div>
  );
}

export default App;