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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../TimeExtent","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Point","../../geometry/support/jsonUtils","../../layers/support/MosaicRule","../../layers/support/RasterFunction"],(function(e,t,r,o,n,i,p,l,u,s,y,a){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.geometry=null,t.renderingRules=null,t.pixelSize=null,t.returnGeometry=!0,t.returnCatalogItems=!0,t.returnPixelValues=!0,t.maxItemCount=null,t.timeExtent=null,t.raster=void 0,t.viewId=void 0,t}return r(t,e),t.prototype.writeGeometry=function(e,t,r){null!=e&&(t.geometryType=s.getJsonType(e),t[r]=JSON.stringify(e.toJSON()))},Object.defineProperty(t.prototype,"mosaicRule",{set:function(e){var t=e;t&&t.mosaicMethod&&(t=y.fromJSON(n({},t.toJSON(),{mosaicMethod:t.mosaicMethod,mosaicOperation:t.mosaicOperation}))),this._set("mosaicRule",t)},enumerable:!0,configurable:!0}),t.prototype.writeMosaicRule=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},Object.defineProperty(t.prototype,"renderingRule",{set:function(e){var t=e;t&&t.rasterFunction&&(t=a.fromJSON(n({},t.toJSON(),{rasterFunction:t.rasterFunction,rasterFunctionArguments:t.rasterFunctionArguments}))),this._set("renderingRule",t)},enumerable:!0,configurable:!0}),t.prototype.writeRenderingRule=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},t.prototype.writeRenderingRules=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.map((function(e){return e.toJSON()}))))},t.prototype.writePixelSize=function(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))},t.prototype.writeTimeExtent=function(e,t,r){if(null!=e){var o=e.start?e.start.getTime():null,n=e.end?e.end.getTime():null;t[r]=null!=o?null!=n?o+","+n:""+o:null}},o([l.property({json:{write:!0}})],t.prototype,"geometry",void 0),o([l.writer("geometry")],t.prototype,"writeGeometry",null),o([l.property({type:y,json:{write:!0}})],t.prototype,"mosaicRule",null),o([l.writer("mosaicRule")],t.prototype,"writeMosaicRule",null),o([l.property({type:a,json:{write:!0}})],t.prototype,"renderingRule",null),o([l.writer("renderingRule")],t.prototype,"writeRenderingRule",null),o([l.property({type:[a],json:{write:!0}})],t.prototype,"renderingRules",void 0),o([l.writer("renderingRules")],t.prototype,"writeRenderingRules",null),o([l.property({type:u,json:{write:!0}})],t.prototype,"pixelSize",void 0),o([l.writer("pixelSize")],t.prototype,"writePixelSize",null),o([l.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),o([l.property({type:Boolean,json:{write:!0}})],t.prototype,"returnCatalogItems",void 0),o([l.property({type:Boolean,json:{write:!0}})],t.prototype,"returnPixelValues",void 0),o([l.property({type:Number,json:{write:!0}})],t.prototype,"maxItemCount",void 0),o([l.property({type:i,json:{write:{target:"time"}}})],t.prototype,"timeExtent",void 0),o([l.writer("timeExtent")],t.prototype,"writeTimeExtent",null),o([l.property({json:{write:!0}})],t.prototype,"raster",void 0),o([l.property({json:{write:!0}})],t.prototype,"viewId",void 0),t=o([l.subclass("esri.tasks.support.ImageServiceIdentifyParameters")],t)}(l.declared(p.JSONSupport))}));