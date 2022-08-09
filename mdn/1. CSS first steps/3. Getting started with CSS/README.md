# CSS로 시작하기

1. `index.html` 을 하나 만든다.
2. `.css` 파일을 하나 만든다. ex) `styles.css`
3. `html` `head` 영역에 link로 css 파일을 가져온다.

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

4. html 파일에 마크업 작업을 하여 페이지 구조를 작성한다. 필요하다면 class명을 지정해 줄수도 있다.

```html
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8" />
    <title>CSS 시작하기</title>
  </head>

  <body>
    <h1>이것은 페이지의 제목입니다.</h1>
    <p>이것은 단락입니다.</p>
    <p></p>
    <p>아래는 리스트를 보여줄 것입니다.</p>
    <ul>
      <li>리스트 아이템 1</li>
      <li>리스트 아이템 2</li>
      <li>리스트 아이템 3</li>
    </ul>

    <p>CSS 재미있습니까?</p>

    <!-- class명 지정해주기 -->
    <button class="yes-btn">네</button>
    <button class="no-btn">아니요</button>
  </body>
</html>
```

5. css 파일에 원하는 스타일을 적용하기 위해 규칙을 추가한다.
