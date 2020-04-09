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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils"],(function(e,r,t,o,n,a,i,u,c,l,p){Object.defineProperty(r,"__esModule",{value:!0}),r.TileLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e,r){return a(this,void 0,void 0,(function(){var t,o,l,s=this;return n(this,(function(y){return t=this.layer,e?"tile"!==t.type?[2,c.reject(new i("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:t.type}))]:(o=this.get("view.scale"),l=t.allSublayers.toArray().filter((function(e){var r=0===e.minScale||o<=e.minScale,t=0===e.maxScale||o>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t})),[2,c.eachAlways(l.map((function(t){return a(s,void 0,void 0,(function(){var o,a,i,c;return n(this,(function(n){switch(n.label){case 0:return o=t.createQuery(),a=u.isSome(r)?r.event:null,i=p.calculateTolerance({renderer:t.renderer,event:a}),o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),c=o,[4,t.popupTemplate.getRequiredFields()];case 1:return c.outFields=n.sent(),[4,t.queryFeatures(o)];case 2:return[2,n.sent().features]}}))}))}))).then((function(e){return[].concat.apply([],e.map((function(e){return e.value})).filter(Boolean))}))]):[2,c.reject(new i("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))]}))}))},o([l.property()],r.prototype,"layer",void 0),r=o([l.subclass("esri.layers.mixins.TileLayerView")],r)}(l.declared(e))}}));