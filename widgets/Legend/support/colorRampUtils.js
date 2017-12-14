// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../Color","./utils","../../../core/numberUtils","../../../symbols/support/gfxUtils"],function(e,r,n,t,o,l){function a(e){var r=null;if("simple"===e.type)r=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var n=e.classBreakInfos||e.uniqueValueInfos,t=n&&n[0];r=t&&t.symbol}var o=r&&-1===r.type.indexOf("line-symbol")?l.getStroke(r):null,a=o&&o.color,u=a&&a.a>0&&!(a.r>=240&&a.g>=240&&a.b>=240);return u?a:null}function u(e){var r=new n(b);return r.a=1-e,r}function i(e,r,n){var l=!1,a=[],u=[];if(r.colors||r.opacityValues)a=f(r.minDataValue,r.maxDataValue);else if(r.stops){var i=r.stops;a=i.map(function(e){return e.value}),l=i.some(function(e){return!!e.label}),l&&(u=i.map(function(e){return e.label}))}var s=a[0],v=a[a.length-1];if(null==s&&null==v)return null;var p=v-s,m=a.map(function(i,f){var v="opacity"===r.type?c(i,r,e,n):e.getColor(i,{colorInfo:r}),m=l?u[f]:t.getLabelPrefix(f,a.length-1)+o.format(i);return{value:i,color:v,label:m,offset:p?1-(i-s)/p:1}});return m.reverse()}function f(e,r){var n=r-e,t=[0,.25,.5,.75,1].map(function(r){var t=e+r*n;return Number(t.toFixed(6))});return s(0,4,t),t}function s(e,r,n){var t=e+(r-e)/2,o=n[0],l=n[1],a=n[2],u=Math.floor(o),i=Math.floor(l),f=Math.floor(a);u===o&&f===a&&i!==l&&u!==i&&f!==i&&(n[t]=i),e+1!==t&&s(e,t,n),t+1!==r&&s(t,r,n)}function c(e,r,t,o){void 0===o&&(o=g);var l=new n(o),a=t.getOpacity(e,{opacityInfo:r});return null!=a&&(l.a=a),l}function v(e){var r=!1,n=[],l=[];n=e.map(function(e){return e.value}),r=e.some(function(e){return!!e.label}),r&&(l=e.map(function(e){return e.label}));var a=n[0],u=n[n.length-1];if(null==a&&null==u)return null;var i=u-a,f=n.map(function(u,f){var s=p(u,e),c=r?l[f]:t.getLabelPrefix(f,n.length-1)+o.format(u);return{value:u,color:s,label:c,offset:i?1-(u-a)/i:1}});return f.reverse()}function p(e,r){var t=m(e,r),o=t.startIndex,l=t.endIndex,a=t.weight;if(o===l)return r[o].color;var u=n.blendColors(r[o].color,r[l].color,a);return new n(u)}function m(e,r){var n=0,t=r.length-1;return r.some(function(r,o){return e<r.value?(t=o,!0):(n=o,!1)}),{startIndex:n,endIndex:t,weight:(e-r[n].value)/(r[t].value-r[n].value)}}Object.defineProperty(r,"__esModule",{value:!0});var g=[64,64,64],b=[255,255,255];r.getRampBorderColor=a,r.getRampOverlayColor=u,r.getRampStops=i,r.getRampStopsForPointCloud=v,r.getColorFromPointCloudStops=p});