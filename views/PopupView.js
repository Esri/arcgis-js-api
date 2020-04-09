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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/generatorHelper","../core/arrayUtils","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators"],(function(e,r,t,i,p,a,s,n,o,u,c){Object.defineProperty(r,"__esModule",{value:!0}),r.PopupView=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return i(r,e),r.prototype.fetchPopupFeatures=function(e,r){return this._fetchPopupFeaturesAsync(e,r)},r.prototype._fetchPopupFeaturesAsync=function(e,r){return a(this,void 0,void 0,(function(){var t,i,p,a,o,c,l,h,y;return s(this,(function(s){switch(s.label){case 0:return[4,this.when()];case 1:return s.sent(),[4,this._prepareFetchPopupFeatures(e,r)];case 2:return t=s.sent(),i=t.location,p=t.queryArea,a=t.layerViewsAndGraphics,o=t.clientOnlyGraphics,c=u.resolve(o),l=this._queryLayerPopupFeatures({queryArea:p,layerViewsAndGraphics:a,options:r}),h=l.map((function(e){return e.promise})),y=u.eachAlwaysValues([c].concat(h)).then(n.flatten),[2,{location:i,clientOnlyGraphics:o,allGraphicsPromise:y,promisesPerLayerView:l}]}}))}))},r.prototype._queryLayerPopupFeatures=function(e){var r=e.queryArea,t=e.layerViewsAndGraphics,i=e.options;return t.map((function(e){var t=e.layerView,p={clientGraphics:e.graphics,event:o.isSome(i)?i.event:null,signal:o.isSome(i)?i.signal:null,defaultPopupTemplateEnabled:!!o.isSome(i)&&!!i.defaultPopupTemplateEnabled},a=t.fetchPopupFeatures(r,p);return{layerView:t,promise:a}}))},r.prototype._isValidPopupGraphic=function(e,r){return e&&!!e.getEffectivePopupTemplate(o.isSome(r)&&r.defaultPopupTemplateEnabled)},r.prototype._prepareFetchPopupFeatures=function(e,r){return a(this,void 0,void 0,(function(){var t,i,p,a,n,o,u;return s(this,(function(s){switch(s.label){case 0:return[4,this._popupHitTestGraphics(e,r)];case 1:return t=s.sent(),i=t.clientGraphics,p=t.queryArea,a=t.location,n=this._getFetchPopupLayerViews(),o=this._graphicsPerFetchPopupLayerView(i,n),u=o.layerViewsAndGraphics,[2,{clientOnlyGraphics:o.clientOnlyGraphics,layerViewsAndGraphics:u,queryArea:p,location:a}]}}))}))},r.prototype._popupHitTestGraphics=function(e,r){return a(this,void 0,void 0,(function(){var t,i,p,a,n,o=this;return s(this,(function(s){switch(s.label){case 0:return[4,this.popupHitTest(e)];case 1:return t=s.sent(),i=t.results,p=t.mapPoint,a=i.filter((function(e){return o._isValidPopupGraphic(e.graphic,r)})),n=a.length?a[0].mapPoint:null,[2,{clientGraphics:a.map((function(e){return e.graphic})),queryArea:p,location:p||n}]}}))}))},r.prototype._getFetchPopupLayerViews=function(){var e=this,r=[];return this.allLayerViews.forEach((function(t){e._isValidPopupLayerView(t)&&r.push(t)})),o.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&r.push(this.graphicsView),r.reverse()},r.prototype._isValidPopupLayerView=function(e){return o.isSome(e)&&(!("layer"in e)||!e.suspended)&&"fetchPopupFeatures"in e},r.prototype._graphicsPerFetchPopupLayerView=function(e,r){for(var t=[],i=new Map,p=r.map((function(e){var r=[];return"layer"in e?i.set(e.layer,r):i.set(e.graphics,r),{layerView:e,graphics:r}})),a=0,s=e;a<s.length;a++){var n=s[a],o=i.get(n.layer)||null;o?o.push(n):t.push(n)}return{layerViewsAndGraphics:p,clientOnlyGraphics:t}},r=p([c.subclass("esri.views.PopupView")],r)}(c.declared(e))}}));