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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/utils","../../Slider/SliderViewModel","../support/utils"],function(e,t,o,r,n,a,s,i,p,l){return function(e){function t(t){var o=e.call(this)||this;return o.hasTimeData=!1,o.labelFormatFunction=function(e,t,r){return o.hasTimeData?l.formatDateLabel(e):o.defaultLabelFormatFunction(e)},o}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){var e=this,t=e.max,o=e.min,r=e.values;return a.isSome(t)&&a.isSome(o)&&r.length>1?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map(function(e){return e.value}),r=this,n=r.max,s=r.min,i={};a.isSome(s)&&t.some(function(e){return e<s})&&(i.min=Math.min.apply(Math,t)),a.isSome(n)&&t.some(function(e){return e>n})&&(i.max=Math.max.apply(Math,t)),this.set(o({},i))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;if(!e||!e.length||e.length<2)return[];var t=e.map(function(e){return e.value});return[t[0],t[t.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var o=this,r=o.max,n=o.min;if(!(t>r||t<n)){var a=this._getColorStopChanges(e,t);this._updateColorStops(a),this.notifyChange("values"),this.notifyChange("labels")}},t.prototype.getColorStopInfo=function(){var e=this,t=e.min,o=e.max,r=e.stops;return r&&r.length?r.map(function(e){return{color:e.color,offset:(o-e.value)/(o-t)}}):[]},t.prototype._getColorStopChanges=function(e,t){var o=this,r=o.max,n=o.min,a=o.stops,s=o.values,i=0===e?0:this.stops.length-1,p=0===e?n:s[e-1],l=e===s.length-1?r:s[e+1],u=a.map(function(e){return e.value});u[i]=Math.max(Math.min(t,l),p);var c=u[u.length-1]-u[0],m=a.length-1;return u.map(function(e,t){return{index:t,value:u[0]+t*c/m}})},t.prototype._updateColorStops=function(e){var t=this,o=t.hasTimeData,r=t.stops;i.updateColorStops({changes:e,stops:r,isDate:o})},n([s.property()],t.prototype,"hasTimeData",void 0),n([s.property()],t.prototype,"labelFormatFunction",void 0),n([s.property({dependsOn:["max","min","values"],readOnly:!0})],t.prototype,"state",null),n([s.property()],t.prototype,"stops",null),n([s.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=n([s.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],t)}(s.declared(p))});