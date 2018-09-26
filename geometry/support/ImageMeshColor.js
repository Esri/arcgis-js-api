// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Identifiable","../../core/urlUtils","../../core/accessorSupport/decorators","./MeshColor","../../views/support/screenshotUtils"],function(t,e,a,r,n,o,i,s,p){return function(t){function e(e){var a=t.call(this)||this;return a.type="image",a}a(e,t),n=e,Object.defineProperty(e.prototype,"url",{get:function(){return this._get("url")||null},set:function(t){this._set("url",t),t&&this._set("data",null)},enumerable:!0,configurable:!0}),e.prototype.writeUrl=function(t,e,a,r){e[a]=o.write(t,r)},Object.defineProperty(e.prototype,"data",{get:function(){return this._get("data")||null},set:function(t){this._set("data",t),t&&this._set("url",null)},enumerable:!0,configurable:!0}),e.prototype.writeData=function(t,e,a,r){if(t instanceof HTMLImageElement){var n={type:"image-element",src:o.write(t.src,r)};e[a]=n}else if(t instanceof HTMLCanvasElement){var i=t.getContext("2d").getImageData(0,0,t.width,t.height),n={type:"canvas-element",imageData:this.encodeImageData(i)};e[a]=n}else{var n={type:"image-data",imageData:this.encodeImageData(t)};e[a]=n}},e.prototype.readData=function(t,e){switch(t.type){case"image-element":var a=new Image;return a.src=t.src,a;case"canvas-element":var r=this.decodeImageData(t.imageData),n=document.createElement("canvas");return n.width=r.width,n.height=r.height,n.getContext("2d").putImageData(r,0,0),n;case"image-data":return this.decodeImageData(t.imageData)}},Object.defineProperty(e.prototype,"transparent",{get:function(){var t=this.data;return t instanceof HTMLCanvasElement?this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData&&this.imageDataContainsTransparent(t)},set:function(t){null!=t?this._override("transparent",t):this._clearOverride("transparent")},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new n({url:this.url,data:this.data})},e.prototype.encodeImageData=function(t){for(var e="",a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}},e.prototype.decodeImageData=function(t){for(var e=atob(t.data),a=new Uint8ClampedArray(e.length),r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return p.wrapImageData(a,t.width,t.height)},e.prototype.imageDataContainsTransparent=function(t){for(var e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1};var n;return r([i.property()],e.prototype,"type",void 0),r([i.property({type:String,json:{write:!0}})],e.prototype,"url",null),r([i.writer("url")],e.prototype,"writeUrl",null),r([i.property({json:{write:{overridePolicy:function(){return{enabled:!this.url}}}}}),i.property()],e.prototype,"data",null),r([i.writer("data")],e.prototype,"writeData",null),r([i.reader("data")],e.prototype,"readData",null),r([i.property({type:Boolean,dependsOn:["data"],json:{write:{overridePolicy:function(){return{enabled:this._isOverridden("transparent")}}}}})],e.prototype,"transparent",null),e=n=r([i.subclass("esri.geometry.support.ImageMeshColor")],e)}(i.declared(s.default,n))});