// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./Util","./ComponentUtils"],function(e,t,n,r){function i(e,t){var n=e.reduce(function(e,n){var r=n.indices[t];return e+(null==r?0:r.length)},0),r=new Uint32Array(n),i=0,o=0;return e.forEach(function(e){var n=e.indices[t];if(null!=n){var s=n.length,f=n.byteLength;r.set(n,i),e.indices[t]=new Uint32Array(r.buffer,o,s),i+=s,o+=f}}),r}function o(e){var t={},n=s(e);if(n>a||null==c){for(;n>a;)a*=2;c=new Uint32Array(a);for(var r=0;a>r;r++)c[r]=r}var i=new Uint32Array(c.buffer,0,n);for(var o in e)t[o]=i;return t}function s(e){var t=n.getFirstObjectValue(e),r=t.data.length/t.size;return r}var f="position",u=function(){function e(t,s,u,a){void 0===s&&(s=e.DefaultIndices),void 0===u&&(u=e.DefaultOffsets),void 0===a&&(a="triangle");var c=[],p={},l={},d=Array.isArray(t);if(d?(c=t,l=s):(l=t,p=s,p===e.DefaultIndices&&(p=o(l))),d){if(c.length>1){var h=c.map(function(e){return e.componentRange[0]});h.push(c[c.length-1].componentRange[1]+1),u=new Uint32Array(h)}if(1===c.length){var g=c[0];for(var v in l){var y=g.indices;p[v]=y[v]}}else for(var v in l)p[v]=i(c,v)}else{var b=n.getFirstObjectValue(p).length,_=void 0,m=void 0;u===e.DefaultOffsets?(_=0,m=b):(_=u[0],m=u[u.length-1]);var A=m-_,O=_*Uint32Array.BYTES_PER_ELEMENT,y={};for(var v in p)y[v]=new Uint32Array(p[v].buffer,O,A);c.push({type:a,positionKey:f,indices:y,componentRange:[_,m-1]})}this._id=e.getNewId(),this._faces=c,this._vertexAttributes=l,this._indices=p,this._componentOffsets=r.createOffsets(u),this._primitiveType=a}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"faces",{get:function(){return this._faces},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentOffsets",{get:function(){return this._componentOffsets},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexCount",{get:function(){return this._indices[f].length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positionKey",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0}),e.prototype.toRenderData=function(){var e={id:this._id.toString(),faces:this._faces[0],vertexAttr:this._vertexAttributes};return e},e.prototype.estimateGpuMemoryUsage=function(){var e=0;if(this._indices.position){var t=3;e+=this._indices.position.length*t*4}if(this._indices.normal){var t=3;e+=this._indices.normal.length*t*4}if(this._indices.uv0){var t=2;e+=this._indices.uv0.length*t*4}if(this._indices.color){var t=1;e+=this._indices.color.length*t*4}return e},e.prototype.getId=function(){return this.id},e.prototype.getFaces=function(){return this.faces},e.prototype.getVertexAttr=function(){return this.vertexAttributes},e.getNewId=function(){return e._id++},e}();u._id=0,u.AxisOrder={CG:0,GIS:1},u.DefaultIndices={},u.DefaultOffsets=new Uint32Array(0);var a=1,c=null;return u});