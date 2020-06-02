import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const InfinityScroll = ({ isLoading, pagesCount, fetchFn, children, scrollCount, Component }) => {
  const observer = useRef();

  const targetElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && children.length < pagesCount) fetchFn();
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, children.length < pagesCount]
  );

  return children.map((item, ind) => {
    if (children.length - scrollCount === ind) return <Component data={item} key={item.id} ref={targetElement} />;
    return <Component data={item} key={item.id} />;
  });
};

InfinityScroll.propTypes = {
  Component: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  pagesCount: PropTypes.number,
  fetchFn: PropTypes.func.isRequired,
};

InfinityScroll.defaultProps = {
  scrollCount: 4,
  pagesCount: 0,
};

export { InfinityScroll };
