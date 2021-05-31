import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './repos.css';
import RepoItem from './RepoItem';
import { PER_PAGE } from '../../../constants';
import { setCurrentPage, getRepos } from '../../../actions';

const Repos = () => {  
  const [ currentPageIndex, setCurrentPageIndex ] = useState(0);  
  const { searchValue } = useSelector(state => state.app);
  const { userData } = useSelector(state => state.app);  
  const { reposCount } = userData;
  const { repos } = useSelector(state => state.app); 
  const dispatch = useDispatch();

  const currentPageRepos = repos.map((repo) => (
    <RepoItem 
      key={repo.id}
      name={repo.name} 
      url={repo.url}
      description={repo.description}
    />
  ));

  const pageCount = Math.ceil(reposCount / PER_PAGE);
  const offset = currentPageIndex * PER_PAGE;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPageIndex(selectedPage);
    const page = selectedPage + 1;
    
    dispatch(setCurrentPage(page));    
    dispatch(getRepos(searchValue, page));
  }

  if (reposCount === 0) {
    return (
      <div className="no-repo">
        <p className="no-repo__desc">Repository list is empty</p>
      </div>
    );
  }

  return ( 
    <div className="repos">
      <h2 className="repos__title">Repositories ({reposCount})</h2>
      <ul className="repos__list">
        {currentPageRepos}
      </ul>
      <div className="pagination-wrapper">
        <div className="pagination-label">{offset + 1}-{offset + PER_PAGE} of {reposCount} items</div>
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
