let d;

let options = {
  era: 'Long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long', // short
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

console.log(d.toLocaleString('ru-RU', options));