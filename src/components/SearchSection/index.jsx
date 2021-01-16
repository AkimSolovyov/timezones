import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//local imports
import { fetchCity, getCityFailure } from '../../redux/actions/citiesActions';
import { getTime } from '../../helpers';

const SearchSection = props => {
  const [cityName, setCityName] = useState('');
  const [lastAddedTime, setLastAddedTime] = useState('');

  const loading = useSelector(state => state.app.loading);
  const error = useSelector(state => state.app.error);
  const result = useSelector(state => state.app.lastAdded);
  const dispatch = useDispatch();

  const changeInputHandler = event => {
    event.persist();
    setCityName(prevState => (prevState = event.target.value));
  };

  const submitHandler = event => {
    event.preventDefault();

    if (!cityName.length) {
      dispatch(getCityFailure('City Name cannot be empty!'));
      return;
    }

    dispatch(fetchCity(cityName));
  };

  const updateTime = () => {
    // this.setState({
    //   date: new Date()
    // });
  };

  useEffect(() => {
    if (result) {
      setLastAddedTime(getTime(result.time));
      console.log(getTime(result.time));
    }
    // return () => {

    // }
  }, [result]);

  return (
    <section className='py-5 text-center container'>
      <div className='row'>
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h3 className='fw-light'>Enter a City Name</h3>
        </div>
      </div>
      <form
        className='row py-3 d-flex justify-content-center'
        onSubmit={submitHandler}
      >
        <div className='col-auto'>
          <input
            className='form-control'
            placeholder='City...'
            onChange={changeInputHandler}
            value={cityName}
          ></input>
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-success mb-3'>
            Submit
          </button>
        </div>
      </form>
      <div className='row my-2'>
        {error && !loading && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}

        {!error && !loading && result && (
          <div className='alert alert-success' role='alert'>
            <h4>Success! New item was added:</h4>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <strong>City:</strong> {result.city}
              </li>
              <li className='list-inline-item'>
                <strong>TZ Offset:</strong> {result.TZOffset}
              </li>
              <li className='list-inline-item'>
                <strong>Time:</strong>{' '}
                <time>
                  `${lastAddedTime.hour}:${lastAddedTime.minute}`
                </time>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
