// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","../../geometry/support/jsonUtils"],function(e,t,s,i){var r=s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"}),o=t(e,{declaredClass:"esri.tasks.support.DistanceParameters",geometry1:null,geometry2:null,distanceUnit:null,geodesic:null,toJSON:function(){var e={},t=this.geometry1;t&&(e.geometry1=JSON.stringify({geometryType:i.getJsonType(t),geometry:t}),e.sr=JSON.stringify(this.geometry1.spatialReference.toJSON()));var s=this.geometry2;return s&&(e.geometry2=JSON.stringify({geometryType:i.getJsonType(s),geometry:s})),this.distanceUnit&&(e.distanceUnit=r.toJSON(this.distanceUnit)),this.geodesic&&(e.geodesic=this.geodesic),e}});return o});