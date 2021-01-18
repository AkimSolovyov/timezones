import React, { useState, useRef, useEffect } from 'react';

const Time = ({ timer, offset }) => {
  const [editable, setEditable] = useState(false);
  const timeInput = useRef(null);

  const toggleEditableHandler = () => {
    setEditable(prev => !prev);
  };

  const getTimerWithOffset = (t, tzoff) => {
    const offsetInMinutes = tzoff * 60;
    return t.time.plus({ minutes: offsetInMinutes });
  };

  const timerWithOffset = getTimerWithOffset(timer, offset);

  const changeTimeHandler = e => {
    const newTime = e.target.value.split(':');

    const hours = newTime[0];
    const minutes = newTime[1];

    const currentDate = new Date();
    currentDate.setHours(Number(hours), Number(minutes));
    const futureDate = new Date(currentDate.getTime() - offset * 60 * 60000);

    if (e.target.value) {
      timer.setTime(
        timer.time.set({
          hours: futureDate.getHours(),
          minutes: futureDate.getMinutes(),
          seconds: 0,
        })
      );
    } else {
      timer.setTime(
        timer.time.set({
          hours: timer.time.hours,
          minutes: timer.time.minutes,
          seconds: 0,
        })
      );
    }

    setEditable(prev => !prev);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      if (editable) {
        timeInput.current.focus();
      }
    }, 300);

    return () => {
      clearTimeout(delay);
    };
  }, [editable]);

  return (
    <span>
      {!editable ? (
        <span onClick={toggleEditableHandler}>
          {timerWithOffset.toFormat('HH:mm:ss')}
        </span>
      ) : (
        <input
          className='form-control form-control-sm'
          type='time'
          style={{ display: 'inline', width: 'auto' }}
          onBlur={changeTimeHandler}
          ref={timeInput}
        ></input>
      )}
    </span>
  );
};

export default Time;
