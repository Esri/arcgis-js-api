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

define(["../../core/declare","dojo/_base/array","../../core/Accessoire","../../core/lang","../../geometry/support/jsonUtils"],function(r,t,e,o,s){var i=r(e,{declaredClass:"esri.tasks.support.ProjectParameters",geometries:null,outSR:null,transformation:null,transformForward:null,toJSON:function(){var r=t.map(this.geometries,function(r){return r.toJSON()}),e={};return e.outSR=this.outSR.wkid||JSON.stringify(this.outSR.toJSON()),e.inSR=this.geometries[0].spatialReference.wkid||JSON.stringify(this.geometries[0].spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:s.getJsonType(this.geometries[0]),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),o.isDefined(this.transformForward)&&(e.transformForward=this.transformForward),e}});return i});