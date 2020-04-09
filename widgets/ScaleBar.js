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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./ScaleBar/nls/ScaleBar","../core/screenUtils","../core/watchUtils","../core/accessorSupport/decorators","./Widget","./ScaleBar/ScaleBarViewModel","./support/widget"],(function(e,t,r,s,i,a,l,n,o,c,d){var u="esri-scale-bar esri-widget",p="esri-scale-bar__label-container",b="esri-scale-bar__label-container--ruler",v="esri-scale-bar__label-container--line",_="esri-scale-bar__label-container--top",h="esri-scale-bar__label-container--bottom",y="esri-scale-bar__label",w="esri-scale-bar__line",f="esri-scale-bar__line--top",x="esri-scale-bar__line--bottom",m="esri-scale-bar__ruler",g="esri-scale-bar__ruler-block",S="esri-scale-bar__bar-container",M="esri-scale-bar__bar-container--ruler",U="esri-scale-bar__bar-container--line",R="esri-disabled";function B(e){return 2*e}return function(e){function t(t){var r=e.call(this,t)||this;return r.label=i.widgetLabel,r.unit="non-metric",r.view=null,r.viewModel=new c,r}return r(t,e),t.prototype.postInitialize=function(){var e=this;this.own([l.whenTrue(this,"view.stationary",(function(){return e.scheduleRender()})),l.watch(this,["view.center","view.scale","view.zoom"],(function(){e.view.stationary&&e.scheduleRender()}))])},Object.defineProperty(t.prototype,"style",{set:function(e){var t="dual"===this.unit?"line":e;this._set("style",t)},enumerable:!0,configurable:!0}),t.prototype.castStyle=function(e){return"line"===e?e:"ruler"},t.prototype.castUnit=function(e){return"metric"===e||"dual"===e?e:"non-metric"},t.prototype.render=function(){var e,t,r,s="disabled"===this.get("viewModel.state"),i=((e={})[R]=s,e);if(!s){var a=this.unit,l=this.style,n="metric"===a||"dual"===a;if("non-metric"===a||"dual"===a){var o=this.viewModel.getScaleBarProperties(50,"non-metric");o&&(r="ruler"===l?this._renderRuler(o):this._renderLine(o,"bottom"))}if(n){var c=this.viewModel.getScaleBarProperties(50,"metric");c&&(t="ruler"===l?this._renderRuler(c):this._renderLine(c,"top"))}}return d.tsx("div",{afterCreate:this._handleRootCreateOrUpdate,afterUpdate:this._handleRootCreateOrUpdate,bind:this,class:this.classes(u,i)},t,r)},t.prototype._renderRuler=function(e){var t=B(Math.round(e.length)),r=i[e.unit]||i.unknownUnit,s=B(e.value)+" "+r;return d.tsx("div",{class:this.classes(S,M),key:"esri-scale-bar__ruler"},d.tsx("div",{class:m,styles:{width:t+"px"}},d.tsx("div",{class:g}),d.tsx("div",{class:g}),d.tsx("div",{class:g}),d.tsx("div",{class:g})),d.tsx("div",{class:this.classes(p,b)},d.tsx("div",{class:y},"0"),d.tsx("div",{class:y},s)))},t.prototype._renderLine=function(e,t){var r,s,a=i[e.unit]||i.unknownUnit,l=B(e.value)+" "+a,n=((r={})[_]="top"===t,r[h]="bottom"===t,r),o=d.tsx("div",{class:this.classes(p,v,n),key:"esri-scale-bar__label"},d.tsx("div",{class:y},l)),c=((s={})[f]="top"===t,s[x]="bottom"===t,s),u=B(Math.round(e.length)),b=d.tsx("div",{class:this.classes(w,c),key:"esri-scale-bar__line",styles:{width:u+"px"}});return d.tsx("div",{class:this.classes(S,U),key:"esri-scale-bar__line-container"},[b,o])},t.prototype._handleRootCreateOrUpdate=function(e){var t=this.viewModel;if(t){var r=e.getBoundingClientRect(),s=r.left+window.pageXOffset,i=r.top+window.pageYOffset;t.scaleComputedFrom=a.createScreenPoint(s,i)}},s([n.property()],t.prototype,"label",void 0),s([n.property({dependsOn:["unit"]}),d.renderable()],t.prototype,"style",null),s([n.cast("style")],t.prototype,"castStyle",null),s([n.property(),d.renderable()],t.prototype,"unit",void 0),s([n.cast("unit")],t.prototype,"castUnit",null),s([n.aliasOf("viewModel.view"),d.renderable()],t.prototype,"view",void 0),s([n.property(),d.renderable(["viewModel.state"])],t.prototype,"viewModel",void 0),t=s([n.subclass("esri.widgets.ScaleBar")],t)}(n.declared(o))}));