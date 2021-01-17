import moment from 'moment';
import * as TYPES from '../types';

import { pasrseFloatOffset } from '../../helpers/index';

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
      console.log(
        action.payload.data.time_zone[0].localtime,
        action.payload.data.time_zone[0].utcOffset
      );

      const t = moment(action.payload.data.time_zone[0].localtime);

      console.log(
        t.utcOffset(action.payload.data.time_zone[0].utcOffset * 60, false)
      );

      console.log(t.utc().format('HH:mm:ss'));

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
