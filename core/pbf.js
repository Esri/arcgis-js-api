// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(t,e){var i=4294967296,r=function(){function t(t,e,i,r){this._tag=0,this._dataType=99,this._data=t,this._dataView=e,this._pos=i||0,this._end=r||t.byteLength}return t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){return this._decodeVarint()},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){return this._decodeSVarint()},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,r=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),r},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,r=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),r},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i},t.prototype.getMessage=function(){var e=this._getLength(),i=this._pos,r=new t(this._data,this._dataView,i,i+e);return this._skip(e),r},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,i=this._pos,r=0;if(this._end-i>=10){do{if(t=e[i++],r|=127&t,0===(128&t))break;if(t=e[i++],r|=(127&t)<<7,0===(128&t))break;if(t=e[i++],r|=(127&t)<<14,0===(128&t))break;if(t=e[i++],r|=(127&t)<<21,0===(128&t))break;if(t=e[i++],r+=268435456*(127&t),0===(128&t))break;if(t=e[i++],r+=34359738368*(127&t),0===(128&t))break;if(t=e[i++],r+=4398046511104*(127&t),0===(128&t))break;if(t=e[i++],r+=562949953421312*(127&t),0===(128&t))break;if(t=e[i++],r+=72057594037927940*(127&t),0===(128&t))break;if(t=e[i++],r+=0x8000000000000000*(127&t),0===(128&t))break;throw new Error("Varint too long!")}while(!1)}else{for(var n=1;i!==this._end&&(t=e[i],0!==(128&t));)++i,r+=(127&t)*n,n*=128;if(i===this._end)throw new Error("Varint overrun!");++i,r+=t*n}return this._pos=i,r},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,i){var r="",n="";i=Math.min(this._end,i);for(var o=e;i>o;++o){var s=t[o];128&s?n+="%"+s.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(s),n="")}return n.length&&(r+=decodeURIComponent(n)),r},t.prototype._toBytes=function(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)},t}();return r});