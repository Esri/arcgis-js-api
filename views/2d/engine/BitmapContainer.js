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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","./brushes","./webgl/WGLContainer"],(function(e,r,t,n,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.BitmapContainer=void 0;var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.prepareRenderPasses=function(r){var s=this,i=r.registerRenderPass({name:"bitmap",brushes:[n.brushes.bitmap],target:function(){return s.children}});return t.__spreadArrays(e.prototype.prepareRenderPasses.call(this,r),[i])},r}(s.default);r.BitmapContainer=i}));