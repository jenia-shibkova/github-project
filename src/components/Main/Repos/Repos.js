import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './repos.css';
import RepoItem from './RepoItem';
import Loader from '../../Loader';
import { PER_PAGE } from '../../../constants';
import { setCurrentPage, getRepos } from '../../../actions';

const Repos = () => {  
  const [ currentPageIndex, setCurrentPageIndex ] = useState(0);
  const { isFetchingRepos } = useSelector(state => state.app);  
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

  if (isFetchingRepos && repos.length === 0) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (reposCount === 0) {
    return (
      <div className="no-repo">
        <p className="no-repo__desc">Repository list is empty</p>
      </div>
    );
  }

  if (isFetchingRepos && repos.length !== 0) {
    return ( 
      <div className="repos">
        <h2 className="repos__title">Repositories ({reposCount})</h2>
        <div className="repos__list-loader-wrapper">
          <Loader />
        </div>
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
          />
        </div>    
      </div>
    )
  }

  return ( 
    <div className="repos">
      <h2 className="repos__title">Repositories ({reposCount})</h2>
      <ul className="repos__list">
        {currentPageRepos}
      </ul>
      {(reposCount <= 4) ? '' 
      : (
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
            />
          </div> 
        )
      } 
    </div>
  )
};

export default Repos;
