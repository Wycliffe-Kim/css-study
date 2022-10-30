# 미디어 쿼리 초보자 가이드

미디어쿼리는 "뷰포트가 480px 보다 넓다." 라고 우리가 지정한 규칙에 브라우저 및 장치 환경이 일치하는 경우에만 CSS를 적용할 수 있는 방법이다. <br />
미디어 쿼리는 반응형 웹 디자인의 핵심으로 뷰포트의 크기에 따라 서로 다른 레이아웃을 생성할 수 있을 뿐만 아니라, 사용자가 마우스가 아닌 터치스크린을 사용하는지와 같이 실행 중인 사이트 환경에 대한 여러 내용들을 탐지하는 데도 사용할 수 있다.

<br />

## 미디어 쿼리 기본

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

### 미디어 쿼리 구문의 구성 요소

- `media-type` : 코드가 어떤 미디어를 위한 것인지 브라우저에 알려주는 요소

  - all
  - print
  - screen
  - speech

- `(media-feature-rule)` : CSS 규칙이 적용되기 위해 전달되어야 하는 규칙 또는 조건
- 해당 조건에과 미디어 유형이 일치하는 경우 적용되는 CSS 규칙

```css
@media print {
  body {
    font-size: 12px;
  }
}
```

- 위의 미디어 쿼리는 페이지가 인쇄될 경우에만 본문을 12px로 설정한다.
- 페이지가 브라우저에 로드될 때에는 적용되지 않는다.

<br />

### 미디어 기능 규칙

타입을 지정한 후, 규칙이 적용될 미디어 기능 타켓을 정할 수 있다.

- 너비와 높이
  - 반응형 디자인을 만들기 위해 가장 많이 사용되는 기능
  - `min-width`와 `max-width`, `width` 등의 미디어 기능을 활용하여 뷰포트가 특정 너비 이상 또는 이하인 경우 CSS를 적용할 수 있다.
  - 다른 화면 크기에 반응하는 레이아웃을 생성하는 데 사용된다.
  - `min-` , `max-` 접두사를 붙이게 되면 최소값인지 최대값인지 표시할 수 있다.

예) 뷰포트가 정확히 600px인 경우 본문 색상을 빨간색으로 변경하는 미디어쿼리다.

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

예) 뷰포트가 400px 보다 좁은 경우에는 색상이 blue 가 되는 미디어쿼리다.

```css
@media screen and (max-width: 400px) {
  body {
    color: blue;
  }
}
```

- 실제로 `min`, `max` 를 사용하는 것이 반응형 디자인인 경우에 훨씬 유용하다.
- width 또는 height 값을 사용하는 경우는 드물다.

### Orientation

- 세로 모드인지 가로 모드인지를 검사할 수 있도록 해주는 미디어쿼리.

예) 장치가 가로 방향에 있는 경우 본문 텍스트 색상을 변경

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

### 포인팅 장치의 사용

- hover
  - 수준 4 규격의 일부로 hover 미디어 기능이 도입되었다.
  - 사용자가 요소 위에 커서를 올릴 수 있는 조건인지를 시험할 수 있다.
  - 어떤 종류의 포인팅 장치를 사용하는가 -> 터치 스크린 및 키보드 네비게이션은 요소 위에 식별자를 올릴 수 없다.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

    - 사용자가 포인팅 장치를 사용할 수 없다고 파악되면 기본적으로 대화형 기능을 표시할 수 있다.
    - 포인팅 장치를 사용할 수 있는 사용자의 경우 링크에 마우스를 올리는 기능을 이용하도록 선택할 수 있다.

- pointer

  - 값

    - none : 포틴팅 장치 없음
    - fine : 마우스, 트랙패드
    - coarse : 터치스크린

  - 사용자가 화면상에서 상호 작용하는 유형에 따라 반응하는 더 나은 인터페이스를 설계할 수 있다.

## 더 복잡한 미디어쿼리

사용 가능한 모든 미디어 쿼리를 가지고 서로 결합하거나, 쿼리 목록을 만들어 사용할 수 있다.

### "논리곱" 미디어 쿼리

- and : 미디어 기능을 결합

예) `min-wdith`와 `orientation` 의 결합

- 뷰포트의 너비가 최소 400px 이상이고 장치가 가로 모드인 경우 본문 텍스트 파란색으로 변경

```css
@media screen and (min-width: 400px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

### "논리합" 미디어 쿼리

- 쿼리 목록을 나열해, 하나라도 일치하면 css 적용

예) 뷰포트가 최소 400px 너비 또는 장치가 가로 모드인경우 본문 텍스트 파란색으로 변경

```css
@media screen and (min-width: 400px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

### "부정 논리" 미디어 쿼리

- `not` 연산자를 사용하여 전체 미디어 쿼리를 부정

예) 보기 방향이 세로인 경우에만 본문 텍스트 파란색으로 변경

```css
@media not all and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

## 분기점 (breakpoint)

현재 기기들은 매우 다양한 크기를 가지고 있다. 이 모든 기기의 특정 사이즈에 맞춰 디자인을 하는 것보다, 콘텐츠가 깨지기 시작하는 포인트에 해당하는 기기의 디자인을 변경하는 것이 더 효율적이다.

이런 미디어 쿼리가 도입되는 지점을 breakpoint 라고 한다. <br />
개발자도구의 반응형 모드를 사용하면, 분기점이 어느 부분이 될지 알아내는데 매우 유용하다.

## 미디어 쿼리가 필요한가?

- 레이아웃은 모두 굳이 미디어 쿼리를 필요로 하지 않고도 가변적이며 심지어 반응형 구성 요소를 만들 수 있는 방법을 제공한다.
- 미디어 쿼리를 추가하지 않고도 레이아웃 메서드를 사용해 반응형으로 동작하게 할 수 있을지 고려할 필요가 있다.

```html
<ul class="grid">
  <li>
    <h2>카드 1</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 2</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 3</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 4</h2>
    <p>...</p>
  </li>
  <li>
    <h2>카드 5</h2>
    <p>...</p>
  </li>
</ul>
```

```css
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}
```

위의 코드를 실행시켜보면, 화면을 넓히거나 좁히거나 하여 열 트랙 수가 변경되는 것을 확인할 수 있다.
-> 해당 구성 요소에 맞춰 이용할 수 있는 너비만큼 자리를 차지하는 것이다.
-> 이렇게 작성하게 된다면 불필요한 미디어쿼리 작성을 피할 수 있다.
-> 특정 viewport 에서만 보여진다거나, display, position 등 특정 속성이나 값이 변하게 되는 경우엔 미디어 쿼리가 필요하다.

## 능동학습

```html
<body>
    <div class="wrapper">
      <header>
        <nav>
          <ul>
            <li><a href="">사이트 소개</a></li>
            <li><a href="">연락처</a></li>
            <li><a href="">우리팀 안내</a></li>
            <li><a href="">블로그</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <div class="content">
            <h1>채식주의자!</h1>
            <p>
              ...
            </p>
          </aside>
        </article>

        <aside class="sidebar">
          <h2>채식에 관한 외부 링크</h2>
          <ul>
            <li>
              ...
            </li>
          </ul>
        </aside>
      </main>

      <footer><p>&copy;2019</p></footer>
    </div>
  </body>

```

```css
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font: 1em/1.3 Arial, Helvetica, sans-serif;
}

a:link,
a:visited {
  color: #333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgba(207, 232, 220, 0.2);
  border: 2px solid rgb(79, 185, 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgba(207, 232, 220, 0.7);
}

.related {
  background-color: rgba(79, 185, 227, 0.3);
  border: 1px solid rgb(79, 185, 227);
  padding: 10px;
}

.sidebar {
  background-color: rgba(207, 232, 220, 0.5);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

아래의 반응형 코드를 추가해보자

```css
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}

@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```
