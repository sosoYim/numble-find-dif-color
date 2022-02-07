import React from 'react';
import { HeaderProps } from './Header.types';
export function Header({ stage, leftTime, score }: HeaderProps) {
  return (
    <header>
      스테이지: {stage}, 남은 시간: {leftTime}, 점수: {score}
    </header>
  );
}
