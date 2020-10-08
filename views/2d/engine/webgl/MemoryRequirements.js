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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._byGeometryType=null}return Object.defineProperty(e.prototype,"satisfied",{get:function(){return!this._byGeometryType},enumerable:!1,configurable:!0}),e.prototype.reset=function(){this._byGeometryType=null},e.prototype.verticesFor=function(e){return this._byGeometryType?this._byGeometryType[e].vertices:0},e.prototype.indicesFor=function(e){return this._byGeometryType?this._byGeometryType[e].indices:0},e.prototype.needMore=function(e,t,i){if(t||i){this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]);var r=this._byGeometryType[e];r.vertices+=t,r.indices+=i}},e}();t.default=i}));