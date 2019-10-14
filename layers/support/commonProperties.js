// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/urlUtils","../../core/accessorSupport/PropertyOrigin","../../core/accessorSupport/utils","../../core/accessorSupport/write","../../symbols/support/ElevationInfo","../../webdoc/support/opacityUtils"],function(e,r,i,n,o,t,a,s,c){function p(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void t.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,o.OriginId.DEFAULTS):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,i,n){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[i]=e:a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n)&&(r[i]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,i){r[i]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:s,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=p,r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=i({},r.opacity,{json:i({},r.opacity.json,{origins:{"web-document":i({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,i){return i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?c.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:c.transparencyToOpacity(r.drawingInfo.transparency)}}})})});