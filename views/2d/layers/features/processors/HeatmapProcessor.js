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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/accessorSupport/decorators","../../../../../renderers/support/heatmapUtils","./BaseProcessor"],function(e,r,t,o,n,i,p){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="heatmap",r.updating=!1,r}return t(r,e),Object.defineProperty(r.prototype,"queryInfo",{get:function(){var e=this.configuration,r=e.renderer,t=e.definitionExpression,o=e.outFields,n=e.gdbVersion,i=e.historicMoment;return{definitionExpression:t,orderByFields:null,outFields:o,pixelBuffer:Math.round(4.5*r.blurRadius),returnCentroid:!1,returnGeometry:!0,gdbVersion:n,historicMoment:i}},enumerable:!0,configurable:!0}),r.prototype.onTileData=function(e,r){if(r&&r.addOrUpdate&&r.addOrUpdate.length>0){var t=i.calculateHeatmapIntensityInfo(r.addOrUpdate,this.configuration.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:t},[t.matrix])}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null})},r.prototype.onTileError=function(e,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:r})},r.prototype.onTileUpdate=function(e){},o([n.property()],r.prototype,"configuration",void 0),o([n.property({constructOnly:!0})],r.prototype,"queryInfo",null),o([n.property()],r.prototype,"updating",void 0),r=o([n.subclass()],r)}(n.declared(p.default));r.default=a});