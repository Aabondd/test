'use strict';

export function randomNumberFromRange(start, end) {
  const range = end - start;
  const random = Math.random() * range;
  const roundedRandomNumber = Math.round(random);
  return start + roundedRandomNumber;
}
