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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel"],function(e,t,s,n,a){var l=e(null,{declaredClass:"esri.layers.WMSLayerInfo",name:null,title:null,description:null,extent:null,legendURL:null,subLayers:[],allExtents:[],spatialReferences:[],constructor:function(e){e&&(this.name=e.name,this.title=e.title,this.description=e.description,this.extent=e.extent,this.legendURL=e.legendURL,this.subLayers=e.subLayers?e.subLayers:[],this.allExtents=e.allExtents?e.allExtents:[],this.spatialReferences=e.spatialReferences?e.spatialReferences:[])},clone:function(){var e,t={name:this.name,title:this.title,description:this.description,legendURL:this.legendURL};this.extent&&(t.extent=this.extent.getExtent()),t.subLayers=[],s.forEach(this.subLayers,function(e){t.subLayers.push(e.clone())}),t.allExtents=[];for(e in this.allExtents)e=parseInt(e,10),isNaN(e)||(t.allExtents[e]=this.allExtents[e].getExtent());return t.spatialReferences=[],s.forEach(this.spatialReferences,function(e){t.spatialReferences.push(e)}),t}});return n("extend-esri")&&t.setObject("layers.WMSLayerInfo",l,a),l});