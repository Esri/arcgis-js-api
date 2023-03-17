/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=null,n=!0;function a(t,e,a){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e)}catch(r){n=!1}return i(t,e,a)}function r(t,e,a,r){if(!e||!a)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e,a)}catch(c){n=!1}const o=i(e,a,r);return o.data.set(t,0),o}function o(){return e||(e=document.createElement("canvas"),e.width=1,e.height=1),e}function i(t,e,n){return n||(n=o()),n.getContext("2d").createImageData(t,e)}t.createEmptyImageData=a,t.wrapImageData=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
