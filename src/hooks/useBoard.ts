import { useLayoutEffect, useReducer } from 'react';

import { boardReducer, initialBoardState } from 'containers/Board/boardReducer';

export function useBoard({
  stage = 0,
  isGaming = true,
  reducer = boardReducer,
}) {
  const [boardState, dispatch] = useReducer(reducer, initialBoardState);

  const renderNextStage = () =>
    dispatch({ type: 'INITIALIZE_BOARD_BY_STAGE', stage });
  // const initializeBoard = () => dispatch({ type: 'INITIALIZE_BOARD' });

  useLayoutEffect(() => {
    if (!isGaming || stage === 0) return;
    renderNextStage();
  }, [stage, isGaming]);

  return { boardState };
}
