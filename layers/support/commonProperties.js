// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../TimeExtent","../../core/accessorSupport/utils","../../core/accessorSupport/write","../../support/persistableUrlUtils","../../symbols/support/ElevationInfo","../../webdoc/support/opacityUtils"],(function(e,i,n,r,t,a,o,s,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.combinedViewLayerTimeExtentProperty=i.opacityDrawingInfo=i.opacity=i.readOnlyService=i.elevationInfo=i.legendEnabled=i.url=i.labelsVisible=i.popupEnabled=i.screenSizePerspectiveEnabled=void 0,i.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,i){if(null!=i.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return i.screenSizePerspective;t.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,i,n,r){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?i[n]=e:a.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},r)&&(i[n]=e)}}}}}},i.popupEnabled={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(e,i){return!i.disablePopup}},write:{enabled:!0,writer:function(e,i,n){i[n]=!e}}}},i.labelsVisible={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},i.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:o.write}}},i.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},i.elevationInfo={value:null,type:s,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}},i.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},i.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},i.opacityDrawingInfo=n.__assign(n.__assign({},i.opacity),{json:n.__assign(n.__assign({},i.opacity.json),{origins:{"web-document":n.__assign(n.__assign({},i.opacity.json.origins["web-document"]),{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,i,n){return n&&"service"!==n.origin||!i.drawingInfo||void 0===i.drawingInfo.transparency?i.layerDefinition&&i.layerDefinition.drawingInfo&&void 0!==i.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(i.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(i.drawingInfo.transparency)}}})}),i.combinedViewLayerTimeExtentProperty={type:r,dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get:function(){var e,i;if(!(null===(e=this.layer)||void 0===e?void 0:e.timeInfo))return null;var n=null===(i=this.view)||void 0===i?void 0:i.timeExtent,r=this.layer.timeExtent,t=this.layer.useViewTime?n&&r?n.intersection(r):n||r:r;if(!t||t.isEmpty)return t;var a=this.layer.timeOffset,o=a?t.offset(-a.value,a.unit):t,s=this._get("timeExtent");return o.equals(s)?s:o}}}));