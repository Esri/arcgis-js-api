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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../TimeExtent","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Point","../../geometry/support/jsonUtils","../../layers/support/MosaicRule","../../layers/support/RasterFunction"],(function(e,t,r,o,n,i,p,l,u,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.geometry=null,t.renderingRules=null,t.pixelSize=null,t.returnGeometry=!0,t.returnCatalogItems=!0,t.returnPixelValues=!0,t.maxItemCount=null,t.timeExtent=null,t.raster=void 0,t.viewId=void 0,t}return r.__extends(t,e),t.prototype.writeGeometry=function(e,t,r){null!=e&&(t.geometryType=l.getJsonType(e),t[r]=JSON.stringify(e.toJSON()))},Object.defineProperty(t.prototype,"mosaicRule",{set:function(e){var t=e;t&&t.mosaicMethod&&(t=u.fromJSON(r.__assign(r.__assign({},t.toJSON()),{mosaicMethod:t.mosaicMethod,mosaicOperation:t.mosaicOperation}))),this._set("mosaicRule",t)},enumerable:!0,configurable:!0}),t.prototype.writeMosaicRule=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},Object.defineProperty(t.prototype,"renderingRule",{set:function(e){var t=e;t&&t.rasterFunction&&(t=s.fromJSON(r.__assign(r.__assign({},t.toJSON()),{rasterFunction:t.rasterFunction,rasterFunctionArguments:t.rasterFunctionArguments}))),this._set("renderingRule",t)},enumerable:!0,configurable:!0}),t.prototype.writeRenderingRule=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},t.prototype.writeRenderingRules=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.map((function(e){return e.toJSON()}))))},t.prototype.writePixelSize=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},t.prototype.writeTimeExtent=function(e,t,r){if(null!=e){var o=e.start?e.start.getTime():null,n=e.end?e.end.getTime():null;t[r]=null!=o?null!=n?o+","+n:""+o:null}},r.__decorate([i.property({json:{write:!0}})],t.prototype,"geometry",void 0),r.__decorate([i.writer("geometry")],t.prototype,"writeGeometry",null),r.__decorate([i.property({type:u,json:{write:!0}})],t.prototype,"mosaicRule",null),r.__decorate([i.writer("mosaicRule")],t.prototype,"writeMosaicRule",null),r.__decorate([i.property({type:s,json:{write:!0}})],t.prototype,"renderingRule",null),r.__decorate([i.writer("renderingRule")],t.prototype,"writeRenderingRule",null),r.__decorate([i.property({type:[s],json:{write:!0}})],t.prototype,"renderingRules",void 0),r.__decorate([i.writer("renderingRules")],t.prototype,"writeRenderingRules",null),r.__decorate([i.property({type:p,json:{write:!0}})],t.prototype,"pixelSize",void 0),r.__decorate([i.writer("pixelSize")],t.prototype,"writePixelSize",null),r.__decorate([i.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),r.__decorate([i.property({type:Boolean,json:{write:!0}})],t.prototype,"returnCatalogItems",void 0),r.__decorate([i.property({type:Boolean,json:{write:!0}})],t.prototype,"returnPixelValues",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"maxItemCount",void 0),r.__decorate([i.property({type:o,json:{write:{target:"time"}}})],t.prototype,"timeExtent",void 0),r.__decorate([i.writer("timeExtent")],t.prototype,"writeTimeExtent",null),r.__decorate([i.property({json:{write:!0}})],t.prototype,"raster",void 0),r.__decorate([i.property({json:{write:!0}})],t.prototype,"viewId",void 0),t=r.__decorate([i.subclass("esri.tasks.support.ImageServiceIdentifyParameters")],t)}(n.JSONSupport)}));