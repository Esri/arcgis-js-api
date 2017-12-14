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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./support/widget","../core/accessorSupport/decorators","../core/watchUtils","./Widget","./ScaleBar/ScaleBarViewModel","../geometry/ScreenPoint","dojo/dom-geometry","dojo/i18n!./ScaleBar/nls/ScaleBar"],function(e,r,t,i,a,l,n,s,o,c,u,d){function b(e){return 2*e}var p={base:"esri-scale-bar esri-widget",labelContainer:"esri-scale-bar__label-container",rulerLabelContainer:"esri-scale-bar__label-container--ruler",lineLabelContainer:"esri-scale-bar__label-container--line",label:"esri-scale-bar__label",line:"esri-scale-bar__line",topLine:"esri-scale-bar__line--top",bottomLine:"esri-scale-bar__line--bottom",ruler:"esri-scale-bar__ruler",rulerBlock:"esri-scale-bar__ruler-block",barContainer:"esri-scale-bar__bar-container",rulerBarContainer:"esri-scale-bar__bar-container--ruler",lineBarContainer:"esri-scale-bar__bar-container--line",disabled:"esri-disabled"},v=function(e){function r(r){var t=e.call(this)||this;return t.unit="non-metric",t.view=null,t.viewModel=new o,t}return t(r,e),r.prototype.postInitialize=function(){var e=this;this.own([n.whenTrue(this,"view.stationary",function(){return e.scheduleRender()})])},Object.defineProperty(r.prototype,"style",{set:function(e){var r="dual"===this.unit?"line":e;this._set("style",r)},enumerable:!0,configurable:!0}),r.prototype.castStyle=function(e){return"line"===e?e:"ruler"},r.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},r.prototype.render=function(){var e,r,t="disabled"===this.get("viewModel.state"),i=(v={},v[p.disabled]=t,v);if(!t){var l=this,n=l.unit,s=l.style,o="non-metric"===n||"dual"===n,c="metric"===n||"dual"===n,u=50;if(o){var d=this.viewModel.getScaleBarProperties(u,"non-metric");d&&(r="ruler"===s?this._renderRuler(d):this._renderLine(d,"bottom"))}if(c){var b=this.viewModel.getScaleBarProperties(u,"metric");b&&(e="ruler"===s?this._renderRuler(b):this._renderLine(b,"top"))}}return a.tsx("div",{afterCreate:this._handleRootCreation,bind:this,"class":p.base,classes:i},e,r);var v},r.prototype._renderRuler=function(e){var r=b(Math.round(e.length)),t=d[e.unit]||d.unknownUnit,i=b(e.value)+" "+t;return a.tsx("div",{"class":a.join(p.barContainer,p.rulerBarContainer),key:"esri-scale-bar__ruler"},a.tsx("div",{"class":p.ruler,styles:{width:r+"px"}},a.tsx("div",{"class":p.rulerBlock}),a.tsx("div",{"class":p.rulerBlock}),a.tsx("div",{"class":p.rulerBlock}),a.tsx("div",{"class":p.rulerBlock})),a.tsx("div",{"class":a.join(p.labelContainer,p.rulerLabelContainer)},a.tsx("div",{"class":p.label},"0"),a.tsx("div",{"class":p.label},e.value),a.tsx("div",{"class":p.label},i)))},r.prototype._renderLine=function(e,r){var t=d[e.unit]||d.unknownUnit,i=b(e.value)+" "+t,l=a.tsx("div",{"class":a.join(p.labelContainer,p.lineLabelContainer),key:"esri-scale-bar__label"},a.tsx("div",{"class":p.label},i)),n=(c={},c[p.topLine]="top"===r,c[p.bottomLine]="bottom"===r,c),s=b(Math.round(e.length)),o=a.tsx("div",{"class":p.line,classes:n,key:"esri-scale-bar__line",styles:{width:s+"px"}});return a.tsx("div",{"class":a.join(p.barContainer,p.lineBarContainer),key:"esri-scale-bar__line-container"},[o,l]);var c},r.prototype._handleRootCreation=function(e){var r=this.viewModel;if(r){var t=u.position(e,!0),i=t.x,a=t.y;r.scaleComputedFrom=new c({x:i,y:a})}},i([l.property({dependsOn:["unit"]}),a.renderable()],r.prototype,"style",null),i([l.cast("style")],r.prototype,"castStyle",null),i([l.property(),a.renderable()],r.prototype,"unit",void 0),i([l.cast("unit")],r.prototype,"castUnit",null),i([l.aliasOf("viewModel.view"),a.renderable()],r.prototype,"view",void 0),i([l.property(),a.renderable(["viewModel.state"])],r.prototype,"viewModel",void 0),r=i([l.subclass("esri.widgets.ScaleBar")],r)}(l.declared(s));return v});