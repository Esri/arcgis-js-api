// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["../../core/Accessor","../../layers/support/layerUtils"],function(e,i){return e.createSubclass({declaredClass:"esri.tasks.support.FindParameters",properties:{contains:!0,dynamicLayerInfos:null,layerDefinitions:null,layerIds:null,geometryPrecision:null,maxAllowableOffset:null,outSpatialReference:null,returnGeometry:!1,searchFields:null,searchText:null},toJSON:function(){var e={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},s=this.layerIds,r=this.searchFields,t=this.outSpatialReference;if(s&&(e.layers=s.join(",")),r&&(e.searchFields=r.join(",")),t&&(e.sr=t.wkid||JSON.stringify(t.toJSON())),e.layerDefs=i.serializeLayerDefinitions(this.layerDefinitions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var n,a=[];this.dynamicLayerInfos.forEach(function(e){if(!e.subLayerIds){var i=e.id;if(this.layerIds&&-1!==this.layerIds.indexOf(i)){var s={id:i};s.source=e.source&&e.source.toJSON();var r;this.layerDefinitions&&this.layerDefinitions[i]&&(r=this.layerDefinitions[i]),r&&(s.definitionExpression=r),a.push(s)}}},this),n=JSON.stringify(a),"[]"===n&&(n="[{}]"),e.dynamicLayers=n}return e}})});