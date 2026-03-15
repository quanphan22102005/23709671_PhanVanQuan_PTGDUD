import React, { useState, useEffect } from 'react';
import UserDetail from './components/UserDetail';

function App() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId >= 1 && userId <= 10) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setUser(null);
    }
  }, [userId]); 

  return (
    <div>
      <input 
        type="number" 
        placeholder="Nhập User ID (1-10)" 
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserDetail user={user} />
      )}
    </div>
  );
}

export default App;