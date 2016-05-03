// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../Color","../../../core/numberUtils","../../../symbols/support/gfxUtils"],function(e,o,t){var r=[64,64,64],n=[255,255,255],a="<",l=">",i={_getRampStops:function(t,n,i){var s,u,c,f,p=!1;n.colors||n.opacityValues?(c=n.maxDataValue-n.minDataValue,s=[0,.25,.5,.75,1].map(function(e){var o=n.minDataValue+e*c;return Number(o.toFixed(6))}),this._checkPrecision(0,4,s)):n.stops&&(s=n.stops.map(function(e){return e.value}),p=n.stops.some(function(e){return!!e.label}),p&&(f=n.stops.map(function(e){return e.label})));var m,y,h,v=s[0],b=s[s.length-1];return c=b-v,u=s.map(function(u,b){return"opacity"===n.type?(m=new e(i||r),y=t.getOpacity(u,{opacityInfo:n}),null!=y&&(m.a=y)):m=t.getColor(u,{colorInfo:n}),h="",0===b?h=a+" ":b===s.length-1&&(h=l+" "),{value:u,color:m,offset:1-(u-v)/c,label:p?f[b]:h+o.format(u)}},this),u.reverse()},_checkPrecision:function(e,o,t){var r=e+(o-e)/2,n=t[e],a=t[r],l=t[o],i=Math.floor(n),s=Math.floor(a),u=Math.floor(l);i===n&&u===l&&s!==a&&i!==s&&u!==s&&(t[r]=s),e+1!==r&&this._checkPrecision(e,r,t),r+1!==o&&this._checkPrecision(r,o,t)},_getRampBorderColor:function(e){var o,r,n;if("simple"===e.type)o=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var a=e.classBreakInfos||e.uniqueValueInfos,l=a&&a[0];o=l&&l.symbol}r=o&&-1===o.type.indexOf("line-symbol")?t.getStroke(o):null,n=r&&r.color;var i=n&&n.a>0&&!(n.r>=240&&n.g>=240&&n.b>=240);return i?n:null},_getRampOverlayColor:function(o){var t=new e(n);return t.a=1-o,t}};return i});