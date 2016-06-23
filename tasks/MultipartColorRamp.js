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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../symbols/Symbol","./ColorRamp"],function(o,t,r,a,s,e){var n=o(e,{declaredClass:"esri.tasks.MultipartColorRamp",type:"multipart",constructor:function(){this.colorRamps=[]},addColorRamp:function(o){this.colorRamps.push(o)},toJson:function(){var o=r.map(this.colorRamps,function(o){return o.toJson()}),t={type:"multipart",colorRamps:o};return t}});return a("extend-esri")&&t.setObject("tasks.MultipartColorRamp",n,s),n});