// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports"],(function(t,i){return function(){function t(t,i,e,r){this._tag=0,this._dataType=99,this._data=t,this._dataView=i,this._pos=e||0,this._end=r||t.byteLength}return t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.pos=function(){return this._pos},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var i=this._decodeVarint();if(this._tag=i>>3,this._dataType=7&i,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){var t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){var t=this.getUInt32();return t>>>1^-(1&t)|0},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,i=this._pos,e=t.getUint32(i,!0)+4294967296*t.getUint32(i+4,!0);return this._skip(8),e},t.prototype.getSFixed64=function(){var t=this._dataView,i=this._pos,e=t.getUint32(i,!0)+4294967296*t.getInt32(i+4,!0);return this._skip(8),e},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),i=this._pos,e=this._toString(this._data,i,i+t);return this._skip(t),e},t.prototype.getBytes=function(){var t=this._getLength(),i=this._pos,e=this._toBytes(this._data,i,i+t);return this._skip(t),e},t.prototype.getMessage=function(){var i=this._getLength(),e=this._pos,r=new t(this._data,this._dataView,e,e+i);return this._skip(i),r},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,i=this._data,e=this._pos,r=0;if(this._end-e>=10)do{if(r|=127&(t=i[e++]),0==(128&t))break;if(r|=(127&(t=i[e++]))<<7,0==(128&t))break;if(r|=(127&(t=i[e++]))<<14,0==(128&t))break;if(r|=(127&(t=i[e++]))<<21,0==(128&t))break;if(r+=268435456*(127&(t=i[e++])),0==(128&t))break;if(r+=34359738368*(127&(t=i[e++])),0==(128&t))break;if(r+=4398046511104*(127&(t=i[e++])),0==(128&t))break;if(r+=562949953421312*(127&(t=i[e++])),0==(128&t))break;if(r+=72057594037927940*(127&(t=i[e++])),0==(128&t))break;if(r+=0x8000000000000000*(127&(t=i[e++])),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{for(var o=1;e!==this._end&&0!=(128&(t=i[e]));)++e,r+=(127&t)*o,o*=128;if(e===this._end)throw new Error("Varint overrun!");++e,r+=t*o}return this._pos=e,r},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,i,e){var r="",o="";e=Math.min(this._end,e);for(var n=i;n<e;++n){var s=t[n];128&s?o+="%"+s.toString(16):(r+=decodeURIComponent(o)+String.fromCharCode(s),o="")}return o.length&&(r+=decodeURIComponent(o)),r},t.prototype._toBytes=function(t,i,e){return e=Math.min(this._end,e),new Uint8Array(t.buffer,i,e-i)},t}()}));