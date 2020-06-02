import React from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import './LiveSearch.scss';

const LiveSearch = ({ template, setSearchTemplate, requestSearch }) => {
  const handleSetSearch = ({ target: { value } }) => {
    setSearchTemplate(value);
    requestSearch();
  };

  return (
    <div className="search-container">
      <DebounceInput
        className="live-search"
        minLength={1}
        debounceTimeout={300}
        type="text"
        placeholder="Search books here"
        value={template}
        onChange={handleSetSearch}
      />
    </div>
  );
};

LiveSearch.propTypes = {
  template: PropTypes.string.isRequired,
  setSearchTemplate: PropTypes.func.isRequired,
  requestSearch: PropTypes.func.isRequired,
};

export { LiveSearch };
