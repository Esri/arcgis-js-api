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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/numberUtils","../../Slider/SliderViewModel","../support/utils"],function(e,t,r,o,n,a,i,s,p,l){return function(e){function t(t){var r=e.call(this)||this;return r.hasTimeData=!1,r.labelFormatFunction=function(e,t,o){return r.hasTimeData?l.formatDateLabel(e):r.defaultLabelFormatFunction(e)},r}return o(t,e),Object.defineProperty(t.prototype,"state",{get:function(){var e=this,t=e.max,r=e.min,o=e.values;return a.isSome(t)&&a.isSome(r)&&2===o.length?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map(function(e){return e.value}),o=this,n=o.max,i=o.min,s={};a.isSome(i)&&t.some(function(e){return e<i})&&(s.min=Math.min.apply(Math,t)),a.isSome(n)&&t.some(function(e){return e>n})&&(s.max=Math.max.apply(Math,t)),this.set(r({},s))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;if(!e||!e.length||e.length<2)return[];var t=e.map(function(e){return e.value});return[t[0],t[t.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this,o=r.max,n=r.min,a=r.stops;if(!(t>o||t<n)){if(t!==a[e].value){a[0===e?0:a.length-1].value=t,this._updateSizeStops(),this.notifyChange("values"),this.notifyChange("labels")}}},t.prototype._updateSizeStops=function(){for(var e=this.stops,t=e[0].value,r=e[e.length-1].value-t,o=e.length-1,n=e.slice(0),a=1;a<e.length-1;a++)n[a].value=t+a*r/o;for(var i=n.map(function(e){return e.value}),p=s.round(i),a=1;a<e.length-1;a++)e[a].value=p[a]},n([i.property()],t.prototype,"hasTimeData",void 0),n([i.property()],t.prototype,"labelFormatFunction",void 0),n([i.property({dependsOn:["max","min","values"],readOnly:!0})],t.prototype,"state",null),n([i.property()],t.prototype,"stops",null),n([i.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=n([i.subclass("esri.widgets.smartMapping.SizeSlider.SizeSliderViewModel")],t)}(i.declared(p))});