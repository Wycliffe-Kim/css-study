# Overview

CSS는 콘텐츠의 글꼴, 색상, 크기 및 간격을 변경하거나 애니메이션 등 웹페이지의 스타일 및 레이아웃에 사용된다. 우리는 지금부터 css가 무엇인지, 어떻게 사용하는지에 대해서 알아보고자 한다.

차례

- [Prerequisites](#prerequisites)
- [HTML이란?](#about-html)
- [Elements](#elements)
- [HTML 문서의 구조](#html-structure)
- [CSS 및 Javascript 적용하기](#adjust-css-javascript)

<br/>
<br/>

### <div id="prerequisites">Prerequisites</div>

HTML에 대한 기본적인 이해가 필요하다.
본격적으로 CSS에 대해서 알아보기 전에 HTML을 간단하게 살펴보도록 하자.

- HTML이란?
- Elements
- HTML 문서의 구조
- css 및 javascript 적용

<br />
<br />

### <div id="about-html">HTML</div>

HTML은 우리가 보는 웹페이지가 어떻게 구조화되어 있는지 브라우저가 이해할 수 있게 해주는 마크업 언어이다.

elements들로 구성되어있으며, 이를 적절한 방법으로 나타내고 실행하기 위해 적재적소에 tag를 사용하여 마크업 해야한다.

<br />
<br />

### <div id="elements">Elements</div>

- tag: 요소의 시작과 끝을 표기
- elements: DOM의 일부로 `여는태그 - 내용 - 닫는태그`로 구성
  - **Block-level elements**
    - 앞뒤 요소 사이에 새로운 줄을 만들기 때문에 줄바꿈이 발생한다.
    - 페이지의 구조적인 요소를 나타낼때 사용된다.
    - 블록 레벨 요소는 인라인 요소에 중첩될 수 없다.
    - 다른 블록 레벨 요소에 중첩될 수 있다.
    - `<nav>`, `<li>`, `<p>` , `<footer>` …
  - **Inline-elements**
    - 항상 블록 레벨 요소 안에 포함되어 있다.
    - 문장, 단어 같은 작은 부분에 대해서 적용된다.
    - 줄바꿈이 발생하지 않는다.
    - `<a>` ,`<span>` ,`<em>, <strong>` …
  - **Empty elements**
    - 모든 요소가 `여는태그 - 내용 - 닫는태그` 패턴을 따르는 것은 아니다. 단일태그를 사용하는 요소도 있다.
    - `<img>`, `<input>` …

<br />
<br />

### <div id="html-structure">HTML 문서의 구조</div>

아래의 코드는 HTML이 기본적으로 어떤 구조를 갖는지를 보여준다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>DIVE INTO HTML</title>
  </head>
  <body>
    <p>This is pharagraph</p>
  </body>
</html>
```

- `<!DOCTYPE html>` : 문서 형식을 나타낸다.
- `html` : 이 요소는 전체 페이지의 콘텐츠를 포함하며 기본 요소이다.
- `head`: 홈페이지 이용자에게는 보이지 않지만, 검색 결과에 노출될 키워드, 파비콘, 홈페이지 설명, CSS 등 HTML페이지의 메타데이터를 담고 있다.
- `<meta charset="utf-8">` : HTML문서의 문자 인코딩 설정을 나타낸다.
- `title` : 페이지 제목 설정 요소로 페이지가 로드되는 브라우저 탭에 표시되는 제목으로 사용된다.
- `body`: 페이지에 표시되는 모든 콘텐츠가 포함된다.

<br />
<br />

### <div id="adjust-css-javascript">CSS 및 Javascript 적용하기</div>

- css
  - `<link>`를 통해 적용한다
  - link는 항상 `head`부분에 위치한다.
  - `rel=”styleshee”` 속성을 부여해 문서의 스타일 시트임을 나타낸다.
- javascript
  - `<script>` 태그를 통해 적용한다.
  - `script` 태그는 `head`에 위치하면 안된다.
    - 브라우저는 `script` 태그를 만나면 `html` 파싱을 멈추고 `script`를 실행하게 되는데, 이때 요소들이 렌더링되지 않은상태에서 script를 실행하게 되면 script에서 접근하려하는 요소가 존재하지 않게 되며 에러가 발생할 수 있다.
