# Images, media, and form elements

이미지, 미디어, 폼의 경우는 일반적인 박스들과는 다르게 동작한다. 그렇기에 이러한 요소들이 CSS에서 어떻게 다루어지는지 확인해봐야 한다.

## 대체(replaced) 요소
이미지와 비디오는 대체 요소로 설명된다. 즉 CSS는 이러한 요소의 내부 레이아웃에 영향을 줄 수 없다. 또한 이미지 및 비디오는 종횡비(aspect ratio)를 갖고 있고, 기본적으로 파일의 고유 크기를 사용하여 표시된다.
> **전형적인 대체 요소**
> - `iframe`
> - `video`
> - `embed`
> - `img`

> **특정한 경우만 대체 요소로 취급되는 요소**
> - `option`
> - `audio`
> - `canvas`
> - `object`

## 대체 요소 크기 조정
CSS는 기본적으로 박스 모델을 사용한다. 이미지 파일의 고유 크기보다 작거나 큰 박스 안에 이미지를 배치하면, 박스보다 작게 나타나거나 overflow 된다.  
이런 경우에는 앞에서 보았던 것처럼 `max-width: 100%`로 만들어 해결하는 것이 가장 깔끔하다. 물론 이미지가 박스보다 작아질 수 있는 우려가 있기 때문에 신중하게 선택해야 하는 것은 사실이다. 때에 따라서 `width: 100%`, `height: 100%`를 선택하여 조정할 수도 있다.

또한 `object-fit` 속성으로 대체 요소 크기를 조정할 수도 있다. 이는 [`background-size`](../5.%20Backgrounds%20and%20borders/) 속성의 특징과 동일하다. 종횡비를 유지하지 않은 채로 박스를 다 채우는 `fill` 속성 외에 `cover`와 `contain`은 동일한 속성이다.

## 양식(`form`) 요소

양식에 대해서는 스터디 플랜을 하나 짜서 따로 공부해야 할 정도로 양이 방대하다. 양식 내에 들어가는 요소들은 스타일링 가능하지만, 그 요소들에 공통으로 적용되었을 때 유용한 스타일 몇 개를 소개하고, 나머지는 따로 스터디 플랜을 빼서 공부할 것을 권장한다.

``` css
button,
input,
select,
textarea {
  /* 양식 요소가 기본적으로 글꼴 스타일을 상속하지 않기 때문에 해당 규칙을 추가한다. */
  font-family: inherit;
  font-size: 100%;
  /* 아래 규칙을 적용하여 양식 내에 적용되는 요소들의 박스 스타일을 일관적으로 적용할 수 있도록 한다. */
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  /* 여러 줄을 입력할 수 있는 textarea의 경우 overflow를 auto로 설정한다. */
  overflow: auto;
}
```

양식 요소에 대한 스터디 플랜 링크들(영문만 제공)은 다음과 같다.
- [웹 양식 스타일링](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)
- [고급 양식 스타일링](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)