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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(e,t,i,s){var n=e(null,{declaredClass:"esri.tasks.DataFile",constructor:function(e){e&&t.mixin(this,e)},url:null,itemID:null,toJson:function(){var e={};return this.url&&(e.url=this.url),this.itemID&&(e.itemID=this.itemID),e}});return i("extend-esri")&&t.setObject("tasks.DataFile",n,s),n});