import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}?_limit=5`);
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError("Không thể tải danh sách.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, completed: false, userId: 1 }),
      });
      const newTodo = await response.json();

      setTodos([newTodo, ...todos]);
      setTitle(''); 
    } catch (err) {
      alert("Lỗi khi thêm mới!");
    } finally {
      setSubmitting(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      alert("Lỗi khi xóa!");
    }
  };

  return (
    <div>
      <h1>Bài 5</h1>

      {}
      <form onSubmit={addTodo}>
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Việc cần làm..."
          disabled={submitting}
        />
        <button type="submit" disabled={submitting || !title}>
          {submitting ? 'Đang thêm...' : 'Thêm'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {loading ? <p>Đang tải...</p> : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title} 
              <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;