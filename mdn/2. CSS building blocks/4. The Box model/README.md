# The Box Model

CSS를 통해 레이아웃을 생성하거나 아템과 다른 아이템을 정렬하는 것을 이해하기 위해 우리는 box model을 이해해야 한다.
CSS에는 크게 두 가지 박스 유형이 있다.

- inline box
- block box
  이러한 특성은 박스가 페이지 대열측면 및 페이지의 다른 박스와 관련하여 박스의 작동 방식을 나타낸다.

<br />

<br />

## Block box vs Inline box

### block box

- `display: block`
- 사용가능한 공간을 100%로 채우면서 상위 컨테이너 너비만큼 차지한다.
- 언제나 새로운 라인에서 시작하며, 해당 라인의 모든 너비를 차지한다.
- width 와 height 속성을 부여할 수 있다.
- padding과 여백, 테두리로 인해 다른 요소들이 박스 범위 밖으로 밀려나가게 된다.
- `<p>` `<h1>`

<br />

### inline box

**`display: inline`**

- 새 줄로 줄바꿈하지 않는다.
- 요소의 내용만큼만 너비를 차지한다.
- width와 height, margin 속성이 적용되지 않는다.
- padding과 여백, 테두리는 다른 인라인 박스들이 해당 박스 외부로 밀려나가지 않는다.
- inline, inline-block으로 설정하면 요소들이 가로로 정렬되면서 요소와 요소 사이에 여백이 생기게 되는데, 이는 `margin: 0`을 해도 사라지지 않는다
  - margin값에 음수 사용하기
  - 글자크기 조정하기
  - float 사용하기
- `<span>` `<a>`

**`display: inline-block`**

- width, height, margin 속성을 적용할 수 있다.
- padding, margin, border를 사용하게 된다면 다른 요소들을 box 밖으로 밀어내게 될 것이다.

<br />
<br />

## Box model 이란 무엇인가?

모든 HTML 요소는 box 모양으로 구성되며, 이것을 박스 모델이라고 부른다.<br />
박스 모델은 HTML 요소를 다음과 같이 구분한다.

- padding: 내용과 테두리 사이의 간격
- border: 내용과 패딩 주변을 감싸는 테두리
- margin: 테두리와 이웃하는 요소 사이의 간격
- content: 박스의 실질적인 내용

![box-model](images/box-model.png)

## 박스의 크기를 계산해보자

### 표준 box model

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid red;
}
```

위와 같이 정의된 박스는

- 너비 : 350 + 25 + 25 + 5 + 5 = 410px
- 높이 : 150 + 25 + 25 + 5 + 5 = 210px

### box-sizing

박스의 크기를 어떤 것을 기준으로 계산할지 정하는 속성

- border-box: 테두리를 기준으로 크기를 정하겠다. (대체 box 모델)
- content-box: 콘텐츠 영역을 기준으로 크기를 정하겠다. (default)

border-box로 설정하면, 너비는 너비에서 padding과 테두리 너비를 뺀 너비다.
위와 동일한 코드로 너비와 높이를 구해보면 다음과 같다

- 너비 : 350px
- 높이 : 150px

border-box로 설정하는 이유는 width값을 동일하게 설정해주었다고 가정했을때, content-box는 콘텐츠 영역 + width값이 되므로 지정해준 width값과 다르게 적용된다.

<br />
<br />

## Margin

- box 주변의 여백을 말한다.
- 다른 요소들을 box 밖으로 밀어낸다.
- 음수, 양수를 가질 수 있다.
- 박스 한쪽에 음수를 설정하면 페이지의 다른 부분과 공백이 겹칠 수 있다.
- 표준 박스 모델, 대체 박스 모델 상관없이 margin은 항상 box의 크기가 계산된 후 추가된다.

## Margin-collapse

- margin 이해의 핵심
- 여백이 맞닿은 두개의 요소가 있으면, 해당 여백은 하나로 합쳐진다. (가장 큰 여백의 값으로 지정)

## border

- padding과 margin 사이에 그려진다.
- `box-sizing: border-box`를 설정하면, 테두리의 크기는 사용 가능한 height의 일부를 차지함으로써 contents box가 작아지게 된다.

## padding

- border와 contents 영역 사이에 위치한다.
- 양수 값만 가질 수 있다.
- border로부터 contents를 밀어내기위해 사용한다.
