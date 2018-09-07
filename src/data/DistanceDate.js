export const dateDistanceToMinute = (dateA, dateB) => {
  const timeA = dateA.hour() * 60 + dateA.minute();
  const timeB = dateB.hour() * 60 + dateB.minute();
  return timeB - timeA;
};
export const minuteToTime = minute => {
  const h = parseInt(minute / 60);
  const m = parseInt(minute % 60);
  return { hour: h, minute: m };
};
