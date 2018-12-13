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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/generatorHelper","../core/Accessor","../core/arrayUtils","../core/promiseUtils","../core/accessorSupport/decorators"],function(e,r,t,i,p,s,n,o,a,c,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i(r,e),r.prototype.fetchPopupFeatures=function(e){return this._fetchPopupFeaturesAsync(e)},r.prototype._fetchPopupFeaturesAsync=function(e){return s(this,void 0,void 0,function(){var r,t,i,p,s,o;return n(this,function(n){switch(n.label){case 0:return[4,this.when()];case 1:return n.sent(),[4,this._prepareFetchPopupFeatures(e)];case 2:return r=n.sent(),t=r.mapPoint,i=this._queryLayerPopupFeatures(r),p=c.resolve(r.clientOnlyGraphics),s=[p].concat(i),o=c.eachAlwaysValues(s).then(a.concatAll),[2,{promise:o,location:t,promises:s}]}})})},r.prototype._queryLayerPopupFeatures=function(e){var r=e.mapPoint;return e.layerViewsAndGraphics.map(function(e){var t=e.layerView,i=e.graphics;return t.fetchPopupFeatures(r,i)})},r.prototype._isValidPopupGraphic=function(e){return e&&!!e.getEffectivePopupTemplate()},r.prototype._prepareFetchPopupFeatures=function(e){return s(this,void 0,void 0,function(){var r,t,i,p,s,o,a;return n(this,function(n){switch(n.label){case 0:return[4,this._popupHitTestGraphics(e)];case 1:return r=n.sent(),t=r.clientGraphics,i=r.mapPoint,p=this._getFetchPopupLayerViews(),s=this._graphicsPerFetchPopupLayerView(t,p),o=s.layerViewsAndGraphics,a=s.clientOnlyGraphics,[2,{clientOnlyGraphics:a,layerViewsAndGraphics:o,mapPoint:i}]}})})},r.prototype._popupHitTestGraphics=function(e){return s(this,void 0,void 0,function(){var r,t,i,p,s=this;return n(this,function(n){switch(n.label){case 0:return[4,this.popupHitTest(e)];case 1:return r=n.sent(),t=r.results,i=r.mapPoint,p=t.map(function(e){return e.graphic}).filter(function(e){return s._isValidPopupGraphic(e)}),[2,{clientGraphics:p,mapPoint:i}]}})})},r.prototype._getFetchPopupLayerViews=function(){var e=this,r=[];return this.allLayerViews.forEach(function(t){e._isValidPopupLayerView(t)&&r.push(t)}),this._isValidPopupLayerView(this.graphicsView)&&r.push(this.graphicsView),r},r.prototype._isValidPopupLayerView=function(e){return e&&(!("layer"in e)||!e.suspended)&&"function"==typeof e.fetchPopupFeatures},r.prototype._graphicsPerFetchPopupLayerView=function(e,r){for(var t=[],i=new Map,p=(r.map(function(e){var r=[];return"layer"in e?i.set(e.layer,r):i.set(e.graphics,r),{layerView:e,graphics:r}})),s=0,n=e;s<n.length;s++){var o=n[s],a=i.get(o.layer)||null;a?a.push(o):t.push(o)}return{layerViewsAndGraphics:p,clientOnlyGraphics:t}},r=p([u.subclass("esri.views.PopupView")],r)}(u.declared(o))});