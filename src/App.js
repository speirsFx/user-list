import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
      setPosts(res.data.data);
    
      setLoading(false);
    };

    fetchPosts();
  }, [currentPage]);

  const changePage = (id) => {
    setCurrentPage(id);
  }
  console.log(currentPage);


  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={posts} loading={loading} />
     <Pagination  changePage ={changePage} />
    </div>
  );
};

export default App;
