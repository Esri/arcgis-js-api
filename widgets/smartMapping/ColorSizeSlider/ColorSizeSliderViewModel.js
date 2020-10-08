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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/utils","../SmartMappingSliderViewModel"],(function(t,e,o,r,n,s,i){"use strict";return function(t){function e(e){return t.call(this,e)||this}return o.__extends(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){if(t&&t.length){var e=t.map((function(t){return t.value})),n=this.max,s=this.min,i={};r.isSome(s)&&e.some((function(t){return t<s}))&&(i.min=Math.min.apply(Math,e)),r.isSome(n)&&e.some((function(t){return t>n}))&&(i.max=Math.max.apply(Math,e)),this.set(o.__assign({},i))}this._set("stops",t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;if(!t||!t.length||t.length<2)return[];var e=t.map((function(t){return t.value}));return[e[0],e[e.length-1]]},enumerable:!1,configurable:!0}),e.prototype.setValue=function(t,e){var o=this.max,r=this.min;if(!(e>o||e<r)){var n=this._getColorStopChanges(t,e);this._updateColorStops(n),this.notifyChange("values"),this.notifyChange("labels")}},e.prototype.getColorStopInfo=function(){var t=this.min,e=this.max,o=this.stops;return o&&o.length?o.map((function(o){return{color:o.color,offset:(e-o.value)/(e-t)}})):[]},e.prototype._getColorStopChanges=function(t,e){var o=this.max,r=this.min,n=this.stops,s=this.values,i=0===t?0:this.stops.length-1,a=0===t?r:s[t-1],p=t===s.length-1?o:s[t+1],u=n.map((function(t){return t.value}));u[i]=Math.max(Math.min(e,p),a);var l=u[u.length-1]-u[0],h=n.length-1;return u.map((function(t,e){return{index:e,value:u[0]+e*l/h}}))},e.prototype._updateColorStops=function(t){var e=this.hasTimeData,o=this.stops;s.updateColorStops({changes:t,stops:o,isDate:e})},o.__decorate([n.property()],e.prototype,"stops",null),o.__decorate([n.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=o.__decorate([n.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],e)}(i)}));