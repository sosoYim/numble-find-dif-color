export const getPieceCount = (stage: number) =>
  Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);

export const getPieceCountByRow = (stage: number) =>
  Math.sqrt(Math.pow(Math.round((stage + 0.5) / 2) + 1, 2));
