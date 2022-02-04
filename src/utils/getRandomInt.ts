/**
 *
 * @param max
 * @param min
 * @returns randomInt
 */
export const getRandomInt = (max: number, min: number) => {
  return Math.floor(Math.random() * max + min);
};
