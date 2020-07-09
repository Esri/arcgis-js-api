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

define(["require","exports","tslib","../core/Version"],(function(e,n,r,t){Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){function n(n,r){return e.call(this,n,r,"webscene")||this}return r.__extends(n,e),Object.defineProperty(n.prototype,"supportsGround",{get:function(){return this.since(1,8)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"supportsVisibleElevationLayersInSlides",{get:function(){return this.lessThan(1,8)},enumerable:!0,configurable:!0}),n}(t.Version);n.Version=i,n.default=i}));