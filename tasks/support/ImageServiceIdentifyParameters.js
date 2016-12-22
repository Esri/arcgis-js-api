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

define(["../../core/declare","../../core/Accessoire","../../core/lang","../../geometry/support/jsonUtils"],function(e,i,t,l){var r=e(i,{declaredClass:"esri.tasks.support.ImageServiceIdentifyParameters",geometry:null,mosaicRule:null,noData:null,renderingRule:null,pixelSizeX:null,pixelSizeY:null,pixelSize:null,returnGeometry:!1,returnCatalogItems:!0,timeExtent:null,toJSON:function(e){var i=e&&e.geometry||this.geometry,r={geometry:i,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,mosaicRule:this.mosaicRule?JSON.stringify(this.mosaicRule.toJSON()):null,renderingRule:this.renderingRule?JSON.stringify(this.renderingRule.toJSON()):null};i&&(r.geometryType=l.getJsonType(i));var n=this.timeExtent;return r.time=n?n.toJSON().join(","):null,t.isDefined(this.pixelSizeX)&&t.isDefined(this.pixelSizeY)?r.pixelSize=JSON.stringify({x:parseFloat(this.pixelSizeX),y:parseFloat(this.pixelSizeY)}):this.pixelSize&&(r.pixelSize=this.pixelSize?JSON.stringify(this.pixelSize.toJSON()):null),r}});return r});