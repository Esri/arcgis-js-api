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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","../core/watchUtils","./Widget","./ScaleBar/ScaleBarViewModel","../geometry/ScreenPoint","dojo/dom-geometry","dojo/i18n!./ScaleBar/nls/ScaleBar"],function(e,r,t,i,l,a,n,s,o,c,d,u){function p(e){return 2*e}var b={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",lineLabelContainer:"esri-scale-bar__label-container--line",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",disabled:"esri-disabled"},v=function(e){function r(r){var t=e.call(this)||this;return t.unit="non-metric",t.view=null,t.viewModel=new o,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this.own([n.whenTrue(this,"view.stationary",function(){return e.scheduleRender()})])},Object.defineProperty(r.prototype,"style",{set:function(e){var r="dual"===this.unit?"line":e;this._set("style",r)},enumerable:!0,configurable:!0}),r.prototype.castStyle=function(e){return"line"===e?e:"ruler"},r.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},r.prototype.render=function(){var e,r,t="disabled"===this.get("viewModel.state"),i=(v={},v[b.disabled]=t,v);if(!t){var a=this,n=a.unit,s=a.style,o="non-metric"===n||"dual"===n,c="metric"===n||"dual"===n,d=50;if(o){var u=this.viewModel.getScaleBarProperties(d,"non-metric");r="ruler"===s?this._renderRuler(u):this._renderLine(u,"bottom")}if(c){var p=this.viewModel.getScaleBarProperties(d,"metric");e="ruler"===s?this._renderRuler(p):this._renderLine(p,"top")}}return l.tsx("div",{afterCreate:this._handleRootCreation,bind:this,"class":b.base,classes:i},e,r);var v},r.prototype._renderRuler=function(e){var r=p(Math.round(e.length)),t=u[e.unit]||u.unknownUnit,i=p(e.value)+" "+t;return l.tsx("div",{"class":b.barContainer,styles:{width:r+"px"},key:"esri-scale-bar__ruler"},l.tsx("div",{"class":b.ruler},l.tsx("div",{"class":b.rulerBlock}),l.tsx("div",{"class":b.rulerBlock}),l.tsx("div",{"class":b.rulerBlock}),l.tsx("div",{"class":b.rulerBlock})),l.tsx("div",{"class":b.labelContainer},l.tsx("div",{"class":b.label},"0"),l.tsx("div",{"class":b.label},e.value),l.tsx("div",{"class":b.label},i)))},r.prototype._renderLine=function(e,r){var t=u[e.unit]||u.unknownUnit,i=p(e.value)+" "+t,a=l.tsx("div",{"class":l.join(b.labelContainer,b.lineLabelContainer),key:"esri-scale-bar__label"},l.tsx("div",{"class":b.label},i)),n=(c={},c[b.topLine]="top"===r,c[b.bottomLine]="bottom"===r,c),s=l.tsx("div",{"class":b.line,classes:n,key:"esri-scale-bar__line"}),o=p(Math.round(e.length));return l.tsx("div",{"class":b.barContainer,styles:{width:o+"px"},key:"esri-scale-bar__line-container"},"top"===r?[a,s]:[s,a]);var c},r.prototype._handleRootCreation=function(e){var r=this.viewModel;if(r){var t=d.position(e,!0),i=t.x,l=t.y;r.scaleComputedFrom=new c({x:i,y:l})}},i([a.property({dependsOn:["unit"]}),l.renderable()],r.prototype,"style",null),i([a.cast("style")],r.prototype,"castStyle",null),i([a.property(),l.renderable()],r.prototype,"unit",void 0),i([a.cast("unit")],r.prototype,"castUnit",null),i([a.aliasOf("viewModel.view"),l.renderable()],r.prototype,"view",void 0),i([a.property(),l.renderable(["viewModel.state"])],r.prototype,"viewModel",void 0),r=i([a.subclass("esri.widgets.ScaleBar")],r)}(a.declared(s));return v});