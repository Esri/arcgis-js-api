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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators","./sublayerUtils"],function(e,r,a,n,t,s,i,l){var y={visible:"visibleSublayers",definitionExpression:"layerDefs",labelsVisible:"hasDynamicLayers",labelingInfo:"hasDynamicLayers",opacity:"hasDynamicLayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.scale=0,r}return n(r,e),Object.defineProperty(r.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map(function(e){return e.toExportImageJSON()});return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasDynamicLayers",{get:function(){return l.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach(function(e){return e.remove()}),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("sublayer-update",function(e){return r.notifyChange(y[e.propertyName])})]))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map(function(e){return e.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter(function(e){return null!=e.definitionExpression});return e.length?JSON.stringify(e.reduce(function(e,r){return e[r.id]=r.definitionExpression,e},{})):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=this.layer.sublayers,a=[],n=function(r){var t=e.scale,s=0===t,i=0===r.minScale||t<=r.minScale,l=0===r.maxScale||t>=r.maxScale;r.visible&&(s||i&&l)&&(r.sublayers?r.sublayers.forEach(n):a.unshift(r))};return r&&r.forEach(n),a},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=a({},r,{layers:this.layers,layerDefs:this.layerDefs}),r},t([i.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],r.prototype,"dynamicLayers",null),t([i.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],r.prototype,"hasDynamicLayers",null),t([i.property()],r.prototype,"layer",null),t([i.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),t([i.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layerDefs",null),t([i.property({type:Number})],r.prototype,"scale",void 0),t([i.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion"]})],r.prototype,"version",null),t([i.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),r=t([i.subclass("esri.layers.mixins.ExportImageParameters")],r)}(i.declared(s))});