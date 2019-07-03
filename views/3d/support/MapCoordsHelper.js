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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../geometry","../../../core/Error","../../../core/promiseUtils","../../../core/unitUtils","../../../portal/support/geometryServiceUtils","../../../tasks/support/ProjectParameters"],function(e,r,t,i,o,n,c,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(){function e(e,r,t){void 0===t&&(t=null);var i=this;this.spatialReference=r,this.unitInMeters=n.getMetersPerUnitForSR(this.spatialReference),this.geometryService=t,this.geometryService||c.create(e&&e.get("portalItem")).then(function(e){i.geometryService=e}).catch(function(){})}return e.prototype.toGeographic=function(e){var r=this,n=!0;if(!this.geometryService)return o.reject(new i("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config"));var c;Array.isArray(e[0])&&"number"!=typeof e[0]?c=e:(c=[e],n=!1);var a=c.map(function(e){return e instanceof t.Point?e:new t.Point(e,r.spatialReference)}),p=new s({geometries:a,outSpatialReference:t.SpatialReference.WGS84});return this.geometryService.project(p).then(function(e){var r=e.map(function(e){if("point"===e.type)return[e.x,e.y]});return n?r:r[0]})},e.prototype.canProject=function(){return!!this.geometryService},e}();r.MapCoordsHelper=a,r.default=a});