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

define(["../../core/Accessoire","../../core/declare","../../core/kebabDictionary","../../geometry/support/jsonUtils","dojo/_base/lang"],function(e,t,s,i,o){var r=s({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),f=s({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"}),n=t(e,{declaredClass:"esri.tasks.support.OffsetParameters",bevelRatio:null,geometries:null,offsetDistance:null,offsetHow:null,offsetUnit:null,toJSON:function(){var e={};if(this.geometries&&this.geometries.length>0){var t=this.geometries.map(function(e){return e.toJSON()});e.geometries=JSON.stringify({geometryType:i.getJsonType(this.geometries[0]),geometries:t}),e.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}return this.bevelRatio&&(e.bevelRatio=this.bevelRatio),this.offsetDistance&&(e.offsetDistance=this.offsetDistance),this.offsetHow&&(e.offsetHow=r.toJSON(this.offsetHow)),this.offsetUnit&&(e.offsetUnit=f.toJSON(this.offsetUnit)),e}});return n});