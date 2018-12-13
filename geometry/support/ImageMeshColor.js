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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/compilerUtils","../../core/Identifiable","../../core/urlUtils","../../core/accessorSupport/decorators","./MeshColor","../../views/support/screenshotUtils"],function(e,t,a,r,n,o,i,s,p,l){return function(e){function t(t){var a=e.call(this)||this;return a.type="image",a}a(t,e),o=t,Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")||null},set:function(e){this._set("url",e),e&&this._set("data",null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._get("data")||null},set:function(e){this._set("data",e),e&&this._set("url",null)},enumerable:!0,configurable:!0}),t.prototype.writeData=function(e,t,a,r){if(e instanceof HTMLImageElement){var n={type:"image-element",src:i.toJSON(e.src,r)};t[a]=n}else if(e instanceof HTMLCanvasElement){var o=e.getContext("2d").getImageData(0,0,e.width,e.height),n={type:"canvas-element",imageData:this.encodeImageData(o)};t[a]=n}else{var n={type:"image-data",imageData:this.encodeImageData(e)};t[a]=n}},t.prototype.readData=function(e,t){switch(e.type){case"image-element":var a=new Image;return a.src=e.src,a;case"canvas-element":var r=this.decodeImageData(e.imageData),o=document.createElement("canvas");return o.width=r.width,o.height=r.height,o.getContext("2d").putImageData(r,0,0),o;case"image-data":return this.decodeImageData(e.imageData);default:n.neverReached(e)}},Object.defineProperty(t.prototype,"transparent",{get:function(){var e=this.data;return e instanceof HTMLCanvasElement?this.imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData&&this.imageDataContainsTransparent(e)},set:function(e){null!=e?this._override("transparent",e):this._clearOverride("transparent")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new o({url:this.url,data:this.data})},t.prototype.encodeImageData=function(e){for(var t="",a=0;a<e.data.length;a++)t+=String.fromCharCode(e.data[a]);return{data:btoa(t),width:e.width,height:e.height}},t.prototype.decodeImageData=function(e){for(var t=atob(e.data),a=new Uint8ClampedArray(t.length),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);return l.wrapImageData(a,e.width,e.height)},t.prototype.imageDataContainsTransparent=function(e){for(var t=3;t<e.data.length;t+=4)if(255!==e.data[t])return!0;return!1};var o;return r([s.property()],t.prototype,"type",void 0),r([s.property({type:String,json:{write:i.write}})],t.prototype,"url",null),r([s.property({json:{write:{overridePolicy:function(){return{enabled:!this.url}}}}}),s.property()],t.prototype,"data",null),r([s.writer("data")],t.prototype,"writeData",null),r([s.reader("data")],t.prototype,"readData",null),r([s.property({type:Boolean,dependsOn:["data"],json:{write:{overridePolicy:function(){return{enabled:this._isOverridden("transparent")}}}}})],t.prototype,"transparent",null),t=o=r([s.subclass("esri.geometry.support.ImageMeshColor")],t)}(s.declared(p.default,o.Identifiable))});