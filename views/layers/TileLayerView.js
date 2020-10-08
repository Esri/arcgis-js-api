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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../renderers/support/clickToleranceUtils"],(function(e,r,t,i,a,n,o,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TileLayerView=void 0,r.TileLayerView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.fetchPopupFeatures=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var o,c,l,s=this;return t.__generator(this,(function(p){return o=this.layer,e?"tile"!==o.type?[2,n.reject(new i("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:o.type}))]:(c=this.get("view.scale"),l=o.allSublayers.toArray().filter((function(e){var r=0===e.minScale||c<=e.minScale,t=0===e.maxScale||c>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t})),[2,n.eachAlways(l.map((function(i){return t.__awaiter(s,void 0,void 0,(function(){var n,o,c,l;return t.__generator(this,(function(t){switch(t.label){case 0:return n=i.createQuery(),o=a.isSome(r)?r.event:null,c=u.calculateTolerance({renderer:i.renderer,event:o}),n.geometry=this.createFetchPopupFeaturesQueryGeometry(e,c),l=n,[4,i.popupTemplate.getRequiredFields()];case 1:return l.outFields=t.sent(),[4,i.queryFeatures(n)];case 2:return[2,t.sent().features]}}))}))}))).then((function(e){return[].concat.apply([],e.map((function(e){return e.value})).filter(Boolean))}))]):[2,n.reject(new i("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}))]}))}))},t.__decorate([o.property()],r.prototype,"layer",void 0),r=t.__decorate([o.subclass("esri.layers.mixins.TileLayerView")],r)}(e)}}));