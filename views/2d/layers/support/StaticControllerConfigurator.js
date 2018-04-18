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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators"],function(e,r,o,t,i,s,n,c){function a(e){return e&&"esri.layers.graphics.sources.CSVSource"===e.declaredClass}return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.updateControllerConfiguration=function(){var e=this,r=this.layerView.layer;return a(r.source)?n.resolve().then(function(){e._set("controllerConfiguration",{type:"memory",processing:r.processing&&r.processing.toWorker()||null})}):this._checkSupport().then(function(){e._set("controllerConfiguration",{type:"on-demand",gdbVersion:r.gdbVersion,historicMoment:r.historicMoment&&r.historicMoment.getTime(),processing:r.processing&&r.processing.toWorker()||null})})},r.prototype._checkSupport=function(){var e=this;return this.layerView.layer.source.parsedUrl?this.layerView.layer.when(function(){e._verifyCapabilities()}):n.reject()},r.prototype._verifyCapabilities=function(){if(!this.layerView.layer.capabilities.operations.supportsQuery)throw new s("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:this.layerView.layer})},t([c.property()],r.prototype,"layerView",void 0),t([c.property({readOnly:!0})],r.prototype,"controllerConfiguration",void 0),r=t([c.subclass("esri.views.2d.layers.support.StaticControllerConfigurator")],r)}(c.declared(i))});