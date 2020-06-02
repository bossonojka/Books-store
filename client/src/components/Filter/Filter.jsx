import React, { useEffect, useState } from 'react';
import arrow from '../../assets/arrow_open_close_filter.svg';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = ({ requestCategories, categories, setCheckedCategory, requestBooks }) => {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (!Object.entries(categories).length) requestCategories();
  }, []);

  const handleSwitchCategory = ({ target }) => {
    const { name, checked } = target;
    setCheckedCategory({ name, checked });
    requestBooks();
  };

  const handleShowCheckboxFilter = () => {
    setIsHide(!isHide);
  };

  const entries = Object.entries(categories).map((category) => {
    return (
      <div key={category[0]} className="category">
        <input
          onChange={handleSwitchCategory}
          type="checkbox"
          name={category[0]}
          checked={category[1]}
          className="category-input"
        />
        <span className="category-title">{category[0]}</span>
      </div>
    );
  });

  return (
    <div className={`filter-container ${isHide && 'hide'}`}>
      {entries}
      <div className="show-button" onClick={handleShowCheckboxFilter}>
        <img className={`show-button-img ${isHide && 'rotate'}`} src={arrow} alt="toggle" />
      </div>
    </div>
  );
};

Filter.propTypes = {
  requestCategories: PropTypes.func.isRequired,
  categories: PropTypes.objectOf(PropTypes.bool).isRequired,
  setCheckedCategory: PropTypes.func.isRequired,
  requestBooks: PropTypes.func.isRequired,
};

export { Filter };
