const multiply = (a: number, b: number): number => {
  return a * b;
}

const earthQuake = {
  date: new Date(),
  velocity: 4.5
}

const logVelocity = (earthQuake: {date: Date, velocity: number}): void => {
  console.log(`Earthquake on ${earthQuake.date.toDateString()} with velocity ${earthQuake.velocity}`);
}