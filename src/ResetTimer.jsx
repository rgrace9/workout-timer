import { useEffect, useState } from "react";

const RADIUS = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const GREEN = "#3ca846";

export default function CircularTimer({ duration = 30 }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);
  const progress = secondsLeft / duration;

  useEffect(() => {
    if (secondsLeft === 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  return (
    <div
      style={{
        width: "320px",
        height: "520px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: GREEN, // Green screen background
      }}
    >
      <svg width="200" height="200">
        <circle
          r={RADIUS}
          cx="100"
          cy="100"
          fill={GREEN}
          stroke="#ddd"
          strokeWidth="20"
        />
        <circle
          r={RADIUS}
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#00aaff"
          strokeWidth="20"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          transform="rotate(-90 100 100)"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fontSize="32"
          fontWeight={700}
          fill="black"
          fontFamily="sans-serif"
        >
          {secondsLeft}
        </text>
      </svg>
    </div>
  );
}
