import { useEffect, useState } from "react";
import getCurrentTime from "../../utils/timeUtil";

const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-cyan-700 font-bold">{time}</span>;
};

export default Clock;
