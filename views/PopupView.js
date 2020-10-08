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

define(["require","exports","tslib","../core/arrayUtils","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators"],(function(e,r,t,i,a,n,p){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PopupView=void 0,r.PopupView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.fetchPopupFeatures=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var a,p,s,o,u,c,l,h,y;return t.__generator(this,(function(f){switch(f.label){case 0:return[4,this.when()];case 1:return f.sent(),[4,this._prepareFetchPopupFeatures(e,r)];case 2:return a=f.sent(),p=a.location,s=a.queryArea,o=a.layerViewsAndGraphics,u=a.clientOnlyGraphics,c=n.resolve(u),l=this._queryLayerPopupFeatures({queryArea:s,layerViewsAndGraphics:o,options:r}),h=l.map((function(e){return e.promise})),y=n.eachAlwaysValues(t.__spreadArrays([c],h)).then(i.flatten),[2,{location:p,clientOnlyGraphics:u,allGraphicsPromise:y,promisesPerLayerView:l}]}}))}))},r.prototype._queryLayerPopupFeatures=function(e){var r=e.queryArea,t=e.layerViewsAndGraphics,i=e.options;return t.map((function(e){var t=e.layerView,n={clientGraphics:e.graphics,event:a.isSome(i)?i.event:null,signal:a.isSome(i)?i.signal:null,defaultPopupTemplateEnabled:!!a.isSome(i)&&!!i.defaultPopupTemplateEnabled},p=t.fetchPopupFeatures(r,n);return{layerView:t,promise:p}}))},r.prototype._isValidPopupGraphic=function(e,r){return e&&!!e.getEffectivePopupTemplate(a.isSome(r)&&r.defaultPopupTemplateEnabled)},r.prototype._prepareFetchPopupFeatures=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var i,a,n,p,s,o,u;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,this._popupHitTestGraphics(e,r)];case 1:return i=t.sent(),a=i.clientGraphics,n=i.queryArea,p=i.location,s=this._getFetchPopupLayerViews(),o=this._graphicsPerFetchPopupLayerView(a,s),u=o.layerViewsAndGraphics,[2,{clientOnlyGraphics:o.clientOnlyGraphics,layerViewsAndGraphics:u,queryArea:n,location:p}]}}))}))},r.prototype._popupHitTestGraphics=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){var i,a,n,p,s,o=this;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,this.popupHitTest(e)];case 1:return i=t.sent(),a=i.results,n=i.mapPoint,p=a.filter((function(e){return o._isValidPopupGraphic(e.graphic,r)})),s=p.length?p[0].mapPoint:null,[2,{clientGraphics:p.map((function(e){return e.graphic})),queryArea:n,location:n||s}]}}))}))},r.prototype._getFetchPopupLayerViews=function(){var e=this,r=[];return this.allLayerViews.forEach((function(t){e._isValidPopupLayerView(t)&&r.push(t)})),a.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&r.push(this.graphicsView),r.reverse()},r.prototype._isValidPopupLayerView=function(e){return a.isSome(e)&&(!("layer"in e)||!e.suspended)&&"fetchPopupFeatures"in e},r.prototype._graphicsPerFetchPopupLayerView=function(e,r){for(var t=[],i=new Map,a=r.map((function(e){var r=[];return"layer"in e?i.set(e.layer,r):i.set(e.graphics,r),{layerView:e,graphics:r}})),n=0,p=e;n<p.length;n++){var s=p[n],o=i.get(s.layer)||null;o?o.push(s):t.push(s)}return{layerViewsAndGraphics:a,clientOnlyGraphics:t}},r=t.__decorate([p.subclass("esri.views.PopupView")],r)}(e)}}));