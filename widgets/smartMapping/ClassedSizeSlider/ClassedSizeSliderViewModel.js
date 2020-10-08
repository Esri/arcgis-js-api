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

define(["require","exports","tslib","../../../core/maybe","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel"],(function(e,t,r,n,a,i){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.breaks=null,r.zoomingEnabled=!1,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"max",{get:function(){var e=this.breaks;return e&&e.length?e[e.length-1].max:null},set:function(e){this._updateBreakMax(e),this.setMax(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){var e=this.breaks;return e&&e.length?e[0].min:null},set:function(e){this._updateBreakMin(e),this.setMin(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this.breaks;if(!e||!e.length)return[];for(var t=[],r=0;r<e.length-1;r++)t.push(e[r].max);return t},enumerable:!1,configurable:!0}),t.prototype.setValue=function(e,t){var r=this.max,n=this.min;t>r||t<n||(this._updateBreakInfos(t,e),this.notifyChange("values"),this.notifyChange("labels"))},t.prototype._updateBreakMax=function(e){var t=this.breaks,r=this.max,a=this.min;!isNaN(e)&&r!==e&&n.isSome(a)&&e>a&&t&&t.length&&(t[t.length-1].max=e)},t.prototype._updateBreakMin=function(e){var t=this.breaks,r=this.max,a=this.min;!isNaN(e)&&a!==e&&n.isSome(r)&&e<r&&t&&t.length&&(t[0].min=e)},t.prototype._updateBreakInfos=function(e,t){var r=this.breaks;r[t].max=e,r[t].min>r[t].max&&(r[t].min=e),n.isSome(r[t+1])&&(r[t+1].min=e)},r.__decorate([a.property()],t.prototype,"breaks",void 0),r.__decorate([a.property({dependsOn:["breaks"]})],t.prototype,"max",null),r.__decorate([a.property({dependsOn:["breaks"]})],t.prototype,"min",null),r.__decorate([a.property({dependsOn:["breaks"],readOnly:!0})],t.prototype,"values",null),t=r.__decorate([a.subclass("esri.widgets.smartMapping.ClassedSizeSlider.ClassedSizeSliderViewModel")],t)}(i)}));