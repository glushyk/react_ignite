'use strict';


let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

var result = document.querySelector('.result');

result.innerHTML = 'title:' + title + ' width:' + width + ' heigth:' + height;
