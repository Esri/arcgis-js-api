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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel"],function(n,t,e,a,s,o){var i=n(null,{declaredClass:"esri.tasks.AreasAndLengthsParameters",polygons:null,lengthUnit:null,areaUnit:null,calculationType:null,toJson:function(){var n=e.map(this.polygons,function(n){return n.toJson()}),s={};s.polygons=a.toJson(n);var o=this.polygons[0].spatialReference;return s.sr=o.wkid?o.wkid:a.toJson(o.toJson()),this.lengthUnit&&(s.lengthUnit=this.lengthUnit),this.areaUnit&&(s.areaUnit=t.isString(this.areaUnit)?a.toJson({areaUnit:this.areaUnit}):this.areaUnit),this.calculationType&&(s.calculationType=this.calculationType),s}});return s("extend-esri")&&t.setObject("tasks.AreasAndLengthsParameters",i,o),i});