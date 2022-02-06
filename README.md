# [React] 상태관리 라이브러리를 사용하지 않고 다른 색깔 찾기 게임 제작
> Numble에서 주최하는 0~1년차 리액트 개발자를 위한 미션

[Numble 소개 페이지 바로가기](https://www.numble.it/45cee9d3-49ad-4f67-9d2a-14607c2eeba7?fbclid=IwAR1zXOrV9E8GbksogWSZk6ynGYfm16CmOzX11_vKPZrl4xDIlOSrDIp7C7Y#c4eaa8bc4ec1492aa0be0fc9ff04d2e2)

## 조건

1. React Framework를 사용할 것
2. Function Component를 활용할 것
3. Javascript보다는 Typescript를 활용할 것
4. 서버에 배포할 것 (Vercel과 같은 서비스를 이용해보세요)
5. Context, Redux, Mobx, Recoil 등 상태관리 도구를 사용하지 않을 것

## 요구사항

- [x] Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)개의 사각형이 표시되며, 그 중 하나만 색깔이 다릅니다.
- [x] 한 stage의 제한 시간은 15초입니다.
- 색이 다른 사각형(정답)을 클릭한 경우 아래 변경사항이 적용됩니다.
  - [x] 다음 스테이지로 넘어갑니다.
  - [x] Math.pow(stage, 3) \* 남은시간 만큼의 score가 누적됩니다
- 오답을 클릭한 경우 아래 변경사항이 적용됩니다.
  - [x] 현재 stage의 남은 시간이 3초 줄어듭니다.
  - [x] 남은 시간이 0초 이하가 되면 게임이 종료됩니다. 최종 stage와 누적 score를 출력하고, 새로운 게임을 시작할 수 있습니다.
- [x] stage가 올라갈수록 정답과 오답의 색상 차이가 줄어듭니다.

## 과제 제출 블로그

[작성 후 링크 업데이트 예정](/)
