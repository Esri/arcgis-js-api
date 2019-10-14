// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/compilerUtils","../../core/Identifiable","../../core/Logger","../../core/urlUtils","../../core/accessorSupport/decorators","./MeshColor","../../views/support/screenshotUtils"],function(e,t,r,a,n,o,i,s,p,u,l){var d=i.getLogger("esri.geometry.support.ImageMeshColor");return function(e){function t(t){var r=e.call(this)||this;return r.type="image",d.warn("esri/geometry/support/ImageMeshColor is deprecated since version 4.11. Use esri/geometry/support/MeshTexture instead."),r}r(t,e),o=t,Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")||null},set:function(e){this._set("url",e),e&&this._set("data",null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._get("data")||null},set:function(e){this._set("data",e),e&&this._set("url",null)},enumerable:!0,configurable:!0}),t.prototype.writeData=function(e,t,r,a){if(e instanceof HTMLImageElement){var n={type:"image-element",src:s.toJSON(e.src,a)};t[r]=n}else if(e instanceof HTMLCanvasElement){var o=e.getContext("2d").getImageData(0,0,e.width,e.height),n={type:"canvas-element",imageData:this.encodeImageData(o)};t[r]=n}else{var n={type:"image-data",imageData:this.encodeImageData(e)};t[r]=n}},t.prototype.readData=function(e,t){switch(e.type){case"image-element":var r=new Image;return r.src=e.src,r;case"canvas-element":var a=this.decodeImageData(e.imageData),o=document.createElement("canvas");return o.width=a.width,o.height=a.height,o.getContext("2d").putImageData(a,0,0),o;case"image-data":return this.decodeImageData(e.imageData);default:return void n.neverReached(e)}},Object.defineProperty(t.prototype,"transparent",{get:function(){var e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return this.imageDataContainsTransparent(e);if(t){var r=t.substr(t.length-4,4).toLowerCase(),a=t.substr(0,15).toLocaleLowerCase();if(".png"===r||"data:image/png;"===a)return!0}return!1},set:function(e){null!=e?this._override("transparent",e):this._clearOverride("transparent")},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new o({url:this.url,data:this.data})},t.prototype.encodeImageData=function(e){for(var t="",r=0;r<e.data.length;r++)t+=String.fromCharCode(e.data[r]);return{data:btoa(t),width:e.width,height:e.height}},t.prototype.decodeImageData=function(e){for(var t=atob(e.data),r=new Uint8ClampedArray(t.length),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return l.wrapImageData(r,e.width,e.height)},t.prototype.imageDataContainsTransparent=function(e){for(var t=3;t<e.data.length;t+=4)if(255!==e.data[t])return!0;return!1};var o;return a([p.property()],t.prototype,"type",void 0),a([p.property({type:String,json:{write:s.write}})],t.prototype,"url",null),a([p.property({json:{write:{overridePolicy:function(){return{enabled:!this.url}}}}}),p.property()],t.prototype,"data",null),a([p.writer("data")],t.prototype,"writeData",null),a([p.reader("data")],t.prototype,"readData",null),a([p.property({type:Boolean,dependsOn:["data","url"],json:{write:{overridePolicy:function(){return{enabled:this._isOverridden("transparent")}}}}})],t.prototype,"transparent",null),t=o=a([p.subclass("esri.geometry.support.ImageMeshColor")],t)}(p.declared(o.IdentifiableMixin(u.default)))});