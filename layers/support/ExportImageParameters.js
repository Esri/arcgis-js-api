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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","dojo/_base/lang","../../core/Accessor","./sublayerUtils"],function(e,r,n,a,t,i,s,l){var o={visible:"visibleSublayers",definitionExpression:"layerDefs",labelsVisible:"hasDynamicLayers",labelingInfo:"hasDynamicLayers",opacity:"hasDynamicLayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},y=function(e){function r(){e.apply(this,arguments),this.scale=0}return n(r,e),Object.defineProperty(r.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map(function(e){return e.toExportImageJSON()});return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasDynamicLayers",{get:function(){return l.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach(function(e){return e.remove()}),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("sublayer-update",function(e){return r.notifyChange(o[e.propertyName])})]))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map(function(e){return e.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter(function(e){return null!=e.definitionExpression});if(!e.length)return null;var r=/[:;]/,n=e.some(r.test.bind(r));return n?JSON.stringify(e.reduce(function(e,r){return e[r.id]=r.definitionExpression,e},{})):e.map(function(e){return e.id+":"+e.definitionExpression}).join(";")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=this.layer.sublayers,n=[],a=function(r){var t=e.scale,i=0===t,s=0===r.minScale||t<=r.minScale,l=0===r.maxScale||t>=r.maxScale;r.visible&&(i||s&&l)&&(r.sublayers?r.sublayers.forEach(a):n.unshift(r))};return r&&r.forEach(a),n},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:i.mixin(r,{layers:this.layers,layerDefs:this.layerDefs}),r},a([t.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],r.prototype,"dynamicLayers",null),a([t.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],r.prototype,"hasDynamicLayers",null),a([t.property()],r.prototype,"layer",null),a([t.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),a([t.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layerDefs",null),a([t.property({type:Number})],r.prototype,"scale",void 0),a([t.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion"]})],r.prototype,"version",null),a([t.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),r=a([t.subclass("esri.layers.mixins.ExportImageParameters")],r)}(t.declared(s));return y});