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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../../core/JSONSupport","../../core/kebabDictionary","../../geometry/Polygon","../../geometry/support/jsonUtils"],function(e,t,i,s){var n=t({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"}),r=e.createSubclass({declaredClass:"esri.tasks.support.BufferParameters",properties:{bufferSpatialReference:null,distances:null,geodesic:!1,geometries:null,outSpatialReference:null,unionResults:!1,unit:null},toJSON:function(){var e={unit:n.toJSON(this.unit),unionResults:this.unionResults,geodesic:this.geodesic},t=this.distances,r=this.outSpatialReference,o=this.bufferSpatialReference,a=this.geometries;if(a&&a.length>0){var u=a.map(function(e){return e="extent"===e.type?i.fromExtent(e):e,e.toJSON()}),l="extent"===a[0].type?"esriGeometryPolygon":s.getJsonType(a[0]);e.geometries=JSON.stringify({geometryType:l,geometries:u}),e.inSR=a[0].spatialReference.wkid?a[0].spatialReference.wkid:JSON.stringify(a[0].spatialReference.toJSON())}return t&&(e.distances=t.join(",")),r&&(e.outSR=r.wkid?r.wkid:JSON.stringify(r.toJSON())),o&&(e.bufferSR=o.wkid?o.wkid:JSON.stringify(o.toJSON())),e}});return r});