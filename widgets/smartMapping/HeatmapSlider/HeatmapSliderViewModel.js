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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","dojo/i18n!../HeatmapSlider/nls/HeatmapSlider","../../../core/maybe","../../../core/accessorSupport/decorators","../../Slider/SliderViewModel","../support/utils"],function(t,e,r,o,a,n,i,p,s){return function(t){function e(e){var r=t.call(this)||this;return r._initialRatios=[],r.hasTimeData=!1,r.labelFormatFunction=function(t,e){return"min"===e?a.bottomLabel:"max"===e?a.topLabel:t.toString()},r.max=1,r.min=0,r}return r(e,t),Object.defineProperty(e.prototype,"state",{get:function(){var t=this,e=t.max,r=t.min,o=t.values;return n.isSome(e)&&n.isSome(r)&&o.length>1?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stops",{set:function(t){this._initialRatios=t.map(function(t){return t.ratio}),this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;return!t||!t.length||t.length<2?[]:[t[0].ratio,t[t.length-1].ratio]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var r=this,o=r.max,a=r.min,n=r.stops;if(!(e>o||e<a)){if(e!==n[t].ratio){var i=this.values,p=0===t?0:n.length-1,l=0===t?a:i[t-1],u=t===i.length-1?o:i[t+1],d=Math.max(Math.min(e,u),l),c=0===p?d:n[0].ratio,m=0===p?n[n.length-1].ratio:d;s.getStopChanges(p,d,c,m,this._initialRatios).forEach(function(t,e){n[e].ratio=t.value}),this.notifyChange("values"),this.notifyChange("labels")}}},e.prototype.getStopInfo=function(){var t=this.stops;return t&&t.length?t.map(function(t){return{color:t.color,offset:1-t.ratio}}):[]},o([i.property({readOnly:!0})],e.prototype,"hasTimeData",void 0),o([i.property({readOnly:!0})],e.prototype,"labelFormatFunction",void 0),o([i.property({readOnly:!0})],e.prototype,"max",void 0),o([i.property({readOnly:!0})],e.prototype,"min",void 0),o([i.property({dependsOn:["max","min","values"],readOnly:!0})],e.prototype,"state",null),o([i.property()],e.prototype,"stops",null),o([i.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=o([i.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],e)}(i.declared(p))});