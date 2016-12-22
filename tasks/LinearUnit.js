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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(n,t,s,i){var e=n(null,{declaredClass:"esri.tasks.LinearUnit",constructor:function(n){n&&t.mixin(this,n)},distance:0,units:null,toJson:function(){var n={};return this.distance&&(n.distance=this.distance),this.units&&(n.units=this.units),n}});return s("extend-esri")&&t.setObject("tasks.LinearUnit",e,i),e});