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

define(["require","exports","tslib","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Polygon","../../geometry/SpatialReference","../../geometry/support/jsonUtils"],(function(e,t,r,o,i,s,n,p,a,u){"use strict";var c=new i.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function t(t){var r=e.call(this,t)||this;return r.bufferSpatialReference=null,r.distances=null,r.geodesic=!1,r.geometries=null,r.outSpatialReference=null,r.unionResults=!1,r.unit=null,r}return r.__extends(t,e),t.prototype.toJSON=function(){var e={unit:c.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},t=this.distances,r=this.outSpatialReference,o=this.bufferSpatialReference,i=this.geometries;if(i&&i.length>0){var s=i.map((function(e){return(e="extent"===e.type?p.fromExtent(e):e).toJSON()})),n="extent"===i[0].type?"esriGeometryPolygon":u.getJsonType(i[0]);e.geometries=JSON.stringify({geometryType:n,geometries:s}),e.inSR=i[0].spatialReference.wkid?i[0].spatialReference.wkid:JSON.stringify(i[0].spatialReference.toJSON())}return t&&(e.distances=t.join(",")),r&&(e.outSR=r.wkid?r.wkid:JSON.stringify(r.toJSON())),o&&(e.bufferSR=o.wkid?o.wkid:JSON.stringify(o.toJSON())),e},r.__decorate([n.property({type:a,json:{write:!0}})],t.prototype,"bufferSpatialReference",void 0),r.__decorate([n.property({type:[Number],json:{write:!0}})],t.prototype,"distances",void 0),r.__decorate([n.property({type:Boolean,json:{write:!0}})],t.prototype,"geodesic",void 0),r.__decorate([n.property({types:[o.geometryTypes],json:{write:!0}})],t.prototype,"geometries",void 0),r.__decorate([n.property({type:a,json:{write:!0}})],t.prototype,"outSpatialReference",void 0),r.__decorate([n.property({type:Boolean,json:{write:!0}})],t.prototype,"unionResults",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"unit",void 0),t=r.__decorate([n.subclass("esri.tasks.support.BufferParameters")],t)}(s.JSONSupport)}));