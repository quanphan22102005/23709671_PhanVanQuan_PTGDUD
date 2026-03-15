import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';

function App() {
  const [allPosts, setAllPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setAllPosts(data);
        setFilteredPosts(data); 
      } catch (error) {
        console.error("Lỗi fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []); 

  useEffect(() => {
    const results = allPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, allPosts]); 

  return (
    <div>
      <h1>Bài 4</h1>
      
      <input
        type="text"
        placeholder="Tìm kiếm theo tiêu đề..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? <p>Đang tải bài viết...</p> : <PostList posts={filteredPosts} />}
    </div>
  );
}

export default App;