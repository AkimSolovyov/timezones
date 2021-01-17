import { DateTime } from 'luxon';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

export const getTime = data => {
  return DateTime.fromSQL(data).toFormat('TT');
};

export const reCalcTime = (dateTime, offset) => {
  const t = DateTime.local().toUTC();
  return t;
};
