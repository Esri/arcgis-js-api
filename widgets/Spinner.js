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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/promiseUtils","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./Spinner/SpinnerViewModel","./support/widget"],(function(e,i,t,o,n,r,s,a,l){var c="esri-spinner",p="esri-spinner--start",d="esri-spinner--finish";return function(e){function i(i,t){var o=e.call(this,i,t)||this;return o._animationDelay=500,o._animationPromise=null,o.location=null,o.view=null,o.viewModel=new a,o.visible=!1,o}return t.__extends(i,e),i.prototype.initialize=function(){var e=this;this.own([n.watch(this,"visible",(function(i){return e._visibleChange(i)}))])},i.prototype.destroy=function(){this._animationPromise=null},i.prototype.show=function(e){var i=this,t=e.location,o=e.promise;t&&(this.viewModel.location=t),this.visible=!0;o&&o.catch((function(){})).then((function(){return i.hide()}))},i.prototype.hide=function(){this.visible=!1},i.prototype.render=function(){var e,i=this.visible,t=!!this.viewModel.screenLocation,o=!i&&t,n=((e={})[p]=i&&t,e[d]=o,e),r=this._getPositionStyles();return l.tsx("div",{class:this.classes(c,n),styles:r})},i.prototype._visibleChange=function(e){var i=this;if(e)this.viewModel.screenLocationEnabled=!0;else{var t=o.after(this._animationDelay);this._animationPromise=t,t.catch((function(){})).then((function(){i._animationPromise===t&&(i.viewModel.screenLocationEnabled=!1,i._animationPromise=null)}))}},i.prototype._getPositionStyles=function(){var e=this.viewModel,i=e.screenLocation,t=e.view;if(!t||!i)return{};var o=t.padding;return{left:i.x-o.left+"px",top:i.y-o.top+"px"}},t.__decorate([r.aliasOf("viewModel.location")],i.prototype,"location",void 0),t.__decorate([r.aliasOf("viewModel.view")],i.prototype,"view",void 0),t.__decorate([r.property({type:a}),l.renderable(["viewModel.screenLocation","viewModel.screenLocationEnabled"])],i.prototype,"viewModel",void 0),t.__decorate([r.aliasOf("viewModel.visible")],i.prototype,"visible",void 0),i=t.__decorate([r.subclass("esri.widgets.Spinner")],i)}(s)}));