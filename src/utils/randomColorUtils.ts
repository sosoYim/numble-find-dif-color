import { getRandomInt } from './index';

export interface getRandomDifferentColorProps {
  baseColor: number;
  stage: number;
  maxDifference?: number;
}

export const getRandomDifferentColor = (
  baseColor: number,
  stage: number,
  maxDifference = 25,
) => {
  const isPlus = Math.round(Math.random() * 1 + 0) === 1;
  const difference = maxDifference - Math.floor(stage + 1) / 3;
  return (baseColor < 255 - difference && isPlus) || baseColor < difference
    ? baseColor + difference
    : baseColor - difference;
};

export const getRandomColorAndAnswerColor = (stage: number) => {
  const [r, g, b] = [
    getRandomInt({ max: 255, min: 0 }),
    getRandomInt({ max: 255, min: 0 }),
    getRandomInt({ max: 255, min: 0 }),
  ];

  const [difR, difG, difB] = [
    getRandomDifferentColor(r, stage),
    getRandomDifferentColor(g, stage),
    getRandomDifferentColor(b, stage),
  ];
  const normalRGBCode = `rgb(${r},${g},${b})`;
  const answerRGBCode = `rgb(${difR},${difG},${difB})`;
  return { normalData: normalRGBCode, answerData: answerRGBCode };
};
