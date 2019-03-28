// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary","../../geometry/support/jsonUtils"],function(e,t,s){var i=new t.KebabDictionary({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),o=new t.KebabDictionary({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return e.createSubclass({declaredClass:"esri.tasks.support.OffsetParameters",properties:{bevelRatio:null,geometries:null,offsetDistance:null,offsetHow:null,offsetUnit:null},toJSON:function(){var e={};if(this.geometries&&this.geometries.length>0){var t=this.geometries.map(function(e){return e.toJSON()});e.geometries=JSON.stringify({geometryType:s.getJsonType(this.geometries[0]),geometries:t}),e.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}return this.bevelRatio&&(e.bevelRatio=this.bevelRatio),this.offsetDistance&&(e.offsetDistance=this.offsetDistance),this.offsetHow&&(e.offsetHow=i.toJSON(this.offsetHow)),this.offsetUnit&&(e.offsetUnit=o.toJSON(this.offsetUnit)),e}})});