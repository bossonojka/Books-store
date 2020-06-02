export const filterById = (arr, actionId) => {
  return arr.filter((id) => actionId !== id);
};

export const filterByItemId = (arr, itemId) => {
  return arr.filter((item) => item.id !== itemId);
};
