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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/utils","../SmartMappingSliderViewModel"],function(e,t,r,n,o,a,i,l,s){return function(e){function t(t){var r=e.call(this)||this;return r.handlesSyncedToPrimary=!0,r}return n(t,e),Object.defineProperty(t.prototype,"primaryHandleEnabled",{get:function(){var e=this.stops;if(!e||!e.length)return!1;var t=e.length;return(3===t||5===t)&&this._get("primaryHandleEnabled")},set:function(e){this._set("primaryHandleEnabled",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map(function(e){return e.value}),n=this,o=n.max,i=n.min,l={};a.isSome(i)&&t.some(function(e){return e<i})&&(l.min=Math.min.apply(Math,t)),a.isSome(o)&&t.some(function(e){return e>o})&&(l.max=Math.max.apply(Math,t)),this.set(r({},l))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this,t=e.primaryHandleEnabled,r=e.stops;if(!r||!r.length||r.length<2)return[];var n=r.map(function(e){return e.value});return t?3===n.length?[n[0],n[1],n[2]]:[n[0],n[2],n[4]]:[n[0],n[n.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var r=this,n=r.precision,o=r.values,a=o[e];if(t=parseFloat(t.toFixed(n)),a!==t){var i=this,l=i.max,s=i.min;if(!(t>l||t<s)){if(this.primaryHandleEnabled){var p=o[1];0===e&&t>p?t=p:2===e&&t<p&&(t=p)}var u=this._getColorStopChanges(e,t);this._updateColorStops(u),this.notifyChange("values"),this.notifyChange("labels")}}},t.prototype.getStopInfo=function(){var e=this,t=e.min,r=e.max,n=e.stops;return n&&n.length?n.map(function(e){return{color:e.color,offset:(r-e.value)/(r-t)}}):[]},t.prototype._getStopIndexFromValueIndex=function(e){var t=this,r=t.primaryHandleEnabled,n=t.stops;return 0===e?0:r&&1===e?2:n.length-1},t.prototype._getColorStopChanges=function(e,t){return this.primaryHandleEnabled?1===e?this._getColorStopChangesAfterPrimaryHandleMove(e,t):this._getColorStopChangesAfterSecondaryHandleMove(e,t):this._getColorStopChangesAfterHandleMove(e,t)},t.prototype._getColorStopChangesAfterPrimaryHandleMove=function(e,t){var r=this,n=r.handlesSyncedToPrimary,o=r.stops,a=r.values,i=this._getStopIndexFromValueIndex(e);if(n){var l=this,s=l.max,p=l.min,u=t-a[e],d=Math.max(Math.min(a[0]+u,s),p),h=Math.max(Math.min(a[2]+u,s),p);return 5===o.length?[{index:0,value:d},{index:1,value:(t+d)/2},{index:2,value:t},{index:3,value:(t+h)/2},{index:4,value:h}]:[{index:0,value:d},{index:1,value:t},{index:2,value:h}]}return 5===o.length?[{index:1,value:(a[1]+a[0])/2},{index:2,value:t},{index:3,value:(a[1]+a[2])/2}]:[{index:i,value:t}]},t.prototype._getColorStopChangesAfterSecondaryHandleMove=function(e,t){var r=this,n=r.stops,o=r.values,a=this._getStopIndexFromValueIndex(e);if(5===n.length){return[{index:a,value:t},{index:0===a?1:3,value:(t+o[1])/2}]}return[{index:a,value:t}]},t.prototype._getColorStopChangesAfterHandleMove=function(e,t){var r=this,n=r.max,o=r.min,a=r.stops,i=r.values,l=this._getStopIndexFromValueIndex(e),s=0===e?o:i[e-1],p=e===i.length-1?n:i[e+1],u=a.map(function(e){return e.value});u[l]=Math.max(Math.min(t,p),s);var d=u[u.length-1]-u[0],h=a.length-1;return u.map(function(e,t){return{index:t,value:u[0]+t*d/h}})},t.prototype._updateColorStops=function(e){var t=this,r=t.hasTimeData,n=t.stops;l.updateColorStops({changes:e,stops:n,isDate:r})},o([i.property()],t.prototype,"handlesSyncedToPrimary",void 0),o([i.property({dependsOn:["stops"]})],t.prototype,"primaryHandleEnabled",null),o([i.property()],t.prototype,"stops",null),o([i.property({dependsOn:["primaryHandleEnabled","stops"],readOnly:!0})],t.prototype,"values",null),t=o([i.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],t)}(i.declared(s))});