/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}var e=t.prototype;return e.readUint32=function(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]},e.readUint8Array=function(t){const e=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,e,t)},e.remainingBytes=function(){return this.data.byteLength-4*this.offset4},t}();t.BinaryStreamReader=e,Object.defineProperty(t,"__esModule",{value:!0})}));
