/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../core/promiseUtils","../../chunks/LercCodec"],(function(e,t){"use strict";let n=function(){function n(){}return n.prototype._decode=function(n){const r=t.decode(n.buffer,n.options);return e.resolve({result:r,transferList:[r.pixelData.buffer]})},n}();return function(){return new n}}));
