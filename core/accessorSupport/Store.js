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

define(["require","exports","../arrayUtils","../lang"],(function(t,e,o,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Store=void 0;var r=function(){function t(){this._values=new Map}return t.prototype.clone=function(e){var o=new t;return this._values.forEach((function(t,r){e&&e.has(r)||o.set(r,n.clone(t))})),o},t.prototype.get=function(t){return this._values.get(t)},t.prototype.originOf=function(){return 6},t.prototype.keys=function(){return o.keysOfMap(this._values)},t.prototype.set=function(t,e){this._values.set(t,e)},t.prototype.delete=function(t){this._values.delete(t)},t.prototype.has=function(t){return this._values.has(t)},t.prototype.forEach=function(t){this._values.forEach(t)},t}();e.Store=r}));