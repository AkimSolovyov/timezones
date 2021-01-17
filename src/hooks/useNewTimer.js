import { useState, useEffect } from 'react';

function useNewTimer(currentTime) {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(time.plus({ seconds: 1 }));
  }

  return { time, setTime };
}

export default useNewTimer;
