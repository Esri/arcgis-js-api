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
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../layerUtils"],function(e,s,i,n,r,a,t){var o=e(null,{declaredClass:"esri.tasks.FindParameters",searchText:null,contains:!0,searchFields:null,outSpatialReference:null,layerIds:null,returnGeometry:!1,layerDefinitions:null,dynamicLayerInfos:null,toJson:function(){var e={searchText:this.searchText,contains:this.contains,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},s=this.layerIds,r=this.searchFields,a=this.outSpatialReference;if(s&&(e.layers=s.join(",")),r&&(e.searchFields=r.join(",")),a&&(e.sr=a.wkid||n.toJson(a.toJson())),e.layerDefs=t._serializeLayerDefinitions(this.layerDefinitions),this.dynamicLayerInfos&&this.dynamicLayerInfos.length>0){var o,l=[];i.forEach(this.dynamicLayerInfos,function(e){if(!e.subLayerIds){var s=e.id;if(this.layerIds&&-1!==i.indexOf(this.layerIds,s)){var n={id:s};n.source=e.source&&e.source.toJson();var r;this.layerDefinitions&&this.layerDefinitions[s]&&(r=this.layerDefinitions[s]),r&&(n.definitionExpression=r),l.push(n)}}},this),o=n.toJson(l),"[]"===o&&(o="[{}]"),e.dynamicLayers=o}return e}});return r("extend-esri")&&s.setObject("tasks.FindParameters",o,a),o});