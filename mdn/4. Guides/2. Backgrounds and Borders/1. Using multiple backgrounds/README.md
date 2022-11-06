# 한 번에 여러 배경 사용하기

여러 개의 배경을 한 번에 적용할 수도 있다. 첫 번째 배경을 맨 위로 해서 점점 아래에 위치하는 레이어 구조를 사용하게 된다. 이때, 마지막 배경에만 배경색을 지정할 수 있다.
여러 개의 배경을 적용하는 것은 간단하다.

```css
.myclass {
  background: background1, background 2, ..., backgroundN;
}
```

<br />

`background` 뿐만아니라, `background-color`를 제외한 background 단일 속성에서도 사용할 수 있다. <br />
하위 항목들은 모두 목록으로 작성할 수 있다.

- `background-attachment`
- `background-clip`
- `background-image`
- `background-origin`
- `background-position`
- `background-repeat`
- `background-size`

<br />

## 예제

이번 예제에서는 3가지의 배경이 쌓이게 되는 모습을 살펴볼 것이다.
Firefox 로고, chrome 로고, 선형 그레이디언트 총 세 개의 배경을 지정해보자.

```html
<div class="multi-bg-example"></div>
```

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(./images/firefox.png), url(./images/chrome.png),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom right, left, right;
}
```

[결과](./index.html)
