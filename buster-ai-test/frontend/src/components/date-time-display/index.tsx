import * as React from 'react';

const generateDateTime = (): string => {
  const currentDateTimeObj = new Date(Date.now());
  const fullDate = currentDateTimeObj.toDateString();
  const fullTime = currentDateTimeObj.toLocaleTimeString().toUpperCase();
  const timezoneSuffix = currentDateTimeObj
    .toTimeString()
    .slice(9)
    .split(' ')[0];
  const output = `${fullDate} ${fullTime} ${timezoneSuffix}`;
  return output;
};

export const DateTimeDisplay: React.FC = React.memo(() => {
  const [dateTime, setDateTime] = React.useState(generateDateTime());

  React.useEffect(() => {
    const interval = setInterval(() => setDateTime(generateDateTime()), 1000); // regen every second
    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
});

DateTimeDisplay.displayName = 'DateTimeDisplay';
