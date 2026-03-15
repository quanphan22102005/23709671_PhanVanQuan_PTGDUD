import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Không tìm thấy bài viết nào.</p>
      )}
    </div>
  );
}

export default PostList;