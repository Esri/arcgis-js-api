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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/generatorHelper","../core/Accessor","../core/arrayUtils","../core/asyncUtils","../core/maybe","../core/Promise","../core/promiseUtils","../core/accessorSupport/decorators"],function(e,r,t,i,p,s,n,a,o,u,c,l,h,y){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i(r,e),r.prototype.when=function(e,r){return this.inherited(arguments)},r.prototype.fetchPopupFeatures=function(e,r){return u.safeCast(this._fetchPopupFeaturesAsync(e,r))},r.prototype._fetchPopupFeaturesAsync=function(e,r){return s(this,void 0,void 0,function(){var t,i,p,s,a,u;return n(this,function(n){switch(n.label){case 0:return[4,this.when()];case 1:return n.sent(),[4,this._prepareFetchPopupFeatures(e,r)];case 2:return t=n.sent(),i=t.location,p=this._queryLayerPopupFeatures(t,r),s=h.resolve(t.clientOnlyGraphics),a=[s].concat(p),u=h.eachAlwaysValues(a).then(o.flatten),[2,{promise:u,location:i,promises:a}]}})})},r.prototype._queryLayerPopupFeatures=function(e,r){var t=e.queryArea;return e.layerViewsAndGraphics.map(function(e){var i=e.layerView,p=e.graphics,s={clientGraphics:p,signal:c.isSome(r)?r.signal:null,defaultPopupTemplateEnabled:!!c.isSome(r)&&!!r.defaultPopupTemplateEnabled};return i.fetchPopupFeatures(t,s)})},r.prototype._isValidPopupGraphic=function(e,r){return e&&!!e.getEffectivePopupTemplate(c.isSome(r)&&r.defaultPopupTemplateEnabled)},r.prototype._prepareFetchPopupFeatures=function(e,r){return s(this,void 0,void 0,function(){var t,i,p,s,a,o,u,c;return n(this,function(n){switch(n.label){case 0:return[4,this._popupHitTestGraphics(e,r)];case 1:return t=n.sent(),i=t.clientGraphics,p=t.queryArea,s=t.location,a=this._getFetchPopupLayerViews(),o=this._graphicsPerFetchPopupLayerView(i,a),u=o.layerViewsAndGraphics,c=o.clientOnlyGraphics,[2,{clientOnlyGraphics:c,layerViewsAndGraphics:u,queryArea:p,location:s}]}})})},r.prototype._popupHitTestGraphics=function(e,r){return s(this,void 0,void 0,function(){var t,i,p,s,a,o,u=this;return n(this,function(n){switch(n.label){case 0:return[4,this.popupHitTest(e)];case 1:return t=n.sent(),i=t.results,p=t.mapPoint,s=i.filter(function(e){return u._isValidPopupGraphic(e.graphic,r)}),a=s.length?s[0].mapPoint:null,o=s.map(function(e){return e.graphic}),[2,{clientGraphics:o,queryArea:p,location:p||a}]}})})},r.prototype._getFetchPopupLayerViews=function(){var e=this,r=[];return this.allLayerViews.forEach(function(t){e._isValidPopupLayerView(t)&&r.push(t)}),this._isValidPopupLayerView(this.graphicsView)&&r.push(this.graphicsView),r.reverse()},r.prototype._isValidPopupLayerView=function(e){return c.isSome(e)&&(!("layer"in e)||!e.suspended)&&"function"==typeof e.fetchPopupFeatures},r.prototype._graphicsPerFetchPopupLayerView=function(e,r){for(var t=[],i=new Map,p=(r.map(function(e){var r=[];return"layer"in e?i.set(e.layer,r):i.set(e.graphics,r),{layerView:e,graphics:r}})),s=0,n=e;s<n.length;s++){var a=n[s],o=i.get(a.layer)||null;o?o.push(a):t.push(a)}return{layerViewsAndGraphics:p,clientOnlyGraphics:t}},r=p([y.subclass("esri.views.PopupView")],r)}(y.declared(a,l))});