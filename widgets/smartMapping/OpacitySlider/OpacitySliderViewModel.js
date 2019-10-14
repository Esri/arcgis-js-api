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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/accessorSupport/decorators","../SmartMappingSliderViewModel","../support/utils"],function(t,e,r,o,n,i,a,s){return function(t){function e(e){var r=t.call(this)||this;return r._initialValues=[],r}return r(e,t),Object.defineProperty(e.prototype,"stops",{set:function(t){this._initialValues=t.map(function(t){return t.value}),this._set("stops",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"values",{get:function(){var t=this.stops;return!t||!t.length||t.length<2?[]:[t[0].value,t[t.length-1].value]},enumerable:!0,configurable:!0}),e.prototype.setValue=function(t,e){var r=this,o=r.max,n=r.min,i=r.stops;if(!(e>o||e<n)){if(e!==i[t].value){var a=this.values,l=0===t?0:i.length-1,p=0===t?n:a[t-1],u=t===a.length-1?o:a[t+1],c=Math.max(Math.min(e,u),p),f=0===l?c:i[0].value,h=0===l?i[i.length-1].value:c;s.getStopChanges(l,c,f,h,this._initialValues).forEach(function(t,e){i[e].value=t.value}),this.notifyChange("values"),this.notifyChange("labels")}}},e.prototype.getStopInfo=function(t){var e=this,r=e.min,o=e.max,i=e.stops;if(!i||!i.length)return[];var a=this._getColorForStops(t).toRgb();return i.map(function(t){return{color:new n(a.concat([t.opacity])),offset:(o-t.value)/(o-r)}})},e.prototype._getColorForStops=function(t){return t?t instanceof n?t:n.fromString(t):null},o([i.property()],e.prototype,"stops",null),o([i.property({dependsOn:["stops"],readOnly:!0})],e.prototype,"values",null),e=o([i.subclass("esri.widgets.smartMapping.OpacitySlider.OpacitySliderViewModel")],e)}(i.declared(a))});