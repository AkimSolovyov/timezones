import React, { useState } from 'react';

const Time = ({ timer, offset }) => {
  const [editable, setEditable] = useState(false);

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

    timer.setTime(
      timer.time.set({ hours: hours, minutes: minutes, seconds: 0 })
    );

    console.log(timer.time);

    setEditable(prev => !prev);
  };

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
        ></input>
      )}
    </span>
  );
};

export default Time;
