// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/Polygon","../geometry/jsonUtils"],function(e,t,s,n,o,i,r,a){var l=e(null,{declaredClass:"esri.tasks.BufferParameters",geometries:null,outSpatialReference:null,bufferSpatialReference:null,distances:null,unit:null,unionResults:!1,geodesic:!1,toJson:function(){var e={unit:this.unit,unionResults:this.unionResults,geodesic:this.geodesic},t=this.distances,o=this.outSpatialReference,i=this.bufferSpatialReference,l=s.map(this.geometries,function(e){return e="extent"===e.type?r.fromExtent(e):e,e.toJson()},this),u=this.geometries;if(u&&u.length>0){var f="extent"===u[0].type?"esriGeometryPolygon":a.getJsonType(u[0]);e.geometries=n.toJson({geometryType:f,geometries:l}),e.inSR=u[0].spatialReference.wkid?u[0].spatialReference.wkid:n.toJson(u[0].spatialReference.toJson())}return t&&(e.distances=t.join(",")),o&&(e.outSR=o.wkid?o.wkid:n.toJson(o.toJson())),i&&(e.bufferSR=i.wkid?i.wkid:n.toJson(i.toJson())),e}});return o("extend-esri")&&t.setObject("tasks.BufferParameters",l,i),l});