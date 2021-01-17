import * as TYPES from '../types';

export const initialState = {
  cities: [],
  lastAdded: '',
  loading: false,
  error: '',
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_CITY:
      return { ...state, loading: true, lastAdded: '' };
    case TYPES.GET_CITY_SUCCESS:
      return {
        cities: [
          ...state.cities,
          {
            city: action.payload.data.request[0].query,
            TZOffset: action.payload.data.time_zone[0].utcOffset,
            time: action.payload.data.time_zone[0].localtime,
          },
        ],
        lastAdded: {
          city: action.payload.data.request[0].query,
          TZOffset: action.payload.data.time_zone[0].utcOffset,
          time: action.payload.data.time_zone[0].localtime,
        },
        loading: false,
        error: false,
      };
    case TYPES.GET_CITY_FAILURE:
      return { ...state, loading: false, error: action.payload, lastAdded: '' };
    case TYPES.DELETE_CITY:
      return {
        ...initialState,
        cities: [...state.cities.filter(item => item.city !== action.payload)],
      };
    case TYPES.CHANGE_CITIES_ORDER:
      return {
        ...initialState,
        cities: [...action.payload],
      };
    default:
      return state;
  }
}
