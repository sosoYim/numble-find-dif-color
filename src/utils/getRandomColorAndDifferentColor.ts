import { getRandomInt } from './index';
/**
 *
 * @param stage
 * @returns [normalRGBCode, answerRGBCode]
 */
export const getRandomColorAndAnswerColor = (stage: number) => {
  // 차이값과의 차가 0보다 적은 경우 더해주기 위해 245까지만
  const [r, g, b] = [
    getRandomInt(245, 10),
    getRandomInt(245, 10),
    getRandomInt(245, 10),
  ];

  const colorDifference = 100 - stage * 10 > 5 ? 100 - stage * 5 : 5;

  // 같은 방향으로 증가 혹은 감소하면 색 차이가 덜하다...?
  const [difR, difG, difB] = [
    r - colorDifference,
    stage > 4 ? g - colorDifference : g + colorDifference,
    b - colorDifference,
  ];
  const normalRGBCode = `rgb(${r},${g},${b} )`;
  const answerRGBCode = `rgb(${difR},${difG},${difB} )`;
  return [normalRGBCode, answerRGBCode];
};
