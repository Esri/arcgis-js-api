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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","./BaseProcessor"],function(e,r,t,n,o,i,a){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="heatmap",r.updating=!1,r}return t(r,e),Object.defineProperty(r.prototype,"queryInfo",{get:function(){var e=this.configuration,r=e.renderer,t=e.definitionExpression,n=e.availableFields,o=e.gdbVersion,i=e.historicMoment;return{definitionExpression:t,orderByFields:null,outFields:n,pixelBuffer:Math.round(3*r.blurRadius),returnCentroid:!1,returnGeometry:!0,gdbVersion:o,historicMoment:i}},enumerable:!0,configurable:!0}),r.prototype.onTileData=function(e,r){if(r&&r.addOrUpdate&&r.addOrUpdate.length>0){var t=i.calculateHeatmapIntensityInfo(r.addOrUpdate.filter(function(e){return 1&e.filterFlags}),this.configuration.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:t},{transferList:[t.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null})},r.prototype.onTileError=function(e,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:r})},r.prototype.onTileUpdate=function(e){},n([o.property()],r.prototype,"configuration",void 0),n([o.property({constructOnly:!0})],r.prototype,"queryInfo",null),n([o.property()],r.prototype,"updating",void 0),r=n([o.subclass()],r)}(o.declared(a.default));r.default=l});