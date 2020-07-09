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

define(["require","exports","tslib","../../../geometry","../../../core/Error","../../../core/unitUtils","../../../portal/support/geometryServiceUtils","../../../tasks/support/ProjectParameters"],(function(e,t,r,i,n,o,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t,r){void 0===r&&(r=null),this.spatialReference=t,this.unitInMeters=o.getMetersPerUnitForSR(this.spatialReference),this._geometryServicePromise=this.loadGeometryService(e,r)}return e.prototype.loadGeometryService=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:if(t)return[2,t];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,s.create(e&&e.get("portalItem"))];case 2:return[2,r.sent()];case 3:throw r.sent(),new n("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config");case 4:return[2]}}))}))},e.prototype.toGeographic=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,o,s,c,u,p,l=this;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this._geometryServicePromise];case 1:return t=r.sent(),n=!0,Array.isArray(e[0])&&"number"!=typeof e[0]?o=e:(o=[e],n=!1),s=o.map((function(e){return e instanceof i.Point?e:new i.Point(e,l.spatialReference)})),c=new a({geometries:s,outSpatialReference:i.SpatialReference.WGS84}),[4,t.project(c)];case 2:return u=r.sent(),p=u.map((function(e){return"point"===e.type?[e.x,e.y]:void 0})),[2,n?p:p[0]]}}))}))},e}();t.MapCoordsHelper=c,t.default=c}));