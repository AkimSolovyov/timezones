import React from 'react';
import { DateTime } from 'luxon';

//local imports
import useNewTimer from '../../hooks/useNewTimer';

const Time = props => {
  const timer = useNewTimer(DateTime.local());

  // const dt = DateTime.local();
  // dt.zoneName; //=> 'America/New_York'
  // dt.offset; //=> -240
  // dt.offsetNameShort; //=> 'EDT'
  // dt.offsetNameLong; //=> 'Eastern Daylight Time'
  // dt.isOffsetFixed; //=> false
  // dt.isInDST; //=> true

  return <div>{timer.toString()}</div>;
};

export default Time;
