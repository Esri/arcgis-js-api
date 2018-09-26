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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/dom-geometry","dojo/i18n!./ScaleBar/nls/ScaleBar","../core/watchUtils","../core/accessorSupport/decorators","../geometry/ScreenPoint","./Widget","./ScaleBar/ScaleBarViewModel","./support/widget"],function(e,r,t,i,a,l,s,n,o,c,u,d){function b(e){return 2*e}var p={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",rulerLabelContainer:"esri-scale-bar__label-container--ruler",lineLabelContainer:"esri-scale-bar__label-container--line",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",rulerBarContainer:"esri-scale-bar__bar-container--ruler",lineBarContainer:"esri-scale-bar__bar-container--line",disabled:"esri-disabled"};return function(e){function r(r){var t=e.call(this)||this;return t.unit="non-metric",t.view=null,t.viewModel=new u,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this.own([s.whenTrue(this,"view.stationary",function(){return e.scheduleRender()})])},Object.defineProperty(r.prototype,"style",{set:function(e){var r="dual"===this.unit?"line":e;this._set("style",r)},enumerable:!0,configurable:!0}),r.prototype.castStyle=function(e){return"line"===e?e:"ruler"},r.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},r.prototype.render=function(){var e,r,t,i="disabled"===this.get("viewModel.state"),a=(e={},e[p.disabled]=i,e);if(!i){var l=this,s=l.unit,n=l.style,o="non-metric"===s||"dual"===s,c="metric"===s||"dual"===s;if(o){var u=this.viewModel.getScaleBarProperties(50,"non-metric");u&&(t="ruler"===n?this._renderRuler(u):this._renderLine(u,"bottom"))}if(c){var b=this.viewModel.getScaleBarProperties(50,"metric");b&&(r="ruler"===n?this._renderRuler(b):this._renderLine(b,"top"))}}return d.tsx("div",{afterCreate:this._handleRootCreation,bind:this,class:this.classes(p.base,a)},r,t)},r.prototype._renderRuler=function(e){var r=b(Math.round(e.length)),t=l[e.unit]||l.unknownUnit,i=b(e.value)+" "+t;return d.tsx("div",{class:this.classes(p.barContainer,p.rulerBarContainer),key:"esri-scale-bar__ruler"},d.tsx("div",{class:p.ruler,styles:{width:r+"px"}},d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock}),d.tsx("div",{class:p.rulerBlock})),d.tsx("div",{class:this.classes(p.labelContainer,p.rulerLabelContainer)},d.tsx("div",{class:p.label},"0"),d.tsx("div",{class:p.label},e.value),d.tsx("div",{class:p.label},i)))},r.prototype._renderLine=function(e,r){var t,i=l[e.unit]||l.unknownUnit,a=b(e.value)+" "+i,s=d.tsx("div",{class:this.classes(p.labelContainer,p.lineLabelContainer),key:"esri-scale-bar__label"},d.tsx("div",{class:p.label},a)),n=(t={},t[p.topLine]="top"===r,t[p.bottomLine]="bottom"===r,t),o=b(Math.round(e.length)),c=d.tsx("div",{class:this.classes(p.line,n),key:"esri-scale-bar__line",styles:{width:o+"px"}});return d.tsx("div",{class:this.classes(p.barContainer,p.lineBarContainer),key:"esri-scale-bar__line-container"},[c,s])},r.prototype._handleRootCreation=function(e){var r=this.viewModel;if(r){var t=a.position(e,!0),i=t.x,l=t.y;r.scaleComputedFrom=new o({x:i,y:l})}},i([n.property({dependsOn:["unit"]}),d.renderable()],r.prototype,"style",null),i([n.cast("style")],r.prototype,"castStyle",null),i([n.property(),d.renderable()],r.prototype,"unit",void 0),i([n.cast("unit")],r.prototype,"castUnit",null),i([n.aliasOf("viewModel.view"),d.renderable()],r.prototype,"view",void 0),i([n.property(),d.renderable(["viewModel.state"])],r.prototype,"viewModel",void 0),r=i([n.subclass("esri.widgets.ScaleBar")],r)}(n.declared(c))});