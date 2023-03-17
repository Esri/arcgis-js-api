/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){const t=e.getFrame(0);if(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)return t;const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");return t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0),n}e.getFirstFrame=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
