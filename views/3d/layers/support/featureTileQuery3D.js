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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../layers/graphics/dehydratedFeatures","../../../../tasks/operations/query"],function(e,r,t,u,a,s,o,n){function i(e){switch(e.source.type){case"feature-layer":return new p({layer:e});case"memory":case"csv":return new y({layer:e});case"stream-layer":throw new Error("Tile based queries unsupported for stream sources")}}Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"queryFeaturesDehydrated",{get:function(){var e=this,r=this.layer.capabilities,t=r&&r.query;if(t&&t.supportsFormatPBF){var u={type:"dehydrated",applyTransform:!0,useWorker:!0,maxStringAttributeLength:1024};return function(r,t){return n.executeQueryPBF(e.layer.parsedUrl,r,u,t).then(function(e){return e.data})}}return function(r,t){return n.executeQuery(e.layer.parsedUrl,r,t).then(function(e){return o.fromFeatureSetJSON(e.data)})}},enumerable:!0,configurable:!0}),u([s.property({constructOnly:!0})],r.prototype,"layer",void 0),u([s.property({readOnly:!0,dependsOn:["layer.capabilities.query.supportsFormatPBF"]})],r.prototype,"queryFeaturesDehydrated",null),r=u([s.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],r)}(s.declared(a)),y=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.queryFeaturesDehydrated=function(e,r){var t=this;return this.source.queryFeaturesJSON(e).then(o.fromFeatureSetJSON,function(r){if(r&&"query-features-json:unsupported"===r.name)return t.source.queryFeatures(e);throw r})},u([s.property({constructOnly:!0})],r.prototype,"layer",void 0),u([s.aliasOf("layer.source")],r.prototype,"source",void 0),r=u([s.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],r)}(s.declared(a));r.createFeatureTileQuery3D=i});