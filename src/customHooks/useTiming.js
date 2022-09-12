import { useState, useEffect, useRef } from "react";

export const useTiming = () => {
  const [active, setActive] = useState(false);
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 2));
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59) + 0);

  var timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
        setActive(true);
        clearInterval(timer.current);
      }
    }, 1000);

    return () => clearInterval(timer.current);
  }, [minutes, seconds]);

  return { minutes, seconds, active };
};
