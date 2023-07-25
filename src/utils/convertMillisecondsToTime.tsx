export const convertMillisecondsToTime = (milliseconds:number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  const remainingDays = days - years * 365;
  const remainingHours = hours - days * 24;
  const remainingMinutes = minutes - hours * 60;
  const remainingSeconds = seconds - minutes * 60;

  return {
    years,
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};
