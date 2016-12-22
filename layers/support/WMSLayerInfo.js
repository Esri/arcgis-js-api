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

define(["../../core/declare","dojo/_base/array"],function(e,t){var s=e(null,{declaredClass:"esri.layers.support.WMSLayerInfo",name:null,title:null,description:null,extent:null,legendURL:null,subLayers:[],allExtents:[],spatialReferences:[],constructor:function(e){e&&(this.name=e.name,this.title=e.title,this.description=e.description,this.extent=e.extent,this.legendURL=e.legendURL,this.subLayers=e.subLayers?e.subLayers:[],this.allExtents=e.allExtents?e.allExtents:[],this.spatialReferences=e.spatialReferences?e.spatialReferences:[])},clone:function(){var e,s={name:this.name,title:this.title,description:this.description,legendURL:this.legendURL};this.extent&&(s.extent=this.extent.getExtent()),s.subLayers=[],t.forEach(this.subLayers,function(e){s.subLayers.push(e.clone())}),s.allExtents=[];for(e in this.allExtents)e=parseInt(e,10),isNaN(e)||(s.allExtents[e]=this.allExtents[e].getExtent());return s.spatialReferences=[],t.forEach(this.spatialReferences,function(e){s.spatialReferences.push(e)}),s}});return s});