/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let e=function(){function t(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}var e=t.prototype;return e.readUint32=function(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]},e.readUint8Array=function(t){const e=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,e,t)},e.remainingBytes=function(){return this._data.byteLength-4*this._offset4},t}();t.BinaryStreamReader=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
