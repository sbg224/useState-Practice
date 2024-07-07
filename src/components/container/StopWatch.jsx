import "../../styles/container/StopWatch.css";

export default function StopWatch({ value }) {
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0",
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const timeString = formatTime(value);

  return (
    <div id="stopWatch">
      <p>{timeString}</p>
    </div>
  );
}
