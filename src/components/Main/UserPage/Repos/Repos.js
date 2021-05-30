import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './repos.css';
import RepoItem from './RepoItem';

const PER_PAGE = 4;

const data = [<RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />,
  <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />,
  <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, 
  <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />,
  <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />, <RepoItem />];


const Repos = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(data.length / PER_PAGE);
  const offset = currentPage * PER_PAGE;
  
  const currentPageData = data
    .slice(offset, offset + PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return ( 
    <div className="repos">
      <h2 className="repos__title">Repositories (249)</h2>
      <ul className="repos__list">
        {currentPageData}
      </ul>
      <div className="pagination-wrapper">
        <div className="pagination-label">{offset + 1}-{offset + PER_PAGE} of {data.length} items</div>
        <ReactPaginate
          previousLabel="&#10094;"
          nextLabel="&#10095;"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          previousLinkClassName="pagination__link"
          nextLinkClassName="pagination__link"
          disabledClassName="pagination__link--disabled"
          activeClassName="pagination__link--active"
          breakLabel="..."
          breakClassName="break-me"        
          // marginPagesDisplayed={2}
        />
      </div>  
    </div>
  )
};

export default Repos;
