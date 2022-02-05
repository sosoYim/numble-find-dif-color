import React from 'react';
import { HeaderProps } from './Header.types';
export function Header({ state }: HeaderProps) {
  return (
    <header>
      스테이지: {state.stage}, 남은 시간: {state.leftTime}, 점수: {state.score}
    </header>
  );
}
