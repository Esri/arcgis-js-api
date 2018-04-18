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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../Color","../../../core/numberUtils","../../../symbols/support/gfxUtils","./utils"],function(e,r,n,t,o,l){function u(e){var r=null;if("simple"===e.type)r=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var n=e.classBreakInfos||e.uniqueValueInfos,t=n&&n[0];r=t&&t.symbol}var l=r&&-1===r.type.indexOf("line-symbol")?o.getStroke(r):null,u=l&&l.color;return u&&u.a>0&&!(u.r>=240&&u.g>=240&&u.b>=240)?u:null}function a(e){var r=new n(b);return r.a=1-e,r}function i(e,r,n){var o=!1,u=[],a=[];if(r.colors||r.opacityValues)u=f(r.minDataValue,r.maxDataValue);else if(r.stops){var i=r.stops;u=i.map(function(e){return e.value}),o=i.some(function(e){return!!e.label}),o&&(a=i.map(function(e){return e.label}))}var s=u[0],v=u[u.length-1];if(null==s&&null==v)return null;var p=v-s;return u.map(function(i,f){return{value:i,color:"opacity"===r.type?c(i,r,e,n):e.getColor(i,{colorInfo:r}),label:o?a[f]:l.getLabelPrefix(f,u.length-1)+t.format(i),offset:p?1-(i-s)/p:1}}).reverse()}function f(e,r){var n=r-e,t=[0,.25,.5,.75,1].map(function(r){var t=e+r*n;return Number(t.toFixed(6))});return s(0,4,t),t}function s(e,r,n){var t=e+(r-e)/2,o=n[0],l=n[1],u=n[2],a=Math.floor(o),i=Math.floor(l),f=Math.floor(u);a===o&&f===u&&i!==l&&a!==i&&f!==i&&(n[t]=i),e+1!==t&&s(e,t,n),t+1!==r&&s(t,r,n)}function c(e,r,t,o){void 0===o&&(o=g);var l=new n(o),u=t.getOpacity(e,{opacityInfo:r});return null!=u&&(l.a=u),l}function v(e){var r=!1,n=[],o=[];n=e.map(function(e){return e.value}),(r=e.some(function(e){return!!e.label}))&&(o=e.map(function(e){return e.label}));var u=n[0],a=n[n.length-1];if(null==u&&null==a)return null;var i=a-u;return n.map(function(a,f){return{value:a,color:p(a,e),label:r?o[f]:l.getLabelPrefix(f,n.length-1)+t.format(a),offset:i?1-(a-u)/i:1}}).reverse()}function p(e,r){var t=m(e,r),o=t.startIndex,l=t.endIndex,u=t.weight;if(o===l)return r[o].color;var a=n.blendColors(r[o].color,r[l].color,u);return new n(a)}function m(e,r){var n=0,t=r.length-1;return r.some(function(r,o){return e<r.value?(t=o,!0):(n=o,!1)}),{startIndex:n,endIndex:t,weight:(e-r[n].value)/(r[t].value-r[n].value)}}Object.defineProperty(r,"__esModule",{value:!0});var g=[64,64,64],b=[255,255,255];r.getRampBorderColor=u,r.getRampOverlayColor=a,r.getRampStops=i,r.getRampStopsForPointCloud=v,r.getColorFromPointCloudStops=p});