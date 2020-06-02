export const getParamsFromArray = (arr) => {
  let params = '';
  return arr.map((itemId) => {
    params += `id=${itemId}&`;
    return params;
  });
};
