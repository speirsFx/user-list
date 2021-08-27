import React from 'react';

const Pagination = ({ changePage}) => {

  const clickHandler = (id) => {
    changePage(id);
    
  }

  return (
    <nav>
    <ul class="pagination">

    
      <li class="page-item"><a class="page-link" onClick={() => clickHandler(1)} href="#">1</a></li>
      <li class="page-item"><a class="page-link" onClick={() => clickHandler(2)} href="#">2</a></li>
  

    </ul>
  </nav>
  );
};

export default Pagination;
