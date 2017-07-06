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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../Color","./utils","../../../core/numberUtils","../../../symbols/support/gfxUtils"],function(e,r,o,t,n,l){function a(e){var r=null;if("simple"===e.type)r=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var o=e.classBreakInfos||e.uniqueValueInfos,t=o&&o[0];r=t&&t.symbol}var n=r&&-1===r.type.indexOf("line-symbol")?l.getStroke(r):null,a=n&&n.color,u=a&&a.a>0&&!(a.r>=240&&a.g>=240&&a.b>=240);return u?a:null}function u(e){var r=new o(v);return r.a=1-e,r}function i(e,r,o){var l=!1,a=[],u=[];if(r.colors||r.opacityValues)a=f(r.minDataValue,r.maxDataValue);else if(r.stops){var i=r.stops;a=i.map(function(e){return e.value}),l=i.some(function(e){return!!e.label}),l&&(u=i.map(function(e){return e.label}))}var s=a[0],p=a[a.length-1];if(null==s&&null==p)return null;var v=p-s,m=a.map(function(i,f){var p="opacity"===r.type?c(i,r,e,o):e.getColor(i,{colorInfo:r}),m=l?u[f]:t.getLabelPrefix(f,a.length-1)+n.format(i);return{value:i,color:p,label:m,offset:v?1-(i-s)/v:1}});return m.reverse()}function f(e,r){var o=r-e,t=[0,.25,.5,.75,1].map(function(r){var t=e+r*o;return Number(t.toFixed(6))});return s(0,4,t),t}function s(e,r,o){var t=e+(r-e)/2,n=o[0],l=o[1],a=o[2],u=Math.floor(n),i=Math.floor(l),f=Math.floor(a);u===n&&f===a&&i!==l&&u!==i&&f!==i&&(o[t]=i),e+1!==t&&s(e,t,o),t+1!==r&&s(t,r,o)}function c(e,r,t,n){void 0===n&&(n=p);var l=new o(n),a=t.getOpacity(e,{opacityInfo:r});return null!=a&&(l.a=a),l}Object.defineProperty(r,"__esModule",{value:!0});var p=[64,64,64],v=[255,255,255];r.getRampBorderColor=a,r.getRampOverlayColor=u,r.getRampStops=i});