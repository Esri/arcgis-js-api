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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/dom-geometry","dojo/i18n!./ScaleBar/nls/ScaleBar","../core/watchUtils","../core/accessorSupport/decorators","../geometry/ScreenPoint","./Widget","./ScaleBar/ScaleBarViewModel","./support/widget"],function(e,r,t,i,a,l,n,s,o,c,u,d){function b(e){return 2*e}var p={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",rulerLabelContainer:"esri-scale-bar__label-container--ruler",lineLabelContainer:"esri-scale-bar__label-container--line",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",rulerBarContainer:"esri-scale-bar__bar-container--ruler",lineBarContainer:"esri-scale-bar__bar-container--line",disabled:"esri-disabled"};return function(e){function r(r){var t=e.call(this)||this;return t.unit="non-metric",t.view=null,t.viewModel=new u,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this.own([n.whenTrue(this,"view.stationary",function(){return e.scheduleRender()})])},Object.defineProperty(r.prototype,"style",{set:function(e){var r="dual"===this.unit?"line":e;this._set("style",r)},enumerable:!0,configurable:!0}),r.prototype.castStyle=function(e){return"line"===e?e:"ruler"},r.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},r.prototype.render=function(){var e,r,t="disabled"===this.get("viewModel.state"),i=(b={},b[p.disabled]=t,b);if(!t){var a=this,l=a.unit,n=a.style,s="non-metric"===l||"dual"===l,o="metric"===l||"dual"===l;if(s){var c=this.viewModel.getScaleBarProperties(50,"non-metric");c&&(r="ruler"===n?this._renderRuler(c):this._renderLine(c,"bottom"))}if(o){var u=this.viewModel.getScaleBarProperties(50,"metric");u&&(e="ruler"===n?this._renderRuler(u):this._renderLine(u,"top"))}}return d.tsx("div",{afterCreate:this._handleRootCreation,bind:this,class:p.base,classes:i},e,r);var b},r.prototype._renderRuler=function(e){var r=b(Math.round(e.length)),t=l[e.unit]||l.unknownUnit,i=b(e.value)+" "+t;return d.tsx("div",{class:d.join(p.barContainer,p.rulerBarContainer),key:"esri-scale-bar__ruler"},d.tsx("div",{class:p.ruler,styles:{width:r+"px"}},d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock})),d.tsx("div",{class:d.join(p.labelContainer,p.rulerLabelContainer)},d.tsx("div",{class:p.label},"0"),d.tsx("div",{class:p.label},e.value),d.tsx("div",{class:p.label},i)))},r.prototype._renderLine=function(e,r){var t=l[e.unit]||l.unknownUnit,i=b(e.value)+" "+t,a=d.tsx("div",{class:d.join(p.labelContainer,p.lineLabelContainer),key:"esri-scale-bar__label"},d.tsx("div",{class:p.label},i)),n=(c={},c[p.topLine]="top"===r,c[p.bottomLine]="bottom"===r,c),s=b(Math.round(e.length)),o=d.tsx("div",{class:p.line,classes:n,key:"esri-scale-bar__line",styles:{width:s+"px"}});return d.tsx("div",{class:d.join(p.barContainer,p.lineBarContainer),key:"esri-scale-bar__line-container"},[o,a]);var c},r.prototype._handleRootCreation=function(e){var r=this.viewModel;if(r){var t=a.position(e,!0),i=t.x,l=t.y;r.scaleComputedFrom=new o({x:i,y:l})}},i([s.property({dependsOn:["unit"]}),d.renderable()],r.prototype,"style",null),i([s.cast("style")],r.prototype,"castStyle",null),i([s.property(),d.renderable()],r.prototype,"unit",void 0),i([s.cast("unit")],r.prototype,"castUnit",null),i([s.aliasOf("viewModel.view"),d.renderable()],r.prototype,"view",void 0),i([s.property(),d.renderable(["viewModel.state"])],r.prototype,"viewModel",void 0),r=i([s.subclass("esri.widgets.ScaleBar")],r)}(s.declared(c))});