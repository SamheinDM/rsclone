/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

const DAYS_ARR = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const LAST_TWO_DAYS = ['СЕГОДНЯ', 'ВЧЕРА'];
const today = new Date(Date.now());
const todayDate = today.toDateString();

function getTime(date) {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

function isItToday(date) {
  const dataDate = date.toDateString();
  return todayDate === dataDate;
}

function isItYesterday(date) {
  const millisecondsInDay = 86400000;
  const difference = today - date;
  return difference <= millisecondsInDay;
}

function getDate(date) {
  const millisecondsInWeek = 604800000;
  const difference = today - date;
  if (difference <= millisecondsInWeek) {
    return DAYS_ARR[date.getDay()];
  }

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

function getChatDate(date) {
  if (isItToday(date)) {
    return getTime(date);
  }

  return getDate(date);
}

function getMessageDate(date) {
  if (isItToday(date)) {
    return LAST_TWO_DAYS[0];
  }

  if (isItYesterday(date)) {
    return LAST_TWO_DAYS[1];
  }

  return getDate(date).toUpperCase();
}

export { getTime, getChatDate, getMessageDate };
