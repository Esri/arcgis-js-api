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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils","./RefreshableLayerView"],function(e,r,t,a,o,u,l,i,c){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){var r=this,t=this.layer;if(!e)return u.reject(new o("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));if("tile"!==t.type)return u.reject(new o("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}));var a=this.get("view.scale"),l=t.allSublayers.toArray().filter(function(e){var r=0===e.minScale||a<=e.minScale,t=0===e.maxScale||a>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t});return u.eachAlways(l.map(function(t){var a=t.createQuery(),o=i.calculateTolerance(t.renderer);return a.geometry=r.createFetchPopupFeaturesQueryGeometry(e,o),a.outFields=t.get("popupTemplate.requiredFields"),t.queryFeatures(a).then(function(e){return e.features})})).then(function(e){return[].concat.apply([],e.map(function(e){return e.value}).filter(Boolean))})},a([l.property()],r.prototype,"layer",void 0),r=a([l.subclass("esri.views.layers.TileLayerView")],r)}(l.declared(c))});