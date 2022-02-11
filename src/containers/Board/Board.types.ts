export interface BoardProps {
  stage: number;
  isGaming: boolean;
  handleClickAnswer: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isAnswer: boolean,
  ) => void;
  size?: number;
}
