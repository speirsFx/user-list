import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <div>
  <li className='list-group-item'>
          <img src={post.avatar} alt = 'img' />
          <h3>Name : {post.first_name} {post.last_name}</h3>
          
        
         Email:  {post.email}
        </li>
        </div>
      ))}
      <br />
    </ul>
  );
};

export default Posts;
