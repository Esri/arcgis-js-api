/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../chunks/LercCodec"],(function(e){"use strict";let n=function(){function n(){}return n.prototype._decode=function(n){const t=e.decode(n.buffer,n.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})},n}();function t(){return new n}return t}));
