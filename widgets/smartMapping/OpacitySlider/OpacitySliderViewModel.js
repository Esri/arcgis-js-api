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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/maybe","../../../core/accessorSupport/decorators","../../Slider/SliderViewModel","../support/utils"],function(e,t,r,o,a,n,i,l,s){return function(e){function t(t){var r=e.call(this)||this;return r._initialValues=[],r.hasTimeData=!1,r.labelFormatFunction=function(e,t,o){return r.hasTimeData?s.formatDateLabel(e):r.defaultLabelFormatFunction(e)},r}return r(t,e),Object.defineProperty(t.prototype,"state",{get:function(){var e=this,t=e.max,r=e.min,o=e.values;return n.isSome(t)&&n.isSome(r)&&o.length>1?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){this._initialValues=e.map(function(e){return e.value}),this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.stops;return!e||!e.length||e.length<2?[]:[e[0].value,e[e.length-1].value]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this,o=r.max,a=r.min,n=r.stops;if(!(t>o||t<a)){if(t!==n[e].value){var i=this.values,l=0===e?0:n.length-1,p=0===e?a:i[e-1],u=e===i.length-1?o:i[e+1],c=Math.max(Math.min(t,u),p),d=0===l?c:n[0].value,f=0===l?n[n.length-1].value:c;s.getStopChanges(l,c,d,f,this._initialValues).forEach(function(e,t){n[t].value=e.value}),this.notifyChange("values"),this.notifyChange("labels")}}},t.prototype.getStopInfo=function(){var e=this,t=e.min,r=e.max,o=e.stops;return o&&o.length?o.map(function(e){return{color:new a([0,121,193,e.opacity]),offset:(r-e.value)/(r-t)}}):[]},o([i.property()],t.prototype,"hasTimeData",void 0),o([i.property()],t.prototype,"labelFormatFunction",void 0),o([i.property({dependsOn:["max","min","values"],readOnly:!0})],t.prototype,"state",null),o([i.property()],t.prototype,"stops",null),o([i.property({dependsOn:["stops"],readOnly:!0})],t.prototype,"values",null),t=o([i.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],t)}(i.declared(l))});