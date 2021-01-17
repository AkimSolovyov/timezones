import React from 'react';

// Local imports
import SearchSection from './components/SearchSection';
import ResultSection from './components/ResultSection';

function App() {
  return (
    <>
      <header>
        <div className='bg-dark' id='navbarHeader'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 py-3'>
                <h4 className='text-white'>Timezones</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className='app'>
        <SearchSection />
        <ResultSection />
      </main>
    </>
  );
}

export default App;
