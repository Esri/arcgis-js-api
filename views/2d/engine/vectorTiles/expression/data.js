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

define(["require","exports"],(function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Zoom=n.Properties=n.GeomType=n.ID=void 0;var t=function(){function e(){}return e.parse=function(n){if(n.length>1)throw new Error('"id" does not expect arguments');return new e},e.prototype.evaluate=function(e,n){return e.id},e}();n.ID=t;var r=function(){function e(){}return e.parse=function(n){if(n.length>1)throw new Error('"geometry-type" does not expect arguments');return new e},e.prototype.evaluate=function(e,n){switch(e.type){case 0:return"Unknown";case 1:return"Point";case 2:return"LineString";case 3:return"Polygon"}},e}();n.GeomType=r;var o=function(){function e(){}return e.parse=function(n){if(n.length>1)throw new Error('"properties" does not expect arguments');return new e},e.prototype.evaluate=function(e,n){return e.values},e}();n.Properties=o;var u=function(){function e(){}return e.parse=function(n){if(n.length>1)throw new Error('"zoom" does not expect arguments');return new e},e.prototype.evaluate=function(e,n){return n},e}();n.Zoom=u}));