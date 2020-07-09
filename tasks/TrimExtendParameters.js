// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel"],(function(e,n,o,t,s,r){var a=e(null,{declaredClass:"esri.tasks.TrimExtendParameters",polylines:null,trimExtendTo:null,extendHow:null,toJson:function(){var e=o.map(this.polylines,(function(e){return e.toJson()})),n={};return n.polylines=t.toJson(e),n.trimExtendTo=t.toJson(this.trimExtendTo.toJson()),n.sr=t.toJson(this.polylines[0].spatialReference.toJson()),n.extendHow=this.extendHow||0,n}});return n.mixin(a,{DEFAULT_CURVE_EXTENSION:0,RELOCATE_ENDS:1,KEEP_END_ATTRIBUTES:2,NO_END_ATTRIBUTES:4,NO_EXTEND_AT_FROM:8,NO_EXTEND_AT_TO:16}),s("extend-esri")&&n.setObject("tasks.TrimExtendParameters",a,r),a}));