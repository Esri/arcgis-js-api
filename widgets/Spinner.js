// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","./Widget","../core/promiseUtils","../core/watchUtils","./support/AnchorElementViewModel"],function(e,i,t,o,n,r,s,a,l,c){var p={base:"esri-spinner",spinnerStart:"esri-spinner--start",spinnerFinish:"esri-spinner--finish"},d=function(e){function i(i){var t=e.call(this)||this;return t._animationDelay=500,t._animationPromise=null,t.location=null,t.view=null,t.visible=!1,t.viewModel=new c,t}return t(i,e),i.prototype.postInitialize=function(){var e=this;this.own([l.watch(this,"visible",function(i){return e._visibleChange(i)})])},i.prototype.destroy=function(){this._cancelAnimationPromise()},i.prototype.show=function(e){var i=this,t=e.location,o=e.promise;t&&(this.viewModel.location=t),this.visible=!0,o&&o.always(function(){return i.hide()})},i.prototype.hide=function(){this.visible=!1},i.prototype.render=function(){var e=this.visible,i=this.viewModel.screenLocation,t=!!i,o=e&&t,r=!e&&t,s=(l={},l[p.spinnerStart]=o,l[p.spinnerFinish]=r,l),a=this._getPositionStyles();return n.tsx("div",{"class":p.base,classes:s,styles:a});var l},i.prototype._cancelAnimationPromise=function(){this._animationPromise&&(this._animationPromise.cancel(),this._animationPromise=null)},i.prototype._visibleChange=function(e){var i=this;return e?void(this.viewModel.screenLocationEnabled=!0):(this._cancelAnimationPromise(),void(this._animationPromise=a.after(this._animationDelay).then(function(){i.viewModel.screenLocationEnabled=!1,i._animationPromise=null})))},i.prototype._getPositionStyles=function(){var e=this.viewModel.screenLocation;return e?{left:e.x+"px",top:e.y+"px"}:{}},o([r.aliasOf("viewModel.location")],i.prototype,"location",void 0),o([r.aliasOf("viewModel.view")],i.prototype,"view",void 0),o([r.property(),n.renderable()],i.prototype,"visible",void 0),o([r.property({type:c}),n.renderable(["viewModel.screenLocation","viewModel.screenLocationEnabled"])],i.prototype,"viewModel",void 0),i=o([r.subclass("esri.widgets.Spinner")],i)}(r.declared(s));return d});