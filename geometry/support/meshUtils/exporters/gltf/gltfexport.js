// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../core/promiseUtils","./index"],(function(e,n,t,o){Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){this.file={type:"model/gltf-binary",data:e},this.origin=n}return e.prototype.buffer=function(){return t.resolve(this.file)},e.prototype.download=function(e){var n=this;return t.create((function(){var t=new Blob([n.file.data],{type:n.file.type}),o=e;if(o||(o="model.glb"),"glb"!==o.split(".").pop()&&(o+=".glb"),window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(t,o);else{var r=document.createElement("a"),i=URL.createObjectURL(t);r.href=i,r.download=o,document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(i)}),0)}}))},e}();n.toBinaryGLTF=function(e,n){var t=new o.Asset,i=new o.Scene;t.addScene(i);var d=new o.Node;return i.addNode(d),d.mesh=e,o.exportGLB(t,n).then((function(e){return new r(e[o.MODEL_NAME_GLB],e.origin)}))}}));