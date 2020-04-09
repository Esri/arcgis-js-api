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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel"],(function(e,t,r,n,o,a,i,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.zoomingEnabled=!1,r}return n(t,e),Object.defineProperty(t.prototype,"breaks",{set:function(e){this._set("breaks",e),this.notifyChange("max"),this.notifyChange("min")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){var e=this.breaks;return e&&e.length?e[e.length-1].max:null},set:function(e){this._updateBreakMax(e),this.setMax(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){var e=this.breaks;return e&&e.length?e[0].min:null},set:function(e){this._updateBreakMin(e),this.setMin(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.breaks;if(!e||!e.length)return[];var t=e.map((function(e){return e.max}));return t.pop(),t},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this.max,n=this.min;t>r||t<n||(this._updateBreakInfos(t,e),this.notifyChange("values"),this.notifyChange("labels"))},t.prototype.getStopInfo=function(){var e=this.breaks,t=this.max,r=this.min,n=t-r;if(!e||!e.length||!n)return[];var o=[];return e.forEach((function(e){var a,i,s=e.color,p=e.max,l=e.min;t===r?a=i=0:(a=(t-l)/n,i=(t-p)/n),o.push({offset:a,color:s},{offset:i,color:s})})),o},t.prototype._updateBreakMax=function(e){var t=this.breaks,r=this.max,n=this.min;!isNaN(e)&&r!==e&&a.isSome(n)&&e>n&&t&&t.length&&(t[t.length-1].max=e)},t.prototype._updateBreakMin=function(e){var t=this.breaks,r=this.max,n=this.min;!isNaN(e)&&n!==e&&a.isSome(r)&&e<r&&t&&t.length&&(t[0].min=e)},t.prototype._updateBreakInfos=function(e,t){var r=this.breaks;r[t].max=e,r[t].min>r[t].max&&(r[t].min=e),a.isSome(r[t+1])&&(r[t+1].min=e)},o([i.property()],t.prototype,"breaks",null),o([i.property({dependsOn:["breaks"]})],t.prototype,"max",null),o([i.property({dependsOn:["breaks"]})],t.prototype,"min",null),o([i.property({dependsOn:["breaks"],readOnly:!0})],t.prototype,"values",null),o([i.property({readOnly:!0})],t.prototype,"zoomingEnabled",void 0),t=o([i.subclass("esri.widgets.smartMapping.ClassedColorSlider.ClassedColorSliderViewModel")],t)}(i.declared(s))}));