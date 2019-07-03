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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../Slider/SliderViewModel","../support/utils"],function(e,t,r,n,a,o,i,s,p){return function(e){function t(t){var r=e.call(this)||this;return r.breaks=null,r.hasTimeData=!1,r.labelFormatFunction=function(e,t,n){return r.hasTimeData?p.formatDateLabel(e):r.defaultLabelFormatFunction(e)},r}return n(t,e),Object.defineProperty(t.prototype,"max",{get:function(){var e=this.breaks;return e&&e.length?e[e.length-1].max:null},set:function(e){var t=this,r=t.breaks,n=t.max,a=t.min;!isNaN(e)&&n!==e&&o.isSome(a)&&e>a&&r&&r.length&&(r[r.length-1].max=e),this.setMax(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){var e=this.breaks;return e&&e.length?e[0].min:null},set:function(e){var t=this,r=t.breaks,n=t.max,a=t.min;!isNaN(e)&&a!==e&&o.isSome(n)&&e<n&&r&&r.length&&(r[0].min=e),this.setMin(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){var e=this,t=e.max,r=e.min,n=e.values;return o.isSome(t)&&o.isSome(r)&&n.length?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.breaks;if(!e||!e.length)return[];for(var t=[],r=0;r<e.length-1;r++)t.push(e[r].max);return t},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this,n=r.max,a=r.min;t>n||t<a||(this._updateBreakInfos(t,e),this.notifyChange("values"),this.notifyChange("labels"))},t.prototype._updateBreakInfos=function(e,t){var r=this.breaks;r[t].max=e,r[t].min>r[t].max&&(r[t].min=e),o.isSome(r[t+1])&&(r[t+1].min=e)},a([i.property()],t.prototype,"breaks",void 0),a([i.property()],t.prototype,"hasTimeData",void 0),a([i.property()],t.prototype,"labelFormatFunction",void 0),a([i.property({dependsOn:["breaks"]})],t.prototype,"max",null),a([i.property({dependsOn:["breaks"]})],t.prototype,"min",null),a([i.property({dependsOn:["max","min","values"],readOnly:!0})],t.prototype,"state",null),a([i.property({dependsOn:["breaks"],readOnly:!0})],t.prototype,"values",null),t=a([i.subclass("esri.widgets.smartMapping.ClassedSizeSlider.ClassedSizeSliderViewModel")],t)}(i.declared(s))});