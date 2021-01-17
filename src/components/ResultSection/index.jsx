import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';

//local imports
import ItemList from '../ItemList';
import useNewTimer from '../../hooks/useNewTimer';

const ResultSection = props => {
  const cities = useSelector(state => state.app.cities);

  // global timer for all items
  const timer = useNewTimer(DateTime.local().toUTC());

  // const setNewTimerHandler = () => {
  //   console.log('timer before: ', timer.toFormat('HH:mm:ss'));

  //   const newT = useNewTimer(timer.set({ hours: 14, minutes: 0, seconds: 0 }));

  //   console.log('timer after: ', newT.toFormat('HH:mm:ss'));
  // };

  return (
    <section className='py-5 text-center container'>
      <div className='row'>
        {!!cities && (
          <div className='col-lg-12 mx-auto'>
            <ItemList items={cities} timer={timer} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
