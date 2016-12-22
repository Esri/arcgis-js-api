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

define(["../../core/declare","dojo/_base/array","../../core/Accessoire","../../layers/support/layerUtils"],function(e,i,s,r){var t=e(s,{declaredClass:"esri.tasks.support.FindParameters",contains:!0,dynamicLayerInfos:null,layerDefinitions:null,layerIds:null,geometryPrecision:null,maxAllowableOffset:null,outSpatialReference:null,returnGeometry:!1,searchFields:null,searchText:null,toJSON:function(){var e={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},s=this.layerIds,t=this.searchFields,n=this.outSpatialReference;if(s&&(e.layers=s.join(",")),t&&(e.searchFields=t.join(",")),n&&(e.sr=n.wkid||JSON.stringify(n.toJSON())),e.layerDefs=r._serializeLayerDefinitions(this.layerDefinitions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var a,l=[];i.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var s=e.id;if(this.layerIds&&-1!==i.indexOf(this.layerIds,s)){var r={id:s};r.source=e.source&&e.source.toJSON();var t;this.layerDefinitions&&this.layerDefinitions[s]&&(t=this.layerDefinitions[s]),t&&(r.definitionExpression=t),l.push(r)}}},this),a=JSON.stringify(l),"[]"===a&&(a="[{}]"),e.dynamicLayers=a}return e}});return t});