// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/promiseUtils","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Spinner/SpinnerViewModel","./support/widget"],function(e,i,t,o,n,r,s,a,l,p){var c={base:"esri-spinner",spinnerStart:"esri-spinner--start",spinnerFinish:"esri-spinner--finish"};return function(e){function i(i){var t=e.call(this)||this;return t._animationDelay=500,t._animationPromise=null,t.location=null,t.view=null,t.viewModel=new l,t.visible=!1,t}return t(i,e),i.prototype.postInitialize=function(){var e=this;this.own([r.watch(this,"visible",function(i){return e._visibleChange(i)})])},i.prototype.destroy=function(){this._animationPromise=null},i.prototype.show=function(e){var i=this,t=e.location,o=e.promise;t&&(this.viewModel.location=t),this.visible=!0;var n=function(){return i.hide()};o&&o.catch(function(){}).then(n)},i.prototype.hide=function(){this.visible=!1},i.prototype.render=function(){var e,i=this.visible,t=this.viewModel.screenLocation,o=!!t,n=i&&o,r=!i&&o,s=(e={},e[c.spinnerStart]=n,e[c.spinnerFinish]=r,e),a=this._getPositionStyles();return p.tsx("div",{class:this.classes(c.base,s),styles:a})},i.prototype._visibleChange=function(e){var i=this;if(e)return void(this.viewModel.screenLocationEnabled=!0);var t=n.after(this._animationDelay);this._animationPromise=t,t.catch(function(){}).then(function(){i._animationPromise===t&&(i.viewModel.screenLocationEnabled=!1,i._animationPromise=null)})},i.prototype._getPositionStyles=function(){var e=this.viewModel,i=e.screenLocation,t=e.view;if(!t||!i)return{};var o=t.padding;return{left:i.x-o.left+"px",top:i.y-o.top+"px"}},o([s.aliasOf("viewModel.location")],i.prototype,"location",void 0),o([s.aliasOf("viewModel.view")],i.prototype,"view",void 0),o([s.property({type:l}),p.renderable(["viewModel.screenLocation","viewModel.screenLocationEnabled"])],i.prototype,"viewModel",void 0),o([s.aliasOf("viewModel.visible")],i.prototype,"visible",void 0),i=o([s.subclass("esri.widgets.Spinner")],i)}(s.declared(a))});