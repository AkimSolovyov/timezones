import { useState, useEffect } from 'react';

function useNewTimer(currentDate) {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(date.plus({ seconds: 1 }));
  }

  return date;
}

export default useNewTimer;
