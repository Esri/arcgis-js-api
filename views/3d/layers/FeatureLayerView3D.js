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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Error","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../../layers/FeatureLayer","../../../layers/graphics/controllers/SnapshotController","../../../layers/graphics/controllers/support/controllerUtils","./GraphicLayerView3DBase","../../layers/RefreshableLayerView"],function(e,r,t,a,o,n,i,u,s,l,c,p,m){return function(e){function r(r){var t=e.call(this)||this;return t.labelingEnabled=r.layer instanceof s,t}return t(r,e),p=r,r.prototype.initialize=function(){this.addResolvingPromise(this.validateMaximumFeatureCount())},r.prototype.createController=function(){var e=this;return this.layer.createGraphicsController({layerView:this,options:{maxPageSize:300,extent:this.view.clippingArea}}).then(function(r){return r instanceof l&&e._eventHandles.push(i.whenFalseOnce(e,"suspended",function(){r.startup()})),r}).catch(function(e){return n.reject(new o("featurelayerview3d:create-controller",e.message,{error:e}))})},r.prototype.validateMaximumFeatureCount=function(){return p.maximumFeatureCount<0||!this.layer.url?n.resolve():this.layer.queryFeatureCount().then(function(e){if(e>p.maximumFeatureCount)throw new o("featurelayerview3d:maximum-feature-count-exceeded","The maximum number of allowed features (${maximumFeatureCount}) has been exceeded (layer has ${numberOfFeatures} features)",{maximumFeatureCount:p.maximumFeatureCount,numberOfFeatures:e})})},r.prototype.doRefresh=function(){!this.suspended&&c.isRefreshable(this.controller)&&this.controller.refresh()},r.maximumFeatureCount=-1,a([u.property()],r.prototype,"controller",void 0),r=p=a([u.subclass("esri.views.3d.layers.FeatureLayerView3D")],r);var p}(u.declared(p,m))});