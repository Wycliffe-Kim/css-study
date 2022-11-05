const listener = (event) => {
  const l = document.createElement('li');
  const switchCase = {
    animationstart: (time) => `Started: elapsed time is ${time}`,
    animationend: (time) => `Ended: elapsed time is ${time}`,
    animationiteration: (time) => `New loop started at time ${time}`
  }

  l.textContent = switchCase[event.type](event.elapsedTime);

  document.getElementById('output').appendChild(l);
}

const element = document.getElementById('slidein');
element.addEventListener('animationstart', listener, false);
element.addEventListener('animationend', listener, false);
element.addEventListener('animationiteration', listener, false);
