export const getPieceCount = (stage: number) =>
  Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);

export const getPieceCountByRow = (stage: number) =>
  Math.sqrt(Math.pow(Math.round((stage + 0.5) / 2) + 1, 2));

// board 내에서 다양한 게임을 실행할 수 있다는 전제하에 작업했기 때문에
// gameType을 상태로 두고 타입 이름에 따라 getRandomColorAndAnswerColor 등의 함수로
// normalData와 answerData 를 객체로 받아오는 함수가 필요합니다.
