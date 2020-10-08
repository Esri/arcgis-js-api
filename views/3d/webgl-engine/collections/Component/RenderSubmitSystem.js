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

define(["require","exports","./DepthRange"],(function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderSubmitSystem=void 0;var s=function(){function e(e){this._objects=e}return e.prototype.submit=function(e,t){this._objects.preSubmit(t);for(var i=this._objects.visibleObjects,s=0;s<i.length;s++){var r=i[s];r.renderable.material.submit(e,r)}},e.prototype.queryShadowCasterDepthRange=function(e){return this._objects.visibleObjects.length?i.computeDepthRange(e,this._objects.visibleObjects):null},e}();t.RenderSubmitSystem=s}));