const decrementClock = ({ min, sec }) => {
  if (sec === 0) return { min: min - 1, sec: 59 };
  return { min, sec: sec - 1 };
};

const formatUnits = (unit) => unit.toString().padStart(2, "0");

const displayClock = ({ min, sec }) => {
  const clock = `${formatUnits(min)}:${formatUnits(sec)}`;

  console.log(clock);
};

const areMinutesAndSecondsPositive = (clock) => clock.min > 0 || clock.sec > 0;

const timer = function (mins, seconds = 0) {
  let clock = { min: mins, sec: seconds };

  if (!areMinutesAndSecondsPositive(clock)) throw "Invalid seconds or minutes";

  const timerId = setInterval(() => {
    console.clear();
    clock = decrementClock(clock);
    displayClock(clock);

    if (!areMinutesAndSecondsPositive(clock)) clearInterval(timerId);
  }, 1000);
};

timer(0, 5);
