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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../Color","../../../core/numberUtils","../../../symbols/support/gfxUtils"],function(e,o,t){var r=[64,64,64],n=[255,255,255],l="<",a=">",u={getRampStops:function(t,n,u){var i,s,c,f,p=!1;n.colors||n.opacityValues?(c=n.maxDataValue-n.minDataValue,i=[0,.25,.5,.75,1].map(function(e){var o=n.minDataValue+e*c;return Number(o.toFixed(6))}),this._checkPrecision(0,4,i)):n.stops&&(i=n.stops.map(function(e){return e.value}),p=n.stops.some(function(e){return!!e.label}),p&&(f=n.stops.map(function(e){return e.label})));var m,y,h,v=i[0],b=i[i.length-1];return null==v&&null==b?null:(c=b-v,s=i.map(function(s,b){return"opacity"===n.type?(m=new e(u||r),y=t.getOpacity(s,{opacityInfo:n}),null!=y&&(m.a=y)):m=t.getColor(s,{colorInfo:n}),h="",0===b?h=l+" ":b===i.length-1&&(h=a+" "),{value:s,color:m,offset:c?1-(s-v)/c:1,label:p?f[b]:h+o.format(s)}},this),s.reverse())},_checkPrecision:function(e,o,t){var r=e+(o-e)/2,n=t[e],l=t[r],a=t[o],u=Math.floor(n),i=Math.floor(l),s=Math.floor(a);u===n&&s===a&&i!==l&&u!==i&&s!==i&&(t[r]=i),e+1!==r&&this._checkPrecision(e,r,t),r+1!==o&&this._checkPrecision(r,o,t)},getRampBorderColor:function(e){var o,r,n;if("simple"===e.type)o=e.symbol;else if("uniqueValue"===e.type||"classBreaks"===e.type){var l=e.classBreakInfos||e.uniqueValueInfos,a=l&&l[0];o=a&&a.symbol}r=o&&-1===o.type.indexOf("line-symbol")?t.getStroke(o):null,n=r&&r.color;var u=n&&n.a>0&&!(n.r>=240&&n.g>=240&&n.b>=240);return u?n:null},getRampOverlayColor:function(o){var t=new e(n);return t.a=1-o,t}};return u});