# Organizing your CSS

## CSS를 깔끔하게 유지하는 Tip

### 일관성 유지

프로젝트 규칙을 설정하거나 단독으로 작업하는 경우, 가장 중요한 것은 일관성을 유지하는 것이다.

- class에 동일한 이름 지정 규칙 사용
- 색상을 설명하는 한 가지 방법을 선택
- 일관된 형식을 유지
  - 탭이나 공백을 사용하여 코드를 들여쓰기 하시겠습니까?
  - 공백은 몇 칸입니까?

### 읽기 쉬운 CSS 포맷

여기 CSS 포맷과 관련하여 두 가지 방법을 보게 될 것이다.

- 한 라인에 정의

```
.box {
background-color: #567895;
}
h2 {
background-color: black; color: white;
}
```

- 속성마다 새로운 라인에 정의

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS는 당신이 어떤 방식을 사용하던지 신경쓰지는 않겠지만, 우리는 일반적으로 각각의 프로퍼티와 value 한 쌍이 한 라인에 있는 것이 더 읽기 쉬운 것 같다.

### CSS 주석

- CSS 에 주석을 작성하는 것은 추후 CSS 작업을 할 때 도움이 될 것이다.
- 스타일 시트의 논리 섹션 사이에 주석 블록을 추가하여 스캔할때 다른 섹션에 있는 부분을 빠르게 찾게 해주거나, 해당 부분으로 바로 이동할 수 있게 검색 할 수 있는 정보를 작성하는 것이 좋다.
- 코드에 나타나지 않는 문자열을 사용하는 경우, 아래에서 || 를 사용했듯이 검색하여 섹션 간 이동할 수 있다.

```css
/* || General styles */

/* ... */

/* || Typography */

/* ... */

/* || Header and Main Navigation */
```

- 모든 CSS 에 주석을 달 필요는 없다. 대부분 따로 설명이 필요없기 때문이다.
- 특정한 이유로 내린 결정이 있다면, 해당 부분에만 주석을 다는 것이 좋다.
- 구 브라우저에서 호환되지않는 경우를 대비하여 CSS를 아래처럼 특정 방식으로 작성했을 수도 있다. 이런 경우에는 주석을 남기는 것이 좋다.

```css
.box {
  background-color: red; /* 그라데이션을 지원하지 않는 이전 브라우저의 대비책 */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

### 논리 섹션을 만들어라

- 스타일시트에서 모든 공통 스타일링 먼저 작성하는 것은 좋은 생각이다.
- 우리가 특별히 요소에 무언가를 하지 않더라도, 일반적으로 적용되는 모든 스타일 속성들에 규칙을 세우는 것이다.
- 다음 태그들에 관하여 기본적인 스타일링을 세팅해두자.

  - `body`
  - `p`
  - `h1`,`h2`,`h3`,`h4`,`h5`
  - `ul`, `ol`
  - `table` properties
  - Links

- utility classes 를 정의한다.

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

- 사이트 전반적으로 사용되는 모든 스타일 관련된 코드를 추가할 수 있다. 기본적인 페이지 레이아웃부터 header, navigation 등등
- 마지막으로 context, page 또는 컴포넌트별로 구체적인 css를 작성할 수 있다.

위의 순서대로 작성한다면, 적어도 우리가 수정하고 싶은 부분을 위해 스타일시트의 어느부분을 찾아보면 될지 알 수 있을 것이다.

<br />

### 지나치게 특정한 선택자는 피해라

지나치게 특정한 선택자를 지정해 스타일을 적용하면, 서로 다른 요소에 같은 규칙을 적용해야 하는 경우 불필요한 중복이 발생한다. <br />

예를들어, `<article class='main'>` 에 있는 `<p class='box'>` 에 스타일을 다음과 같이 적용했다.

```css
article.main p.box {
  brder: 1px solid #ccc;
}
```

그런데 이번엔 `<article class='main'>` 외부에, 또는 다른 `<p>` 에 동일한 css를 적용시키고 싶다면, 우리는 다른 선택자를 추가하여 동일한 스타일을 작성해주거나, 새로운 규칙을 생성해야 한다. <br />

```css
article.main p.box {
  brder: 1px solid #ccc;
}

p.box {
  border: 1px solid #ccc;
}
```

하지만 아래처럼 작성한다면, `box` class를 가진 모든 요소들에 공통적으로 스타일이 적용될 것이다.

```css
.box {
  border: 1px solid #ccc;
}
```

### 스타일시트가 커지면, 작게 쪼개라

한 사이트에셔 각각의 부분을 위해 서로다른 스타일을 적용해야하는 경우가 있다. 모든 global 규칙들, 특정한 규칙을 필요로하는 섹션들을 위한 작은 스타일시트들을 포함한 하나의 스타일시트를 원할 것이다.

다수의 스타일시트를 하나의 페이지에 링크로 연결할 수 있고, 연결된 스타일시트들은, 연결된 순서대로 규칙이 cascade 형식으로 적용된다.

## CSS 방법론

자신만의 CSS 작성 방식을 갖는 것보다, 이미 만들어져 있고 다양한 프로젝트를 통해서 검증된 접근법들을 채택하는 것이 더 이득일지도 모른다.
우리가 모든 선택자를 작성하고 최적화 하는 것보다 더 장황해 보일지도 모르지만, 이러한 시스템들은 이미 널리 사용되고 있기 때문에 다른 개발자들도 거의 비슷하게 이해하고, 접근함으로서 협업함에 있어 CSS를 같은 방식으로 쓰고 사용할 수 있게 된다.

### OOCSS

OOCSS는 Object Oriented CSS의 약자로 객체 지향에 따라서 고안된 설계 방식이다.

이 방법론의 기본 개념은 CSS를 사이트 어디에서든지 필요한 곳에서 사용할 수 있도록, 재사용 가능한 객체로 분리시키는 것이다.
이 패턴은 고정된 사이즈의 이미지, 비디오 또는 다른 요소, 유연한 컨텐트와 사용된다.
만약에 OOCSS를 사용하지 않는다면, 이미 사용되고 있는 패턴을 다른 곳에도 생성해서 사용할 수도 있다.

예를 들어, 2개의 class를 생성하여, 하나는 컴포넌트에 대해서 많은 규칙들을 포함하고 있는 `comment`, 또 다른 하나는 `comment`와 거의 유사한 규칠을 가지고 있는 `list-item` 이라고 하자. 이 둘의 차이점은 다음과 같다.

- list-item은 border-bottom 속성을 가지고 있다.
- comment의 image는 border를 가지고있다.
- list-tiem의 image는 border가 없다

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: 0.8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: 0.8rem;
}
```

OOCSS애서는 `media` 라는 패턴 하나를 생성하여 공통 CSS로 작성할 것이다.

```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: 0.8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

```html
<!-- commnet -->
<div class="media comment">
  <img />
  <div class="content"></div>
</div>

<!-- list-item -->
<ul>
  <li class="media list-item">
    <img />
    <div class="content"></div>
  </li>
</ul>
```

## BEM

BEM은 Block Element Modifier 를 뜻한다.

- Block : 독립적인 개체로 button, menu, log
- Element : list item, title 같이 Block 안에 묶여있는 요소 (내부 요소)
- Modifier: block 또는 element 가 스타일이나 행위를 바꾸게 하는 플래그 (기능 / 수정)

BEM은 class 명에 - 와 \_ 를 사용하여 확장해나가는 방식이다.

[BEM Naming Conventions](https://getbem.com/naming/)

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input class="form__submit form__submit--disabled" type="submit" />
</form>
```

## 그 외 systems

- [Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/),
- ITCSS
- [Atomic CSS (ACSS)](https://acss.io/)

## Build systems for CSS

좀더 프로그래밍 적으로 접근하여 CSS를 작성할 수 있게 해주는 tool들이 있다. 전처리기, 후처리기와 같은 수많은 tool들이 존재한다.
전처리기는 raw files를 스타일시트로 바꾸어주는 반면 후처리기는 완료된 스타일시트를 받아서 로딩속도를 빠르게 하기 위한 최적화를 해준다.

이러한 tool을 사용하기 위해서는 스크립트를 실행시킬 수 있는 개발환경이 요구된다.

가장 인기있는 전처리기는 [Sass](https://sass-lang.com/) 가 있다. 이건 sass 튜토리얼이 아니기 때문에, sass에서 지원하는 기능 두가지를 간단하게 설명하고 넘어가겠다.

### 변수 정의

CSS는 이제 [속성을 custom 하여](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)을 사용할 수 있다. <br />
Sass를 사용하는 이유 중 하나가 프로젝트에서 사용하는 모든 색상과 폰트를 변수로 정의하여 사용할 수 있기 때문이다. 즉, 만약에 잘못된 색상을 사용했다면, 한군데만 수정하면 된다는 것이다.

```css
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

CSS로 컴파일이 되고나면, 위의 코드는 최종적으로 아래와같은 css 스타일시트가 된다.

```css
.alert {
  border: 1px solid #c6538c;
}
```

### 컴포넌트 스타일시트 컴파일링

위에서 언급했듯이, CSS는 작은 스타일시트로 쪼개서 구성할 수 있다.
Sass를 사용하게 된다면, 굉장히 많은 작은 스타일시트들로 구성할 수 있다. 각각의 컴포넌트에서도 스타일시트를 쪼개서 가질 수도 있다.

폴더안에서 여러 스타일 파일을 갖게 된다면

- `foundation/_code.scss,`
- `foundation/_lists.scss`
- `foundation/_footer.scss`
- `foundation/_links.scss`

`@use`를 사용하여 다른 스타일시트에 로드할 수 있다.

```css
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

```css
// style.scss
@use "foundation";
```

### 최적화를 위한 후처리기

스타일 시트에 수 많은 주석이나 공백으로 인해 사이즈가 커지는 것이 우려가 된다면, 후처리기를 사용하여 최적화를 할 수 있다.
참고) [cssnano](https://cssnano.co/)
