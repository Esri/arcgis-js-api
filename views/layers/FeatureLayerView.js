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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/arrayUtils","../../core/Error","../../core/Logger","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","../../support/arcadeUtils","../../support/graphicUtils","./RefreshableLayerView","./support/popupUtils"],function(e,r,t,u,o,a,n,i,p,s,c,l,y,f){var h=n.getLogger("esri.views.layers.FeatureLayerView");return function(e){function r(r){var t=e.call(this,r)||this;return t.layer=null,t}return t(r,e),Object.defineProperty(r.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(e){h.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!1},enumerable:!0,configurable:!0}),r.prototype.highlight=function(e,r){return this.inherited(arguments)},r.prototype.queryFeatures=function(e){return this.inherited(arguments)},r.prototype.queryObjectIds=function(e){return this.inherited(arguments)},r.prototype.queryFeatureCount=function(e){return this.inherited(arguments)},r.prototype.queryExtent=function(e){return this.inherited(arguments)},r.prototype.fetchPopupFeatures=function(e,r){var t=this._validateFetchPopupFeatures();if(t)return i.reject(t);var u=this._fetchClientPopupFeatures(r);if(!e)return u;var a=this._fetchServicePopupFeatures(e,r);return i.eachAlwaysValues([u,a]).then(o.concatAll)},r.prototype._validateFetchPopupFeatures=function(){var e=this.layer,r=e.popupEnabled,t=e.popupTemplate;return r?t?void 0:new a("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e}):new a("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})},r.prototype._fetchClientPopupFeatures=function(e){if(!e||0===e.length)return i.resolve([]);for(var r=[],t=[],u=this.layer,o=c.hasGeometryOperations(u.popupTemplate),a=this._createPopupQuery(),n=0,p=e;n<p.length;n++){var s=p[n];o||!l.hasRequiredFields(s,a.outFields)?t.push(s):r.push(s)}return 0===t.length?i.resolve(r):(a.objectIds=t.map(function(e){return e.attributes[u.objectIdField]}),u.queryFeatures(a).then(function(e){return r.concat(e.features)}).catch(function(){return t}))},r.prototype._fetchServicePopupFeatures=function(e,r){var t=this._createPopupQuery(),u=this.layer,o=u.renderer,a=s.calculateTolerance(o);t.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a);for(var n=new Set,i=u.objectIdField,p=0,c=r;p<c.length;p++){var l=c[p];n.add(l.attributes[i])}return u.queryFeatures(t).then(function(e){return e.features.filter(function(e){return!n.has(e.attributes[i])})})},r.prototype._createPopupQuery=function(){var e=this.layer,r=e.createQuery();return r.returnGeometry=!0,r.returnZ=!0,r.returnM=!0,r.outFields=f.getRequiredFields(this.layer),r.outSpatialReference=this.getViewSpatialReference(),r},u([p.property()],r.prototype,"layer",void 0),u([p.property({type:Number})],r.prototype,"maximumNumberOfFeatures",null),u([p.property({readOnly:!0,type:Boolean})],r.prototype,"maximumNumberOfFeaturesExceeded",null),r=u([p.subclass("esri.views.layers.FeatureLayerView")],r)}(p.declared(y))});