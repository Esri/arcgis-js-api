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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel","../support/utils"],(function(t,e,r,o,n,i,s){return function(t){function e(e){var r=t.call(this,e)||this;return r._initialValues=[],r}return r.__extends(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){this._initialValues=t.map((function(t){return t.value})),this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;return!t||!t.length||t.length<2?[]:[t[0].value,t[t.length-1].value]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var r=this.max,o=this.min,n=this.stops;if(!(e>r||e<o)&&e!==n[t].value){var i=this.values,a=0===t?0:n.length-1,l=0===t?o:i[t-1],u=t===i.length-1?r:i[t+1],p=Math.max(Math.min(e,u),l),c=0===a?p:n[0].value,h=0===a?n[n.length-1].value:p;s.getStopChanges(c,h,this._initialValues).forEach((function(t,e){n[e].value=t.value})),this.notifyChange("values"),this.notifyChange("labels")}},e.prototype.getStopInfo=function(t){var e=this.min,n=this.max,i=this.stops;if(!i||!i.length)return[];var s=this._getColorForStops(t).toRgb();return i.map((function(t){return{color:new o(r.__spreadArrays(s,[t.opacity])),offset:(n-t.value)/(n-e)}}))},e.prototype._getColorForStops=function(t){return t?t instanceof o?t:o.fromString(t):null},r.__decorate([n.property()],e.prototype,"stops",null),r.__decorate([n.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=r.__decorate([n.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],e)}(i)}));