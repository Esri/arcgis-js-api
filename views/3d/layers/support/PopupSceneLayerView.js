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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/SetUtils","../../../../core/accessorSupport/decorators","../../../../layers/support/fieldUtils","../../../layers/support/popupUtils"],(function(e,t,r,p,o,s,u,n,i,a,c,l,h){Object.defineProperty(t,"__esModule",{value:!0}),t.PopupSceneLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype._validateFetchPopupFeatures=function(e){var t=this.layer;return t.popupEnabled?h.getFetchPopupTemplate(t,e)?void 0:new u("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new u("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t})},t.prototype.prepareFetchPopupFeatures=function(e){return s(this,void 0,void 0,(function(){return o(this,(function(e){return[2]}))}))},t.prototype.fetchPopupFeatures=function(e,t){return s(this,void 0,void 0,(function(){var e,r,p,s,u,c,d,f,y,v,F;return o(this,(function(o){switch(o.label){case 0:return(e=this._validateFetchPopupFeatures(t))?[2,i.reject(e)]:(r=n.isSome(t)?t.clientGraphics:null)&&0!==r.length?(p=[],s=[],c=l.unpackFieldNames,d=[this.layer.fields],[4,h.getRequiredFields(this.layer,h.getFetchPopupTemplate(this.layer,t))]):[2,i.resolve([])];case 1:return u=c.apply(void 0,d.concat([o.sent()])),[4,this.prepareFetchPopupFeatures(u)];case 2:for(o.sent(),f=new Set,y=0,v=r;y<v.length;y++)F=v[y],l.populateMissingFields(u,F,f)?s.push(F):p.push(F);return 0===s.length?[2,i.resolve(p)]:[2,this.whenGraphicAttributes(s,a.valuesOfSet(f)).catch((function(){return s})).then((function(e){return p.concat(e)}))]}}))}))},t=p([c.subclass("esri.views.3d.layers.support.PopupSceneLayerView")],t)}(c.declared(e))}}));