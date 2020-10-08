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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../layers/graphics/dehydratedFeatures","../../../../tasks/operations/query","../../support/PBFDecoder"],(function(e,r,t,o,u,a,s,n,i,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createFeatureTileQuery3D=void 0;var y=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),Object.defineProperty(r.prototype,"queryFeaturesDehydrated",{get:function(){var e,r,t=this,o=this.layer.capabilities,s=o&&o.query;if(s&&s.supportsFormatPBF){u.isNone(this._decoder)&&(this._decoder=new c.PBFDecoder(this.scheduler));var y={sourceSpatialReference:null!==(r=null===(e=this.layer.spatialReference)||void 0===e?void 0:e.toJSON())&&void 0!==r?r:null,applyTransform:!0,maxStringAttributeLength:1024};return function(e,r){return i.runQuery(t.layer.parsedUrl,e,"pbf",r).then((function(e){return a.throwIfAborted(r),u.isSome(t._decoder)?t._decoder.invoke({buffer:e.data,options:y}):a.reject(a.createAbortError())}))}}return function(e,r){return i.executeQuery(t.layer.parsedUrl,e,t.layer.spatialReference,r).then((function(e){return n.fromFeatureSetJSON(e.data)}))}},enumerable:!1,configurable:!0}),r.prototype.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},r.prototype.destroy=function(){this._decoder=u.destroyMaybe(this._decoder)},t.__decorate([s.property({constructOnly:!0})],r.prototype,"layer",void 0),t.__decorate([s.property({constructOnly:!0})],r.prototype,"scheduler",void 0),t.__decorate([s.property({readOnly:!0,dependsOn:["layer.capabilities.query.supportsFormatPBF"]})],r.prototype,"queryFeaturesDehydrated",null),r=t.__decorate([s.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],r)}(o),p=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.queryFeaturesDehydrated=function(e,r){return this.layer.queryFeatures(e,r)},t.__decorate([s.property({constructOnly:!0})],r.prototype,"layer",void 0),r=t.__decorate([s.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],r)}(o),l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.destroy=function(){},r.prototype.queryFeaturesDehydrated=function(e,r){var t=this;return this.source.queryFeaturesJSON(e,r).then(n.fromFeatureSetJSON,(function(o){if(o&&"query-features-json:unsupported"===o.name)return t.layer.queryFeatures(e,r);throw o}))},r.prototype.queryFeatureCount=function(e,r){return this.layer.queryFeatureCount(e,r)},t.__decorate([s.property({constructOnly:!0})],r.prototype,"layer",void 0),t.__decorate([s.aliasOf("layer.source")],r.prototype,"source",void 0),r=t.__decorate([s.subclass("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],r)}(o);r.createFeatureTileQuery3D=function(e,r){switch(e.source.type){case"feature-layer":return new y({layer:e,scheduler:r});case"memory":case"csv":case"geojson":return new l({layer:e});case"ogc-feature":return new p({layer:e});case"stream-layer":throw new Error("Tile based queries unsupported for stream sources")}}}));