// utils/index.js
export const generateTimeSlots = (startTime, endTime, interval) => {
  const start = parseTime(startTime);
  const end = parseTime(endTime);
  const slots = [];

  for (let time = start; time < end; time += interval * 60000) {
    const date = new Date(time);
    slots.push(formatTime(date));
  }

  return slots;
};

const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return new Date().setHours(hours, minutes, 0, 0);
};

export const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
