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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../layers/graphics/dehydratedFeatures","../../../../tasks/operations/query"],function(e,r,t,u,a,o,n,s){function y(e){switch(e.source.type){case"feature-layer":return new i({layer:e});case"memory":case"csv":case"geojson":return new p({layer:e});case"stream-layer":throw new Error("Tile based queries unsupported for stream sources")}}Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"queryFeaturesDehydrated",{get:function(){var e=this,r=this.layer.capabilities,t=r&&r.query;if(t&&t.supportsFormatPBF){var u={type:"dehydrated",applyTransform:!0,useWorker:!0,maxStringAttributeLength:1024};return function(r,t){return s.executeQueryPBF(e.layer.parsedUrl,r,u,t).then(function(e){return e.data})}}return function(r,t){return s.executeQuery(e.layer.parsedUrl,r,t).then(function(e){return n.fromFeatureSetJSON(e.data)})}},enumerable:!0,configurable:!0}),r.prototype.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},u([o.property({constructOnly:!0})],r.prototype,"layer",void 0),u([o.property({readOnly:!0,dependsOn:["layer.capabilities.query.supportsFormatPBF"]})],r.prototype,"queryFeaturesDehydrated",null),r=u([o.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],r)}(o.declared(a)),p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.queryFeaturesDehydrated=function(e,r){var t=this;return this.source.queryFeaturesJSON(e,r).then(n.fromFeatureSetJSON,function(u){if(u&&"query-features-json:unsupported"===u.name)return t.source.queryFeatures(e,r);throw u})},r.prototype.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},u([o.property({constructOnly:!0})],r.prototype,"layer",void 0),u([o.aliasOf("layer.source")],r.prototype,"source",void 0),r=u([o.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],r)}(o.declared(a));r.createFeatureTileQuery3D=y});