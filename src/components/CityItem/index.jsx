import React from 'react';
import { useDispatch } from 'react-redux';

// local imports
import { deleteCity } from '../../redux/actions/citiesActions';
import Time from '../Time';

const CityItem = ({ item, timer }) => {
  const { city, TZOffset, time } = item;
  const dispatch = useDispatch();

  const cityDeleteHandler = () => {
    dispatch(deleteCity(city));
  };

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='p-2 col-sm-6 text-start'>
        <strong>{city}</strong>
      </div>
      <div className='p-2 col-sm text-start'>
        <strong>UTC offset:</strong> {TZOffset}
      </div>
      <div className='p-2 col-sm text-start'>
        {/*<div>
          <strong>Fetched Time:</strong> <time>{time.slice(-5)}</time>
        </div>*/}
        <div>
          <strong>Time:</strong> <Time timer={timer} offset={TZOffset} />
        </div>
      </div>

      <div className='p-2 text-start'>
        <button
          type='button'
          className='btn btn-outline-danger btn-sm'
          onClick={cityDeleteHandler}
        >
          <i
            className='bi bi-trash'
            style={{
              fontSize: '1rem',
              color: 'inherit',
              position: 'relative',
              bottom: '1px',
            }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CityItem;
