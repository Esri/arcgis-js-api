// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../geometry","../../core/Accessor","../../core/jsonMap","../../core/accessorSupport/decorators","../../geometry/support/jsonUtils"],function(e,t,r,o,s,i,n,p,y){var c=new n.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return function(e){function t(t){var r=e.call(this,t)||this;return r.geometry1=null,r.geometry2=null,r.distanceUnit=null,r.geodesic=null,r}return o(t,e),t.prototype.toJSON=function(){var e={},t=this.geometry1;t&&(e.geometry1=JSON.stringify({geometryType:y.getJsonType(t),geometry:t}),e.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));var r=this.geometry2;return r&&(e.geometry2=JSON.stringify({geometryType:y.getJsonType(r),geometry:r})),this.distanceUnit&&(e.distanceUnit=c.toJSON(this.distanceUnit)),this.geodesic&&(e.geodesic=this.geodesic),e},r([p.property({types:s.geometryTypes,json:{write:!0}})],t.prototype,"geometry1",void 0),r([p.property({types:s.geometryTypes,json:{write:!0}})],t.prototype,"geometry2",void 0),r([p.property({type:String,json:{write:!0}})],t.prototype,"distanceUnit",void 0),r([p.property({type:Boolean,json:{write:!0}})],t.prototype,"geodesic",void 0),t=r([p.subclass("esri.tasks.support.DistanceParameters")],t)}(p.declared(i))});