import {
  getRandomInt,
  getPieceCount,
  getPieceCountByRow,
  getRandomColorAndAnswerColor,
} from 'utils';

import { BoardState, BoardAction } from './boardReducer.types';

export const initialBoardState: BoardState = {
  pieceCount: getPieceCount(1),
  pieceCountByRow: getPieceCountByRow(1),
  answerIndex: getRandomInt({ max: getPieceCount(1), min: 0 }),
  ...getRandomColorAndAnswerColor(1),
};

export function boardReducer(
  state: BoardState,
  action: BoardAction,
): BoardState {
  switch (action.type) {
    case 'INITIALIZE_BOARD':
      return {
        ...initialBoardState,
      };
    case 'INITIALIZE_BOARD_BY_STAGE':
      return {
        pieceCount: getPieceCount(action.stage),
        pieceCountByRow: getPieceCountByRow(action.stage),
        answerIndex: getRandomInt({ max: getPieceCount(action.stage), min: 0 }),
        ...getRandomColorAndAnswerColor(action.stage),
      };
    default:
      throw new Error('Wrong BoardAction type');
  }
}
