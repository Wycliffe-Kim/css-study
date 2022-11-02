# Using CSS animations

CSS 애니메이션을 사용하면 한 CSS 스타일에서 다른 CSS 스타일로 전환하는 애니메이션을 만들 수 있다.

애니메이션은 시작 및 종료 상태, 중간 프레임을 나타내는 키 프레임으로 구성된다.

스크립트를 사용해서 애니메이션을 하는 것과 비교했을 때 CSS 애니메이션이 가지는 장점은 다음과 같다.

1. JS를 모르더라도 간단한 애니메이션을 쉽게 만들 수 있다.
2. 시스템 성능이 좋지 않다고 하더라도 애니메이션이 잘 돌아간다. JS에서는 간단한 애니메이션도 종종 좋은 성능을 보이지 않는다. 그러나 렌더링 엔진이 프레임 스킵이나, 다른 테크닉들을 사용해서 성능을 보장해주고, 그리하여 가능한한 부드럽게 애니메이션이 동작하도록 해준다.
3. 브라우저가 애니메이션 시퀀스를 제어하도록 하면, 예를 들어 현재 표시되지 않는 탭에서 실행 중인 애니메이션 업데이트의 빈도를 줄여 성능과 효율성을 최적화 할 수 있다.

## 애니메이션 설정

CSS 애니메이션 시퀀스를 생성하기 위해서는 애니메이션을 하고자 하는 요소들에 `animation` 속성 혹은 그 하위 속성들을 사용하여 스타일링해야 한다. 이를 통해 타이밍, 길이, 추가로 애니메이션 시퀀스들이 어떻게 진행되어야 하는지에 대한 정보들을 설정할 수 있다. 이 속성으로 외관을 만드는 것은 아니다. 그것은 추후에 설명할 `@keyframes`에서 한다.

애니메이션의 하위 속성들은 다음과 같다.

- `animation-delay`: 요소 로딩과 애니메이션 시퀀스 시작 사이의 지연 시간과, 애니메이션이 처음부터 즉시 시작해야 하는지 아니면 중간에 시작해야 하는지 여부를 지정한다.
    ``` css
    animation-delay: 250ms;
    animation-delay: 2s;
    animation-delay: -2s;
    ```
- `animation-direction`: 애니메이션의 첫 번째 반복이 정방향 또는 역방향이어야 하는지 여부와, 후속 반복이 시퀀스를 통해 실행될 때마다 방향을 바꾸거나 시작점으로 재설정하고 반복해야 하는지 여부를 지정한다.
    ``` css
    animation-direction: normal;
    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
    ```
- `animation-duration`: 애니메이션이 한 주기를 완료하는 시간을 지정한다.
    ``` css
    animation-duration: 750ms;
    animation-duration: 3s;
    animation-duration: 0s;
    ```
- `animation-fill-mode`: 애니메이션이 실행 전후에 대상에 스타일을 적용하는 방법을 지정한다.
    ``` css
    animation-fill-mode: none;
    animation-fill-mode: forward;
    animation-fill-mode: backward;
    animation-fill-mode: both;
    ```
- `animation-iteration-count`: 애니메이션이 반복되어야 하는 횟수를 지정한다.
    ``` css
    animation-iteration-count: 0;
    animation-iteration-count: 2;
    animation-iteration-count: 1.5;
    ```
- `animation-name`: 애니메이션의 키프레임을 설명하는 `@keyframes`의 이름을 지정한다.
    ``` css
    .box {
      animation-name: rotate;
      animation-duration: 0.7s;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    ```
- `animation-play-state`: 애니메이션 시퀀스를 일시중지할지 또는 재생할지를 지정한다.
    ``` css
    animation-play-state: paused;
    animation-play-state: running;
    ```
- `animation-timing-function`: 가속 곡선을 설정하여 애니메이션이 키프레임을 통해 전환되는 방식을 지정한다.
    ``` css
    animation-timing-function: linear;
    animation-timing-function: ease-in-out;
    animation-timing-function: steps(5, end);
    animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
    ```

## 키프레임을 사용한 애니메이션 시퀀스 정의

앞의 설정으로 애니메이션의 타이밍 관련된 설정을 하고 나면, 애니메이션을 할 때 드러날 모양에 대해서 설정해야 한다. 이는 `@keyframes`를 통해서 하나 이상의 키프레임을 설정함으로써 이루어진다. 각 키프레임은 애니메이션 시퀀스 동안의 주어진 시간 동안 어떻게 렌더링이 이루어져야하는지를 정의한다.

키프레임은 백분율을 사용해서 애니메이션 시퀀스의 각 시퀀스 별 모양을 따로 정의할 수 있다. `0%`는 시작 시퀀스이고, `100%`는 종료 시퀀스다. 각각 `from`, `to`로 나타낼 수 있다. 만약에 이 둘이 정의되어 있지 않다면 키프레임에 정의되어 있는 속성들이 시작과 종료 시퀀스에 다 적용된다.

## 애니메이션 속성을 `animation`에 한꺼번에 표현하기

다음의 예제를 보자

``` css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

이는 `animation` 속성을 사용하여 다음과 같이 표현될 수 있다.

``` css
p {
  animation: 3s infinite alternate slidein;
}
```

`animation`의 문법은 다음과 같다.

``` css
/* duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name */
p {
  animation: 3s ease-in 1s 2 reverse both paused slidein
}

/* duration | easing-function | delay | name */
p {
  animation: 3s linear 1s slidein;
}

/* two animations */
p {
  animation: 3s linear slidein, 3s ease-out 5s slideout;
}
```

## 여러 개의 애니메이션 속성 값 설정

CSS 애니메이션의 속성을 풀어서 지정하는 속성들은 여러 개의 값을 `,`로 구분하여 가질 수 있다. 이와 같은 방식은 여러 개의 애니메이션이 있을 때 각 애니메이션에 다른 설정을 주고 싶을 때 사용된다.

``` css
.test1 {
  animation-name: fadeInOut, moveLeft300px, bounce;
  animation-duration: 2.5s, 5s, 1s;
  animation-iteration-count: 2, 1, 5;
}

.test2 {
  animation-name: fadeInOut, moveLeft300px, bounce;
  animation-duration: 3s;
  animation-iteration-count: 1;
}

.test3 {
  animation-name: fadeInOut, moveLeft300px, bounce;
  animation-duration: 2.5s, 5s;
  animation-iteration-count: 2, 1;
}
```

- `.test1`는 3개의 애니메이션에 속성들이 각각 적용된다.
- `.test2`는 3개의 애니메이션에 이름만 각각 지정되고, `duration`, `iteration-count`는 공유한다.
- `.test3`는 `fadeInOut`은 `2.5s`, `2`를 사용하고, `moveLeft300px`은 `5s`, `1`을 사용한다. 그러나 `bounce`에 해당하는 값은 없다. 이럴 때에 첫 번째 값으로 돌아가 공유하게 된다. 그러므로 `bounce`는 `2.5s`, `2`를 사용한다.

애니메이션 예제는 [다음 링크](./examples/)를 다운로드 받아서 확인.