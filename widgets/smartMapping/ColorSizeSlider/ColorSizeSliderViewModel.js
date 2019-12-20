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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/utils","../SmartMappingSliderViewModel"],function(t,e,o,r,n,s,a,p,i){return function(t){function e(e){return t.call(this,e)||this}return r(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){if(t&&t.length){var e=t.map(function(t){return t.value}),r=this,n=r.max,a=r.min,p={};s.isSome(a)&&e.some(function(t){return t<a})&&(p.min=Math.min.apply(Math,e)),s.isSome(n)&&e.some(function(t){return t>n})&&(p.max=Math.max.apply(Math,e)),this.set(o({},p))}this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;if(!t||!t.length||t.length<2)return[];var e=t.map(function(t){return t.value});return[e[0],e[e.length-1]]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var o=this,r=o.max,n=o.min;if(!(e>r||e<n)){var s=this._getColorStopChanges(t,e);this._updateColorStops(s),this.notifyChange("values"),this.notifyChange("labels")}},e.prototype.getColorStopInfo=function(){var t=this,e=t.min,o=t.max,r=t.stops;return r&&r.length?r.map(function(t){return{color:t.color,offset:(o-t.value)/(o-e)}}):[]},e.prototype._getColorStopChanges=function(t,e){var o=this,r=o.max,n=o.min,s=o.stops,a=o.values,p=0===t?0:this.stops.length-1,i=0===t?n:a[t-1],u=t===a.length-1?r:a[t+1],l=s.map(function(t){return t.value});l[p]=Math.max(Math.min(e,u),i);var c=l[l.length-1]-l[0],h=s.length-1;return l.map(function(t,e){return{index:e,value:l[0]+e*c/h}})},e.prototype._updateColorStops=function(t){var e=this,o=e.hasTimeData,r=e.stops;p.updateColorStops({changes:t,stops:r,isDate:o})},n([a.property()],e.prototype,"stops",null),n([a.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=n([a.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],e)}(a.declared(i))});