import { useLayoutEffect, useReducer, useEffect } from 'react';
import { gameReducer, initialGameState } from 'components/App/gameReducer';

export function useGame({ reducer = gameReducer } = {}) {
  const [gameState, dispatch] = useReducer(reducer, initialGameState);

  const initializeGame = () => dispatch({ type: 'INITIALIZE_GAME' });
  const goNextStage = ({ stage, score }: { stage: number; score: number }) =>
    dispatch({ type: 'GO_NEXT_STAGE', stage: stage, score: score });
  const chooseWrongAnswer = () => dispatch({ type: 'CHOOSE_WRONG_ANSWER' });
  const countingLeftTime = () => dispatch({ type: 'COUNTING_LEFTTIME' });
  const finishGame = () => dispatch({ type: 'FINISH_GAME' });

  useLayoutEffect(() => {
    const clearId =
      gameState.leftTime === 0
        ? finishGame()
        : setInterval(() => countingLeftTime(), 1000);
    if (clearId) return () => clearInterval(clearId);
  }, [gameState.leftTime]);

  useEffect(() => {
    if (gameState.isGaming) return;
    setTimeout(() => {
      window.alert(
        `GAME OVER!\n스테이지: ${gameState.stage}, 점수:${gameState.score}`,
      );
      initializeGame();
    }, 40);
  }, [gameState.isGaming]);

  const handleClick = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isAnswer: boolean,
  ) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('piece')) return;
    isAnswer
      ? goNextStage({
          stage: gameState.stage + 1,
          score: Math.pow(gameState.stage, 3) * gameState.leftTime,
        })
      : chooseWrongAnswer();
  };

  return {
    gameState,
    handleClick,
  };
}
