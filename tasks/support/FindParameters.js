// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/array","../../core/Accessor","../../layers/support/layerUtils"],function(e,i,s){var r=i.createSubclass({declaredClass:"esri.tasks.support.FindParameters",properties:{contains:!0,dynamicLayerInfos:null,layerDefinitions:null,layerIds:null,geometryPrecision:null,maxAllowableOffset:null,outSpatialReference:null,returnGeometry:!1,searchFields:null,searchText:null},toJSON:function(){var i={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},r=this.layerIds,t=this.searchFields,a=this.outSpatialReference;if(r&&(i.layers=r.join(",")),t&&(i.searchFields=t.join(",")),a&&(i.sr=a.wkid||JSON.stringify(a.toJSON())),i.layerDefs=s._serializeLayerDefinitions(this.layerDefinitions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var n,l=[];e.forEach(this.dynamicLayerInfos,function(i){if(!i.subLayerIds){var s=i.id;if(this.layerIds&&-1!==e.indexOf(this.layerIds,s)){var r={id:s};r.source=i.source&&i.source.toJSON();var t;this.layerDefinitions&&this.layerDefinitions[s]&&(t=this.layerDefinitions[s]),t&&(r.definitionExpression=t),l.push(r)}}},this),n=JSON.stringify(l),"[]"===n&&(n="[{}]"),i.dynamicLayers=n}return i}});return r});