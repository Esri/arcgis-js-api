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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t){var r=e.call(this)||this;return r.shape=o.getDefault("Circle"),r.rawNode=t,r}return r(t,e),t.prototype.getBoundingBox=function(){if(!this.bbox){var e=this.shape;this.bbox={x:e.cx-e.r,y:e.cy-e.r,width:2*e.r,height:2*e.r}}return this.bbox},t.nodeType="circle",t}(i.default);t.default=n});