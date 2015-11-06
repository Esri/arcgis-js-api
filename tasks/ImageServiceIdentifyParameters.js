// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang","../geometry/jsonUtils"],function(e,t,i,l,n,s,o){var r=e(null,{declaredClass:"esri.tasks.ImageServiceIdentifyParameters",geometry:null,mosaicRule:null,renderingRule:null,pixelSizeX:null,pixelSizeY:null,pixelSize:null,returnGeometry:!1,returnCatalogItems:!0,timeExtent:null,toJson:function(e){var t=e&&e.geometry||this.geometry,l={geometry:t,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,mosaicRule:this.mosaicRule?i.toJson(this.mosaicRule.toJson()):null,renderingRule:this.renderingRule?i.toJson(this.renderingRule.toJson()):null};t&&(l.geometryType=o.getJsonType(t));var n=this.timeExtent;return l.time=n?n.toJson().join(","):null,s.isDefined(this.pixelSizeX)&&s.isDefined(this.pixelSizeY)?l.pixelSize=i.toJson({x:parseFloat(this.pixelSizeX),y:parseFloat(this.pixelSizeY)}):this.pixelSize&&(l.pixelSize=this.pixelSize?i.toJson(this.pixelSize.toJson()):null),l}});return l("extend-esri")&&t.setObject("tasks.ImageServiceIdentifyParameters",r,n),r});