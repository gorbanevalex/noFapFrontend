import { useEffect, useState } from "react";
import { getUserData } from "storage/userStorage";

export const useGetTimer = () => {
  const userData = getUserData();
  const [actualTimer, setActualTimer] = useState<number | null>(null);

  useEffect(() => {
    const changedTimer = setInterval(() => {
      const nowDate = new Date();
      setActualTimer(nowDate.valueOf() - userData?.timer);
    }, 1000);

    return () => {
      clearInterval(changedTimer);
    };
  });

  return { actualTimer };
};
