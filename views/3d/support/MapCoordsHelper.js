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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../core/Error","../../../core/unitUtils","../../../portal/support/geometryServiceUtils","../../../tasks/support/ProjectParameters"],(function(e,r,t,i,o,n,s,c,a){Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e,r,t){void 0===t&&(t=null),this.spatialReference=r,this.unitInMeters=s.getMetersPerUnitForSR(this.spatialReference),this._geometryServicePromise=this.loadGeometryService(e,t)}return e.prototype.loadGeometryService=function(e,r){return i(this,void 0,void 0,(function(){return t(this,(function(t){switch(t.label){case 0:if(r)return[2,r];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,c.create(e&&e.get("portalItem"))];case 2:return[2,t.sent()];case 3:throw t.sent(),new n("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config");case 4:return[2]}}))}))},e.prototype.toGeographic=function(e){return i(this,void 0,void 0,(function(){var r,i,n,s,c,u,p,l=this;return t(this,(function(t){switch(t.label){case 0:return[4,this._geometryServicePromise];case 1:return r=t.sent(),i=!0,Array.isArray(e[0])&&"number"!=typeof e[0]?n=e:(n=[e],i=!1),s=n.map((function(e){return e instanceof o.Point?e:new o.Point(e,l.spatialReference)})),c=new a({geometries:s,outSpatialReference:o.SpatialReference.WGS84}),[4,r.project(c)];case 2:return u=t.sent(),p=u.map((function(e){return"point"===e.type?[e.x,e.y]:void 0})),[2,i?p:p[0]]}}))}))},e}();r.MapCoordsHelper=u,r.default=u}));