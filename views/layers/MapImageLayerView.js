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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/asyncUtils","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","./RefreshableLayerView"],function(e,r,t,a,o,n,u,c,i,p,l,s){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){return n(this,void 0,void 0,function(){var r,t,a,n=this;return o(this,function(o){return r=this.layer,e?(t=this.get("view.scale"),a=r.allSublayers.toArray().filter(function(e){var r=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&a}),[2,i.eachAlways(a.map(function(r){return u.safeCast(r.popupTemplate.getRequiredFields()).then(function(t){var a=r.createQuery(),o=l.calculateTolerance(r.renderer);return a.geometry=n.createFetchPopupFeaturesQueryGeometry(e,o),a.outFields=t,r.queryFeatures(a).then(function(e){return e.features})})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})]):[2,i.reject(new c("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))]})})},a([p.property()],r.prototype,"layer",void 0),r=a([p.subclass("esri.views.layers.MapImageLayerView")],r)}(p.declared(s))});