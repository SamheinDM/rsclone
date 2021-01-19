/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

const DAYS_ARR = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

export default function getDate(date) {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const today = new Date(Date.now());
  const todayDate = today.toDateString();
  const dataDate = date.toDateString();
  if (todayDate === dataDate) {
    return `${hours}:${minutes}`;
  }

  const millisecondsInWeek = 604800000;
  const difference = today - date;
  if (difference <= millisecondsInWeek) {
    return DAYS_ARR[date.getDay()];
  }

  return `${day}.${month}.${year}`;
}
