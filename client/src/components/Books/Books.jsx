import React, { useEffect, useState } from 'react';
import { SlickSlider } from '../Slider/Slider';
import { Loader } from '../Loader/Loader';
import { LiveSearch } from '../LiveSearch/LiveSearch';
import { FilterContainer } from '../Filter';
import { Book } from './Book/Book';
import { Button } from '../_shared/Button';
import PropTypes from 'prop-types';
import { bookType } from '../../helpers/propTypes';
import { InfinityScroll } from '../../helpers/InfinityScroll';

import './Books.scss';

export const Books = ({
  books,
  favourites,
  getFavouritesByIds,
  favouritesBooks,
  isLoading,
  template,
  pagesCount,
  requestSearch,
  requestBooks,
  setSearchTemplate,
}) => {
  const [isFavourites, setIsFavourites] = useState(false);

  useEffect(() => {
    if (!books.length) {
      requestBooks();
    }
  }, []);

  const handleLoadContend = () => {
    requestBooks();
  };

  const toggleShowFavourites = () => {
    if (!isFavourites && favourites.length) {
      getFavouritesByIds(favourites);
      setIsFavourites(true);
      return;
    }
    setIsFavourites(false);
  };

  const currentBooks = isFavourites ? favouritesBooks : books;

  return (
    <div className="books">
      <SlickSlider />
      <FilterContainer />
      <div>
        <div className="books-controls">
          <Button
            className="books-control"
            title={`${isFavourites ? 'Show All' : 'Show Favorites'}`}
            onClick={toggleShowFavourites}
          />
          <LiveSearch setSearchTemplate={setSearchTemplate} template={template} requestSearch={requestSearch} />
        </div>

        {!currentBooks.length && !isLoading ? (
          <div className="search-error-msg">Books not found</div>
        ) : (
            <div className="books-list">
              {!isFavourites ? (
                <InfinityScroll
                  isLoading={isLoading}
                  pagesCount={pagesCount}
                  fetchFn={handleLoadContend}
                  Component={Book}
                >
                  {currentBooks}
                </InfinityScroll>
              ) : (
                  favouritesBooks.map((book) => {
                    return <Book data={book} key={book.id} />;
                  })
                )}
            </div>
          )}
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  favourites: PropTypes.arrayOf(PropTypes.number).isRequired,
  getFavouritesByIds: PropTypes.func.isRequired,
  favouritesBooks: PropTypes.arrayOf(PropTypes.shape(bookType)).isRequired,
  isLoading: PropTypes.bool.isRequired,
  template: PropTypes.string.isRequired,
  pagesCount: PropTypes.number,
  requestSearch: PropTypes.func.isRequired,
  requestBooks: PropTypes.func.isRequired,
  setSearchTemplate: PropTypes.func.isRequired,
};

Books.defaultProps = {
  pagesCount: 0,
};
