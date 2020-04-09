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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel","../support/utils"],(function(t,e,r,o,n,i,s,a){return function(t){function e(e){var r=t.call(this,e)||this;return r._initialValues=[],r}return r(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){this._initialValues=t.map((function(t){return t.value})),this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;return!t||!t.length||t.length<2?[]:[t[0].value,t[t.length-1].value]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var r=this.max,o=this.min,n=this.stops;if(!(e>r||e<o)&&e!==n[t].value){var i=this.values,s=0===t?0:n.length-1,l=0===t?o:i[t-1],p=t===i.length-1?r:i[t+1],u=Math.max(Math.min(e,p),l),c=0===s?u:n[0].value,h=0===s?n[n.length-1].value:u;a.getStopChanges(c,h,this._initialValues).forEach((function(t,e){n[e].value=t.value})),this.notifyChange("values"),this.notifyChange("labels")}},e.prototype.getStopInfo=function(t){var e=this.min,r=this.max,o=this.stops;if(!o||!o.length)return[];var i=this._getColorForStops(t).toRgb();return o.map((function(t){return{color:new n(i.concat([t.opacity])),offset:(r-t.value)/(r-e)}}))},e.prototype._getColorForStops=function(t){return t?t instanceof n?t:n.fromString(t):null},o([i.property()],e.prototype,"stops",null),o([i.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=o([i.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],e)}(i.declared(s))}));