import React from 'react';
import { useSelector } from 'react-redux';

//local imports
import ItemList from '../ItemList';

const ResultSection = props => {
  const cities = useSelector(state => state.app.cities);

  return (
    <section className='pt-5 text-center container'>
      <div className='row'>
        {!!cities && (
          <div className='col-lg-12 mx-auto'>
            <ItemList items={cities} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
