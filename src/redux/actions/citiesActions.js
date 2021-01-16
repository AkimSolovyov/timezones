import * as TYPES from '../types';
import * as CONSTANTS from '../../constants';

export const getCity = () => ({
  type: TYPES.GET_CITY,
});

export const getCitySuccess = city => ({
  type: TYPES.GET_CITY_SUCCESS,
  payload: city,
});

export const getCityFailure = error => ({
  type: TYPES.GET_CITY_FAILURE,
  payload: error,
});

export function fetchCity(city) {
  return async dispatch => {
    dispatch(getCity());

    try {
      const response = await fetch(
        `${CONSTANTS.API_URL}?key=${CONSTANTS.API_KEY}&q=${city}&format=json`
      );
      const data = await response.json();

      dispatch(getCitySuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getCityFailure('Something gone wrong'));
    }
  };
}
