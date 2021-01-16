import React from 'react';

// Local imports
import SearchSection from './components/SearchSection';

function App() {
  return (
    <>
      <header>
        <div className='bg-dark' id='navbarHeader'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-8 col-md-7 py-3'>
                <h4 className='text-white'>Timezones</h4>
              </div>
              <div className='col-sm-4 offset-md-1 py-3'></div>
            </div>
          </div>
        </div>
      </header>
      <main className='app'>
        <SearchSection />
      </main>
    </>
  );
}

export default App;
