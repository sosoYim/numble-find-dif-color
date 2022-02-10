export interface BoardProps {
  stage: number;
  isGaming: boolean;
  handleClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    isAnswer: boolean,
  ) => void;
  size?: number;
}
