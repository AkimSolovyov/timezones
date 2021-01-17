import React from 'react';

const Spinner = () => {
  return (
    <div className='text-center'>
      <div
        className='spinner-grow text-success'
        style={{ width: '2rem', height: '2rem' }}
        role='status'
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
