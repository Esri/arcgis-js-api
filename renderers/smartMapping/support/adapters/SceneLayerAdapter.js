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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/promiseUtils","../../../../core/Error","./LayerAdapter","./FeatureLayerAdapter","../../../../core/accessorSupport/decorators"],function(e,r,t,a,o,n,p,u,s){var i=function(e){function r(r){e.call(this),this._layer=r.layer}return t(r,e),r.prototype.getField=function(e){return this._layer.getField(e)},r.prototype.getFieldUsageInfo=function(e){var r=this._layer,t=r.getField(e);return t?r.getFieldUsageInfo(e):null},r.prototype.queryStatistics=function(e){return this._featureLayerAdapter?this._featureLayerAdapter.queryStatistics(e):o.reject(new n("scene-layer-adapter:not-supported","SceneLayer without companion FeatureLayer does not support statistics query"))},r.prototype.queryFeatureCount=function(e){return this._featureLayerAdapter?this._featureLayerAdapter.queryFeatureCount(e):o.reject(new n("scene-layer-adapter:not-supported","SceneLayer without companion FeatureLayer does not support count query"))},r.prototype.generateRenderer=function(e){return this._featureLayerAdapter?this._featureLayerAdapter.generateRenderer(e):o.reject(new n("scene-layer-adapter:not-supported","SceneLayer without companion FeatureLayer does not support generateRenderer operation"))},r.prototype.getAllFeatures=function(e){return this._featureLayerAdapter?this._featureLayerAdapter.getAllFeatures(e):o.reject(new n("scene-layer-adapter:not-supported","SceneLayer without companion FeatureLayer is not supported"))},r.prototype.load=function(){var e=this,r=this._layer,t=r.load().then(function(){var t=r.companionFeatureLayer;if(t){e._featureLayerAdapter=new u({layer:t});var a=e._featureLayerAdapter.load().then(function(){e.geometryType=e._featureLayerAdapter.geometryType,e.objectIdField=e._featureLayerAdapter.objectIdField,e.supportsSQLExpression=e._featureLayerAdapter.supportsSQLExpression,e.hasLocalSource=e._featureLayerAdapter.hasLocalSource});return a}e.geometryType=r.geometryType,e.objectIdField=r.objectIdField,e.supportsSQLExpression=!1,e.hasLocalSource=!1});return this.addResolvingPromise(t),this},r=a([s.subclass()],r)}(s.declared(p));return i});