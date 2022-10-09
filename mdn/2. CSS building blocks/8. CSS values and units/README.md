# CSS values and units

CSS 에 사용된 모든 속성에는 해당 속성에 허용되는 값 이 있으며, 가장 일반적인 값 과 사용 단위를 살펴보자.

- [숫자, 길이, 백분율](#number-length-percentage")
- [색상](#color)
- [이미지](#image)
- [위치](#position)
- [식별자](#identifier)
- [함수](#functions)

<br/>
<br/>

### <div id="number-length-percentage">숫자, 길이, 백분율</div>

1. 숫자

CSS 에서 사용할 수 있는 다양한 숫자 데이터 형식이 있습니다. 다음은 모두 숫자로 분류됩니다.

| Type       | Desc                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------- |
| integer    | 정수                                                                                                                |
| number     | 10진수                                                                                                              |
| dimension  | `45deg`, `5s`, `10px` 과 같은 단위가 붙어있는 number                                                                |
| percentage | 다른 값의 일부로 백분율 값은 항상 다른 수량을 기준으로 한다. <br /> 예를 들어 요소의 길이는 부모 요소의 길이를 기준 |

2. 길이

- 절대 길이
  | Absolute length units | name |
  | --------------------- | ------------------- |
  | cm | Centimeters |
  | mm | Millimeters |
  | Q | Quarter-millimeters |
  | in | Inches |
  | pc | Picas |
  | pt | Points |
  | px | Pixels |

- 상대길이
  | Relative length units | Relative to |
  | --------------------- | ------------------- |
  | em | 요소의 글꼴 크기 |
  | ex | 요소 글꼴의 x-height |
  | ch | 요소 글꼴의 Ø 의 너비|
  | rem | 루트 요소의 글꼴 크기 |
  | 1h | 요소의 라인 높이 |
  | vw | viewport 너비의 1%. |
  | vh | viewport 높이의 1%. |
  | vmin | viewport 의 작은 치수의 1%. |
  | vmax | viewport 의 큰 치수의 1%.|
  | svw, svh | small viewport의 너비, 높이의 1%|
  | lvw, lvh | large viewport의 너비, 높이의 1%|
  | dvw, dvh | dynamic viewport 너비, 높이의 1% |

<br />

### <div id="color">색상</div>

- 최신 컴퓨터에서 사용할 수 있는 표준 색상 시스템은 24bit다.
- 채널당 256개의 서로 다른 값 을 갖는 서로 다른 빨강, 녹색 및 파랑 채널의 조합을 통해 약 1670만개의 고유한 색상을 표시할 수 있다.

1. 16진수 RGB 값

- 기호 (#) 와 6개의 16진수로 구성
- 각 16진수는 0 과 f (15를 나타냄) 사이의 16개 값 중 하나를 사용할 수 있으므로 — `0123456789abcdef` 이다.
- 예) `#f1f1f1`

2. RGB 및 RGBA 값

| Function | Desc                                                       | Example                                     |
| -------- | ---------------------------------------------------------- | ------------------------------------------- |
| `rgb()`  | - `rgb(빨, 녹, 파)` <br /> - 0 과 255 사이의 10진수로 표현 | `background-color: rgb(2, 121, 139);`       |
| `rgba()` | - `rgb(빨, 녹, 파 투명도)`                                 | `background-color: rgba(18, 138, 125, .9);` |

3. HSL 및 HSLA 값

| Function | Desc                             | Example                                       |
| -------- | -------------------------------- | --------------------------------------------- |
| `hsl()`  | `hsl(색조, 채도, 명도)`          | `background-color: hsla(188, 97%, 28%);`      |
| `hsla()` | `hsla(색조, 채도, 명도, 투명도)` | `background-color: hsla(188, 97%, 28%, 0.3);` |

```
    - 색조 (Hue): 색상의 기본 음영. (0 ~ 360)
    - 채도 (Saturation): 색상이 얼마나 포함되어 있는가 여부 (0–100%)
    - 명도 (Lightness): 색상이 얼마나 밝은가 여부 (0–100%) |
```

<br />

### <div id="image">이미지</div>

- 이미지가 유효한 값인 경우 사용
- url() 함수 또는 gradient 를 통해 가리키는 실제 이미지 파일

```css
.image {
  background-image: url("");
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgba(119, 0, 255, 1) 39%,
    rgba(0, 212, 255, 1) 100%
  );
}
```

<br />

### <div id="position">위치</div>

- `top`, `left`, `bottom`, `right` 및 `center` 와 같은 키워드를 사용하여 항목을 2D 박스의 특정 범위에 맞춰 길이와 함께 박스의 위쪽, 왼쪽, 아래, 오른쪽 가장자리에서 offset 을 나타낸다.
- `background-position`을 통해 이미지의 위치도 지정해줄 수 있다.

- `background-position` 값은 두 가지 값으로 구성된다.
  - 첫 번째는 위치를 가로로 설정하고, 두 번째는 세로로 설정
  - 한 축의 값만 지정하면 다른 축은 center로 설정된다.
  - `background-position : left 40px`

<br />

### <div id="identifier">식별자</div>

- `red`, `black` 과 같은 <color> 키워드를 사용된 경우 이는 식별자다.즉, css에서 인용되지 않으며 문자열로 취급되지 않는다.
- `Pseudo-classes` 와 `pseudo-elements` 에서는 콘텐츠 문자열을 사용한다.

```css
.box {
  background-color: red;
}

.box::after {
  content: "This is a string. I know because it is quoted in the CSS.";
}
```

<br />

### <div id="functions">함수</div>

| Function | Desc                                                                                |
| -------- | ----------------------------------------------------------------------------------- |
| `rgb()`  | 색상 섹션에서 작동하는 함수                                                         |
| `hsl()`  | 색상 섹션에서 작동하는 함수                                                         |
| `url()`  | 이미지 반환 함수                                                                    |
| `calc()` | CSS 를 작성할 때 정의할 수 없는 값을 계산하고 런타임에 브라우저가 작동해야하는 경우 |
