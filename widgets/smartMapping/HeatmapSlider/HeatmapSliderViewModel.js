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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../intl","../../../core/Handles","../../../core/maybe","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel","../support/utils"],(function(e,t,o,r,a,n,i,s,p){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o._handles=new a,o._initialRatios=[],o.hasTimeData=!1,o.labelFormatFunction=function(e,t){return"min"===t?o.messages.bottomLabel:"max"===t?o.messages.topLabel:e.toString()},o.max=1,o.messages=null,o.min=0,o.zoomingEnabled=!1,o}return o.__extends(t,e),t.prototype.initialize=function(){var e=this,t=function(){return o.__awaiter(e,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return e=this,[4,r.loadMessageBundle("esri/widgets/smartMapping/HeatmapSlider/t9n/HeatmapSlider")];case 1:return[2,e.messages=t.sent()]}}))}))};t(),this._handles.add(r.onLocaleChange(t))},Object.defineProperty(t.prototype,"state",{get:function(){var e=this.messages,t=this.max,o=this.min;return e&&n.isSome(t)&&n.isSome(o)?"ready":"disabled"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){this._initialRatios=e.map((function(e){return e.ratio})),this._set("stops",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;return!e||!e.length||e.length<2?[]:[e[0].ratio,e[e.length-1].ratio]},enumerable:!1,configurable:!0}),t.prototype.setValue=function(e,t){var o=this.max,r=this.min,a=this.stops;if(!(t>o||t<r)&&t!==a[e].ratio){var n=this.values,i=0===e?0:a.length-1,s=0===e?r:n[e-1],l=e===n.length-1?o:n[e+1],d=Math.max(Math.min(t,l),s),u=0===i?d:a[0].ratio,c=0===i?a[a.length-1].ratio:d;p.getStopChanges(u,c,this._initialRatios).forEach((function(e,t){a[t].ratio=e.value})),this.notifyChange("values"),this.notifyChange("labels")}},t.prototype.getStopInfo=function(){var e=this.stops;return e&&e.length?e.map((function(e){return{color:e.color,offset:1-e.ratio}})):[]},o.__decorate([i.property({readOnly:!0})],t.prototype,"hasTimeData",void 0),o.__decorate([i.property({dependsOn:["messages"],readOnly:!0})],t.prototype,"labelFormatFunction",void 0),o.__decorate([i.property({readOnly:!0})],t.prototype,"max",void 0),o.__decorate([i.property()],t.prototype,"messages",void 0),o.__decorate([i.property({readOnly:!0})],t.prototype,"min",void 0),o.__decorate([i.property({dependsOn:["max","messages","min"],readOnly:!0})],t.prototype,"state",null),o.__decorate([i.property()],t.prototype,"stops",null),o.__decorate([i.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),o.__decorate([i.property({readOnly:!0})],t.prototype,"zoomingEnabled",void 0),t=o.__decorate([i.subclass("esri.widgets.smartMapping.HeatmapSlider.HeatmapSliderViewModel")],t)}(s)}));