// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./PropertyOrigin"],function(t,e,n){var r=function(){function t(){this._values={}}return t.prototype.get=function(t){return this._values[t]},t.prototype.originOf=function(t){return n.OriginId.USER},t.prototype.keys=function(){return Object.keys(this._values)},t.prototype.set=function(t,e){this._values[t]=e},t.prototype.clear=function(t){delete this._values[t]},t.prototype.has=function(t){return t in this._values},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r});