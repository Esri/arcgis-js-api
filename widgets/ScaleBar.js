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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","../core/watchUtils","./Widget","./ScaleBar/ScaleBarViewModel","../geometry/ScreenPoint","dojo/dom-geometry","dojo/i18n!./ScaleBar/nls/ScaleBar"],function(e,r,t,a,l,n,i,o,s,c,d,u){function p(e){return 2*e}var b={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",lineLabelContainer:"esri-scale-bar__label-container--line",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",disabled:"esri-disabled"},y=function(e){function r(r){var t=e.call(this)||this;return t.unit="non-metric",t.view=null,t.viewModel=new s,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this.own([i.whenTrue(this,"view.stationary",function(){return e.scheduleRender()})])},Object.defineProperty(r.prototype,"style",{set:function(e){var r="dual"===this.unit?"line":e;this._set("style",r)},enumerable:!0,configurable:!0}),r.prototype.castStyle=function(e){return"line"===e?e:"ruler"},r.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},r.prototype.render=function(){var e,r,t="disabled"===this.get("viewModel.state"),a=(y={},y[b.disabled]=t,y);if(!t){var n=this,i=n.unit,o=n.style,s="non-metric"===i||"dual"===i,c="metric"===i||"dual"===i,d=50;if(s){var u=this.viewModel.getScaleBarProperties(d,"non-metric");r="ruler"===o?this._renderRuler(u):this._renderLine(u,"bottom")}if(c){var p=this.viewModel.getScaleBarProperties(d,"metric");e="ruler"===o?this._renderRuler(p):this._renderLine(p,"top")}}return l.jsxFactory.createElement("div",{afterCreate:this._handleRootCreation,bind:this,"class":b.base,classes:a},e,r);var y},r.prototype._renderRuler=function(e){var r=p(Math.round(e.length)),t=u[e.unit]||u.unknownUnit;return l.jsxFactory.createElement("div",{"class":b.barContainer,styles:{width:r+"px"},key:"esri-scale-bar__ruler"},l.jsxFactory.createElement("div",{"class":b.ruler},l.jsxFactory.createElement("div",{"class":l.join(b.rulerBlock)}),l.jsxFactory.createElement("div",{"class":l.join(b.rulerBlock)}),l.jsxFactory.createElement("div",{"class":l.join(b.rulerBlock)}),l.jsxFactory.createElement("div",{"class":l.join(b.rulerBlock)})),l.jsxFactory.createElement("div",{"class":b.labelContainer},l.jsxFactory.createElement("div",{"class":b.label},"0"),l.jsxFactory.createElement("div",{"class":b.label},e.value),l.jsxFactory.createElement("div",{"class":b.label},p(e.value)," ",t)))},r.prototype._renderLine=function(e,r){var t=u[e.unit]||u.unknownUnit,a=l.jsxFactory.createElement("div",{"class":l.join(b.labelContainer,b.lineLabelContainer),key:"esri-scale-bar__label"},l.jsxFactory.createElement("div",{"class":b.label},p(e.value)," ",t)),n=(s={},s[b.topLine]="top"===r,s[b.bottomLine]="bottom"===r,s),i=l.jsxFactory.createElement("div",{"class":b.line,classes:n,key:"esri-scale-bar__line"}),o=p(Math.round(e.length));return l.jsxFactory.createElement("div",{"class":b.barContainer,styles:{width:o+"px"},key:"esri-scale-bar__line-container"},"top"===r?[a,i]:[i,a]);var s},r.prototype._handleRootCreation=function(e){var r=this.viewModel;if(r){var t=d.position(e,!0),a=t.x,l=t.y;r.scaleComputedFrom=new c({x:a,y:l})}},r}(n.declared(o));return a([n.property({dependsOn:["unit"]}),l.renderable()],y.prototype,"style",null),a([n.cast("style")],y.prototype,"castStyle",null),a([n.property(),l.renderable()],y.prototype,"unit",void 0),a([n.cast("unit")],y.prototype,"castUnit",null),a([n.aliasOf("viewModel.view"),l.renderable()],y.prototype,"view",void 0),a([n.property(),l.renderable(["viewModel.state"])],y.prototype,"viewModel",void 0),y=a([n.subclass("esri.widgets.ScaleBar")],y)});