import { DateTime } from 'luxon';

export const getTime = data => {
  // DateTime.fromSQL('2017-05-15 09:24:15');
  const { hour, minute } = DateTime.fromSQL(data).c;
  return { hour, minute };
};
