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
  // DateTime.fromSQL('2017-05-15 09:24:15');
  const { hour, minute } = DateTime.fromSQL(data).c;
  return { hour, minute };
};

export const pasrseFloatOffset = str => {
  const res = String(str).split('.');
  const h = Number(res[0] * 60);
  const m = h > 0 ? h + Number(res[1]) : h - Number(res[1]);

  return m;
};
