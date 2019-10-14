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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","dojo/i18n!../HeatmapSlider/nls/HeatmapSlider","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel","../support/utils"],function(t,e,o,r,a,i,n,p){return function(t){function e(e){var o=t.call(this)||this;return o._initialRatios=[],o.hasTimeData=!1,o.labelFormatFunction=function(t,e){return"min"===e?a.bottomLabel:"max"===e?a.topLabel:t.toString()},o.max=1,o.min=0,o.zoomingEnabled=!1,o}return o(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){this._initialRatios=t.map(function(t){return t.ratio}),this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;return!t||!t.length||t.length<2?[]:[t[0].ratio,t[t.length-1].ratio]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var o=this,r=o.max,a=o.min,i=o.stops;if(!(e>r||e<a)){if(e!==i[t].ratio){var n=this.values,l=0===t?0:i.length-1,s=0===t?a:n[t-1],u=t===n.length-1?r:n[t+1],d=Math.max(Math.min(e,u),s),c=0===l?d:i[0].ratio,y=0===l?i[i.length-1].ratio:d;p.getStopChanges(l,d,c,y,this._initialRatios).forEach(function(t,e){i[e].ratio=t.value}),this.notifyChange("values"),this.notifyChange("labels")}}},e.prototype.getStopInfo=function(){var t=this.stops;return t&&t.length?t.map(function(t){return{color:t.color,offset:1-t.ratio}}):[]},r([i.property({readOnly:!0})],e.prototype,"hasTimeData",void 0),r([i.property({readOnly:!0})],e.prototype,"labelFormatFunction",void 0),r([i.property({readOnly:!0})],e.prototype,"max",void 0),r([i.property({readOnly:!0})],e.prototype,"min",void 0),r([i.property()],e.prototype,"stops",null),r([i.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),r([i.property({readOnly:!0})],e.prototype,"zoomingEnabled",void 0),e=r([i.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],e)}(i.declared(n))});