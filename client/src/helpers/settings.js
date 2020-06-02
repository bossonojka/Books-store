export const parseState = (data) => {
  const { page, searchTemplate, categories } = data;

  return {
    pagination: { page, pageLimit: 24 },
    searchWord: searchTemplate,
    categories,
  };
};

export const parseQuery = (...data) => {
  return [...data].reduce((url, curr) => {
    const categories = Object.entries(curr.categories).filter((category) => category.includes(true));

    url += `${curr.pagination.page + 1}&_limit=${curr.pagination.pageLimit}`;

    if (curr.searchWord) url += `&title_like=${curr.searchWord}`;

    if (categories.length) {
      const categoriesTemplate = categories.reduce((acc, curr) => {
        acc += `&category=${curr[0]}`;
        return acc;
      }, '');
      url += categoriesTemplate;
    }

    return url;
  }, '/books?_page=');
};
