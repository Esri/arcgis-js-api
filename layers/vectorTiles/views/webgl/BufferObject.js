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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/has"],(function(e,t,i){return function(){function e(t,n,r,o,s){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this._context=t,this._bufferType=n,this._usage=r,this._id=e._nextId++,this._glName=this._context.gl.createBuffer(),i("esri-webgl-debug")&&t.instanceCounter.incrementCount(1),o&&this.setData(o,s)}return e.createIndex=function(t,i,n,r){return new e(t,34963,i,n,r)},e.createVertex=function(t,i,n){return new e(t,34962,i,n)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferType",{get:function(){return this._bufferType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexType",{get:function(){return this._indexType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteSize",{get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(this._context){if(this._glName)this._context.gl.deleteBuffer(this._glName),this._glName=null;i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(1),this._context=null}},e.prototype.setData=function(e,t){if(e){if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{var i=e.byteLength;e instanceof Uint16Array&&(i/=2,this._indexType=5123),e instanceof Uint32Array&&(i/=4,this._indexType=5125),this._size=i,ArrayBuffer.isView(e)&&(e=e.buffer)}var n=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this._bufferType,e,this._usage),this._context.bindVAO(n)}},e.prototype.setSubData=function(e,t,i,n){if(void 0===t&&(t=0),void 0===i&&(i=0),e){(t<0||t>=this._size)&&console.error("offset is out of range!");var r=t,o=i,s=n,f=e.byteLength;e instanceof Uint16Array&&(f/=2,r*=2,o*=2,s*=2),e instanceof Uint32Array&&(f/=4,r*=4,o*=4,s*=4),void 0===n&&(n=f-1),i>=n&&console.error("end must be bigger than start!"),t+i-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");var u=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);var a=this._context.gl,c=ArrayBuffer.isView(e)?e.buffer:e;a.bufferSubData(this._bufferType,r,c.slice(o,s)),this._context.bindVAO(u)}},e._nextId=0,e}()}));