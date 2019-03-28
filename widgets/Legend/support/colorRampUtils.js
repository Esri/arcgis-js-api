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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../Color","../../../core/numberUtils","../../../symbols/support/gfxUtils","./utils"],function(e,r,n,t,l,o){function u(e){var r=null;if("simple"===e.type)r=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var n=e.classBreakInfos||e.uniqueValueInfos,t=n&&n[0];r=t&&t.symbol}var o=r&&-1===r.type.indexOf("line-symbol")?l.getStroke(r):null,u=o&&o.color;return u&&u.a>0&&!(u.r>=240&&u.g>=240&&u.b>=240)?u:null}function a(e){var r=new n(m);return r.a=1-e,r}function i(e,r,n){var l=!1,u=[],a=[];if(r.stops){var i=r.stops;u=i.map(function(e){return e.value}),l=i.some(function(e){return!!e.label}),l&&(a=i.map(function(e){return e.label}))}var s=u[0],c=u[u.length-1];if(null==s&&null==c)return null;var v=c-s;return u.map(function(i,c){return{value:i,color:"opacity"===r.type?f(i,r,e,n):e.getColor(i,{colorInfo:r}),label:l?a[c]:o.getLabelPrefix(c,u.length-1)+t.format(i),offset:v?1-(i-s)/v:1}}).reverse()}function f(e,r,t,l){void 0===l&&(l=p);var o=new n(l),u=t.getOpacity(e,{opacityInfo:r});return null!=u&&(o.a=u),o}function s(e){var r=!1,n=[],l=[];n=e.map(function(e){return e.value}),(r=e.some(function(e){return!!e.label}))&&(l=e.map(function(e){return e.label}));var u=n[0],a=n[n.length-1];if(null==u&&null==a)return null;var i=a-u;return n.map(function(a,f){return{value:a,color:c(a,e),label:r?l[f]:o.getLabelPrefix(f,n.length-1)+t.format(a),offset:i?1-(a-u)/i:1}}).reverse()}function c(e,r){var t=v(e,r),l=t.startIndex,o=t.endIndex,u=t.weight;if(l===o)return r[l].color;var a=n.blendColors(r[l].color,r[o].color,u);return new n(a)}function v(e,r){var n=0,t=r.length-1;return r.some(function(r,l){return e<r.value?(t=l,!0):(n=l,!1)}),{startIndex:n,endIndex:t,weight:(e-r[n].value)/(r[t].value-r[n].value)}}Object.defineProperty(r,"__esModule",{value:!0});var p=[64,64,64],m=[255,255,255];r.getRampBorderColor=u,r.getRampOverlayColor=a,r.getRampStops=i,r.getRampStopsForPointCloud=s,r.getColorFromPointCloudStops=c});