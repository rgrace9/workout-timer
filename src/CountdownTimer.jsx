import React, { useEffect, useState } from "react";

const CountdownTimer = ({ initialTime = 30 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return <div style={styles.timer}>{formatTime(time)}</div>;
};

const styles = {
  timer: {
    position: "fixed",
    top: "20px",
    right: "20px",
    fontSize: "72px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    padding: "10px 20px",
    borderRadius: "12px",
    fontFamily: "Arial, sans-serif",
    zIndex: 1000,
  },
};

export default CountdownTimer;
