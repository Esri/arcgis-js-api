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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","./RefreshableLayerView","@dojo/framework/shim/Set"],function(e,r,t,a,o,u,c,s,n,i,l){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){return u(this,void 0,void 0,function(){var r,t,a,n,l,p,h=this;return o(this,function(f){switch(f.label){case 0:return r=this.layer,e?(t=this.get("view.scale"),a=[],n=function(e){var r=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;e.visible&&r&&o&&(e.sublayers?e.sublayers.forEach(n):e.popupTemplate&&e.popupEnabled&&a.push(e))},r.sublayers.forEach(n),l=a.map(function(r){return u(h,void 0,void 0,function(){var t,a,u,c;return o(this,function(o){switch(o.label){case 0:return[4,r.popupTemplate.getRequiredFields()];case 1:return t=o.sent(),a=r.createQuery(),u=i.calculateTolerance(r.renderer),a.geometry=this.createFetchPopupFeaturesQueryGeometry(e,u),a.outFields=t,[4,r.queryFeatures(a)];case 2:return c=o.sent(),[2,c.features]}})})}),[4,s.eachAlways(l)]):[2,s.reject(new c("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];case 1:return p=f.sent(),[2,p.reduce(function(e,r){return e.concat(r.value)},[]).filter(function(e){return null!=e})]}})})},a([n.property()],r.prototype,"layer",void 0),r=a([n.subclass("esri.views.layers.MapImageLayerView")],r)}(n.declared(l))});