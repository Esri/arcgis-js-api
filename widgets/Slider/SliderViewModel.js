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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Error","../../core/Logger","../../core/maybe","../../core/accessorSupport/decorators"],function(e,t,r,o,i,n,a,l,s){var u=a.getLogger("esri.widgets.Slider.SliderViewModel");return function(e){function t(t){var r=e.call(this)||this;return r.precision=4,r}return r(t,e),Object.defineProperty(t.prototype,"labelFormatFunction",{set:function(e){this._set("labelFormatFunction",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"labels",{get:function(){var e=this,t=this,r=t.max,o=t.min,i=t.values,n=i&&i.length?i.map(function(t,r){return e.getLabelForValue(t,"value",r)}):[];return{max:this.getLabelForValue(r,"max"),min:this.getLabelForValue(o,"min"),values:n}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{set:function(e){this.setMax(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{set:function(e){this.setMin(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this,t=e.max,r=e.min;return l.isSome(t)&&l.isSome(r)?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{set:function(e){var t=this,r=t.max,o=t.min,i=this.values;i&&e&&i.length===e.length&&i.every(function(t,r){return t===e[r]})||(this._set("values",null),e&&e.length&&(l.isSome(o)&&e.some(function(e){return e<o})&&(this.min=Math.min.apply(Math,e)),l.isSome(r)&&e.some(function(e){return e>r})&&(this.max=Math.max.apply(Math,e))),this._set("values",e))},enumerable:!0,configurable:!0}),t.prototype.defaultLabelFormatFunction=function(e){var t=this,r=t.max,o=t.min,i=t.precision,n=r-o>10?2:i;return parseFloat(e.toFixed(n)).toString()},t.prototype.getLabelForValue=function(e,t,r){return l.isSome(e)?this.labelFormatFunction?this.labelFormatFunction(e,t,r):this.defaultLabelFormatFunction(e):null},t.prototype.setMax=function(e){var t=this,r=t.max,o=t.min,i=t.values;if(isNaN(e))return void this._logError("slider:invalid-value","Property 'max' must of type 'number'.");if(r!==e){if(l.isSome(o)&&e<=o)return void this._logError("slider:invalid-value","Property 'max' must be greater than 'min'.");if(this._set("max",e),i&&i.length)for(var n=0;n<i.length;n++)e<i[n]&&this.setValue(n,e)}},t.prototype.setMin=function(e){var t=this,r=t.max,o=t.min,i=t.values;if(isNaN(e))return void this._logError("slider:invalid-value","Property 'min' must of type 'number'.");if(o!==e){if(l.isSome(r)&&e>=r)return void this._logError("slider:invalid-value","Property 'min' must be less than 'max'.");if(this._set("min",e),i&&i.length)for(var n=0;n<i.length;n++)e>i[n]&&this.setValue(n,e)}},t.prototype.setValue=function(e,t){var r=this,o=r.max,i=r.min;if(r.values[e]!==t){if(t<i||t>o)return void this._logError("slider:invalid-value","Members of property 'values' must be within range.");this.values[e]=t,this.notifyChange("labels")}},t.prototype._logError=function(e,t,r){u.error(new n(e,t,r))},o([s.property()],t.prototype,"labelFormatFunction",null),o([s.property({dependsOn:["labelFormatFunction","max","min","values"],readOnly:!0})],t.prototype,"labels",null),o([s.property()],t.prototype,"max",null),o([s.property()],t.prototype,"min",null),o([s.property()],t.prototype,"precision",void 0),o([s.property({dependsOn:["max","min"],readOnly:!0})],t.prototype,"state",null),o([s.property()],t.prototype,"values",null),t=o([s.subclass("esri.widgets.Slider.SliderViewModel")],t)}(s.declared(i))});