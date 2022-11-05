# 배경 이미지 크기 조정하기

CSS 배경 이미지는 default 값으로 원본 이미지가 크기 변화 없이 바둑판식으로 배치된다. <br />
`background-size` 속성에 가로와 세로 크기를 지정해 크기를 바꿀 수 있으며, 확대 축소도 가능하다.

<br />

## 큰 이미지 바둑판식 배열

조건)

- 512x512의 커다란 Firefox 이미지를 가지고 있다.
- 300x300 픽셀 요소에 저 이미지 4개를 바둑판식으로 보여야 한다.

```html
<div class="tiled-background"></div>
```

```css
.tiled-background {
  background-image: url(./images/firefox.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

[결과](./tiled-background/index.html)

<br />

### 이미지 늘리기

가로, 세로 크기를 각각 지정할 수 있다.

```css
background-size: 300px 150px;
```

[결과](./stretched-image/index.html)

<br />

### 작은 이미지 키우기

- 32x32 픽셀 파비콘을 300x300 픽셀로 늘린 결과

```css
.favicon {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

[결과](./favicon/index.html)

<br />

## contain 과 cover

가로, 세로 길이를 지정하는 대신, `background-size` 에 `contain`과 `cover`로도 사이즈를 지정할 수 있다.

### contain

- 이미지의 가로, 세로 모두 요소보다 작다는 조건하에 크기를 조정한다.
- 이미지의 가로, 세로 비율은 유지된다.
- 배경 이미지의 크기는 요소의 크기보다 항상 같거나 작다.

```html
<div class="bg-size-contain">
  <p>Try resizing this element!</p>
</div>
```

```css
.bg-size-contain {
  background-image: url(./firefox.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

[결과](./contain/index.html)

<br />

### cover

- 배경이미지의 가로, 세로 길이 모두 요소보다 크다는 조건하에 배경 이미지 조정
- 가로, 세로 비율은 유지
- 배경 이미지의 크기는 요소의 크기보다 항상 크거나 같다.

```html
<div class="bg-size-cover">
  <p>Try resizing this element!</p>
</div>
```

```css
.bg-size-cover {
  background-image: url(./firefox.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

[결과](./cover/index.html)
