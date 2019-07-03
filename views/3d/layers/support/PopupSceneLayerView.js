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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/Error","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../layers/support/fieldUtils","../LayerView3D","../../../layers/support/popupUtils"],function(e,t,r,p,o,s,a,u,i,n,c,l,d){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype._validateFetchPopupFeatures=function(e){var t=this.layer;return t.popupEnabled?d.getFetchPopupTemplate(t,e)?void 0:new a("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new a("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t})},t.prototype.fetchPopupFeatures=function(e,t){return s(this,void 0,void 0,function(){var e,r,p,s,a,n,l,h,y,f;return o(this,function(o){switch(o.label){case 0:return(e=this._validateFetchPopupFeatures(t))?[2,i.reject(e)]:(r=u.isSome(t)?t.clientGraphics:null)&&0!==r.length?(p=[],s=[],n=c.unpackFieldNames,l=[this.layer.fields],[4,d.getRequiredFields(this.layer,d.getFetchPopupTemplate(this.layer,t))]):[2,i.resolve([])];case 1:for(a=n.apply(void 0,l.concat([o.sent()])),h=0,y=r;h<y.length;h++)f=y[h],c.featureHasFields(a,f)?p.push(f):s.push(f);return 0===s.length?[2,i.resolve(p)]:[2,this.whenGraphicAttributes(s,a).catch(function(){return s}).then(function(e){return p.concat(e)})]}})})},t=p([n.subclass("esri.views.3d.layers.support.PopupSceneLayerView")],t)}(n.declared(l));t.PopupSceneLayerView=h,t.default=h});