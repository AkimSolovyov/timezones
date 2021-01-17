import React, { useState } from 'react';
import { DateTime } from 'luxon';

//local imports
import useNewTimer from '../../hooks/useNewTimer';

const Time = props => {
  const timer = useNewTimer(DateTime.fromSQL(props.time));
  const [editable, setEditable] = useState(false);

  const toggleEditableHandler = () => {
    setEditable(prev => (prev = !editable));
  };

  // const dt = DateTime.local();
  // dt.zoneName; //=> 'America/New_York'
  // dt.offset; //=> -240
  // dt.offsetNameShort; //=> 'EDT'
  // dt.offsetNameLong; //=> 'Eastern Daylight Time'
  // dt.isOffsetFixed; //=> false
  // dt.isInDST; //=> true

  return (
    <span>
      {!editable ? (
        <span onClick={toggleEditableHandler}>{timer.toFormat('TT')}</span>
      ) : (
        <input
          className='form-control form-control-sm'
          type='text'
          style={{ display: 'inline', width: 'auto' }}
          onBlur={toggleEditableHandler}
        ></input>
      )}
    </span>
  );
};

export default Time;
