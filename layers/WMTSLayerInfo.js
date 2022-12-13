// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],(function(t,i,e,l){var n=t(null,{declaredClass:"esri.layers.WMTSLayerInfo",identifier:null,tileMatrixSet:null,format:null,style:null,tileInfo:null,title:null,fullExtent:null,initialExtent:null,description:null,dimension:null,constructor:function(t){t&&(this.title=t.title,this.tileMatrixSet=t.tileMatrixSet,this.format=t.format,this.style=t.style,this.tileInfo=t.tileInfo,this.fullExtent=t.fullExtent,this.initialExtent=t.initialExtent,this.identifier=t.identifier,this.description=t.description,this.dimension=t.dimension)}});return e("extend-esri")&&i.setObject("layers.WMTSLayerInfo",n,l),n}));