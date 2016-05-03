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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports"],function(){var e=function(){function e(t,r,n,i){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._context=t,this._bufferType=r,this._usage=n,this._id=e._nextId++,this._glName=this._context.gl.createBuffer(),i&&this.setData(i)}return e.createIndex=function(t,r,n){return new e(t,34963,r,n)},e.createVertex=function(t,r,n){return new e(t,34962,r,n)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferType",{get:function(){return this._bufferType},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(this._glName){var e=this._context.gl;e.isBuffer(this._glName)&&(e.deleteBuffer(this._glName),this._glName=null)}},e.prototype.setData=function(e){if(e){if(this._context.bindBuffer(this),"number"==typeof e)0>e&&console.error("Buffer size cannot be negative!"),this._size=e;else{var t=e.byteLength;e instanceof Uint16Array&&(t/=2),e instanceof Uint32Array&&(t/=4),this._size=t}var r=this._context.gl;r.bufferData(this._bufferType,e,this._usage)}},e.prototype.setSubData=function(e,t,r,n){if(void 0===t&&(t=0),void 0===r&&(r=0),e){(0>t||t>=this._size)&&console.error("offset is out of range!");var i=t,o=r,f=n,s=e.byteLength;e instanceof Uint16Array&&(s/=2,i*=2,o*=2,f*=2),e instanceof Uint32Array&&(s/=4,i*=4,o*=4,f*=2),void 0===n&&(n=s-1),r>=n&&console.error("end must be bigger than start!"),t+r-n>this._size&&console.error("An attempt to write beyond the end of the buffer!"),this._context.bindBuffer(this);var u=this._context.gl;u.bufferSubData(this._bufferType,i,e.buffer.slice(o,f))}},e._nextId=0,e}();return e});