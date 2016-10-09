var iScale = 1;

iScale = iScale / window.devicePixelRatio;

document.write('<meta name="viewport" content="width=device-widthh,initial-scale='+iScale+',minimum-scale='+iScale+',maximumscale='+iScale+',user-scalable=no"/>')

var iWidth = document.documentElement.clientWidth;

document.getElementsByTagName('html')[0].style.fontSize = iWidth / 10 + 'px';