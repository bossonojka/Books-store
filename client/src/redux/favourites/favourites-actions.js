import { TOGGLE_FAVOURITES, GET_FAVOURITES_BY_IDS } from './favourites-action-types';
import { HttpService } from '../../services/HttpService';
import { getParamsFromArray } from '../../helpers/paramsBuilders';

export const toggleFavourites = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_FAVOURITES, payload: { id } });
};

export const getFavouritesByIds = (ids) => (dispatch) => {
  return HttpService.get(`/books/ids/?${getParamsFromArray(ids)}`).then(({ data }) => {
    return dispatch({ type: GET_FAVOURITES_BY_IDS, payload: { favouritesBooks: data } });
  });
};
