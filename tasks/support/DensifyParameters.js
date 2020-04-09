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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/support/jsonUtils"],(function(e,t,r,o,s,i,n,p,g){var m=new i.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function t(t){var r=e.call(this,t)||this;return r.geometries=null,r.geodesic=null,r.lengthUnit=null,r.maxSegmentLength=null,r}return o(t,e),t.prototype.toJSON=function(){var e={};if(this.geometries&&this.geometries.length>0){var t=this.geometries.map((function(e){return e.toJSON()}));e.geometries=JSON.stringify({geometryType:g.getJsonType(this.geometries[0]),geometries:t}),e.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}return this.geodesic&&(e.geodesic=this.geodesic),this.lengthUnit&&(e.lengthUnit=m.toJSON(this.lengthUnit)),this.maxSegmentLength&&(e.maxSegmentLength=this.maxSegmentLength),e},r([p.property({types:[s.geometryTypes],json:{write:!0}})],t.prototype,"geometries",void 0),r([p.property({type:Boolean,json:{write:!0}})],t.prototype,"geodesic",void 0),r([p.property({type:String,json:{write:!0}})],t.prototype,"lengthUnit",void 0),r([p.property({type:Number,json:{write:!0}})],t.prototype,"maxSegmentLength",void 0),t=r([p.subclass("esri.tasks.support.DensifyParameters")],t)}(p.declared(n.JSONSupport))}));