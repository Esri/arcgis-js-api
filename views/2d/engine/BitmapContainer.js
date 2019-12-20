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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../engine","./webgl/WGLContainer"],function(e,r,t,n,s,p){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.prepareRenderPasses=function(r){var t=this,n=r.registerRenderPass({name:"bitmap",brushes:[s.brushes.Bitmap],target:function(){return t.children}});return e.prototype.prepareRenderPasses.call(this,r).concat([n])},r}(p.default);r.BitmapContainer=a});