// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../layers/FeatureLayer","./GraphicLayerView3DBase","../../../layers/graphics/controllers/SnapshotController","../../../core/watchUtils","../../../core/Error","../../../core/promiseUtils"],function(e,r,t,a,n,o,u,i,s,l,c){var m=300,p=d=function(e){function r(r){var t=e.call(this)||this;return t.labelingEnabled=r.layer instanceof o,t}return t(r,e),r.prototype.initialize=function(){this.addResolvingPromise(this.validateMaximumFeatureCount())},r.prototype.createController=function(){var e=this;return this.layer.createGraphicsController({layerView:this,options:{maxPageSize:m,extent:this.view.clippingArea}}).then(function(r){return r instanceof i&&e._eventHandles.push(s.whenFalseOnce(e,"suspended",function(){r.startup()})),r}).otherwise(function(e){return c.reject(new l("featurelayerview3d:create-controller",e.message))})},r.prototype.validateMaximumFeatureCount=function(){return d.maximumFeatureCount<0||!this.layer.url?c.resolve():this.layer.queryFeatureCount().then(function(e){if(e>d.maximumFeatureCount)throw new l("featurelayerview3d:maximum-feature-count-exceeded","The maximum number of allowed features (${maximumFeatureCount}) has been exceeded (layer has ${numberOfFeatures} features)",{maximumFeatureCount:d.maximumFeatureCount,numberOfFeatures:e})})},r}(n.declared(u));p.maximumFeatureCount=-1,a([n.property()],p.prototype,"controller",void 0),p=d=a([n.subclass("esri.views.3d.layers.FeatureLayerView3D")],p);var d;return p});