/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e){this.origin=e,this.buffers=new Array}var t=e.prototype;return t.dispose=function(){this.buffers.forEach((e=>e.vao.dispose())),this.buffers.length=0},t.findBuffer=function(e){return this.buffers.find((t=>t.instances.has(e)))},e}();e.PerOriginData=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
