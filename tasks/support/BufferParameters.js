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

define(["require","exports","tslib","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Polygon","../../geometry/SpatialReference","../../geometry/support/jsonUtils"],(function(e,t,o,r,i,n,s,p,a,u){var y=new i.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function t(t){var o=e.call(this,t)||this;return o.bufferSpatialReference=null,o.distances=null,o.geodesic=!1,o.geometries=null,o.outSpatialReference=null,o.unionResults=!1,o.unit=null,o}return o.__extends(t,e),t.prototype.toJSON=function(){var e={unit:y.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},t=this.distances,o=this.outSpatialReference,r=this.bufferSpatialReference,i=this.geometries;if(i&&i.length>0){var n=i.map((function(e){return(e="extent"===e.type?p.fromExtent(e):e).toJSON()})),s="extent"===i[0].type?"esriGeometryPolygon":u.getJsonType(i[0]);e.geometries=JSON.stringify({geometryType:s,geometries:n}),e.inSR=i[0].spatialReference.wkid?i[0].spatialReference.wkid:JSON.stringify(i[0].spatialReference.toJSON())}return t&&(e.distances=t.join(",")),o&&(e.outSR=o.wkid?o.wkid:JSON.stringify(o.toJSON())),r&&(e.bufferSR=r.wkid?r.wkid:JSON.stringify(r.toJSON())),e},o.__decorate([s.property({type:a,json:{write:!0}})],t.prototype,"bufferSpatialReference",void 0),o.__decorate([s.property({type:[Number],json:{write:!0}})],t.prototype,"distances",void 0),o.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"geodesic",void 0),o.__decorate([s.property({types:[r.geometryTypes],json:{write:!0}})],t.prototype,"geometries",void 0),o.__decorate([s.property({type:a,json:{write:!0}})],t.prototype,"outSpatialReference",void 0),o.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"unionResults",void 0),o.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"unit",void 0),t=o.__decorate([s.subclass("esri.tasks.support.BufferParameters")],t)}(n.JSONSupport)}));