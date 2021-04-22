// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","../lang","./Point","./Polyline","./Polygon","./Multipoint","./Extent"],(function(n,e,t,o,r,i,u,a,y){function s(n,e,t){var o,r,i,u,a,y,s,l,m=n.rings||n.paths;for(o=0,r=m.length;o<r;o++)for(i=0,u=(a=m[o]).length;i<u;i++)y=a[i],i>0?(s+=y[0],l+=y[1]):(s=y[0],l=y[1]),y[0]=e(s),y[1]=t(l);return n}var l={esriGeometryPoint:function(n,e,t){return n.x=e(n.x),n.y=t(n.y),n},esriGeometryPolyline:s,esriGeometryPolygon:s,esriGeometryEnvelope:function(n,e,t){return n.xmin=e(n.xmin),n.ymin=t(n.ymin),n.xmax=e(n.xmax),n.ymax=t(n.ymax),n},esriGeometryMultipoint:function(n,e,t){var o,r,i,u,a,y=n.points;for(o=0,r=y.length;o<r;o++)i=y[o],o>0?(u+=i[0],a+=i[1]):(u=i[0],a=i[1]),i[0]=e(u),i[1]=t(a);return n}};var m={esriGeometryPoint:function(n,e,t){return n.x=e(n.x),n.y=t(n.y),n}},c={createInstance:function(n,e){var t=new n;return e&&o.mixin(t,e),t},fromJson:function(n){return void 0!==n.x&&void 0!==n.y?new r(n):void 0!==n.paths?new i(n):void 0!==n.rings?new u(n):void 0!==n.points?new a(n):void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax?new y(n):void 0},getJsonType:function(n){return n instanceof r?"esriGeometryPoint":n instanceof i?"esriGeometryPolyline":n instanceof u?"esriGeometryPolygon":n instanceof y?"esriGeometryEnvelope":n instanceof a?"esriGeometryMultipoint":null},getGeometryType:function(n){return"esriGeometryPoint"===n?r:"esriGeometryPolyline"===n?i:"esriGeometryPolygon"===n?u:"esriGeometryEnvelope"===n?y:"esriGeometryMultipoint"===n?a:null},supportsLazyUnquantization:function(n){return"esriGeometryPoint"===n||"esriGeometryPolyline"===n||"esriGeometryPolygon"===n||"esriGeometryMultipoint"===n},unquantizeFunction:function(n,e){if(n&&e){var t=e.translate[0],o=e.translate[1],r=e.scale[0],i=e.scale[1],u=function(n){return n*r+t},a=function(n){return o-n*i},y=l[n];return function(n){return n?y(n,u,a):null}}},unquantize:function(n,e,t){var o=c.unquantizeFunction(e,t);if(o){var r,i=n.length;for(r=0;r<i;r++)o(n[r].geometry)}},quantizeFunction:function(n,e){if(n&&"esriGeometryPoint"===n&&e){var t=e.translate[0],o=e.translate[1],r=e.scale[0],i=e.scale[1],u=function(n){return Math.round((n-t)/r)},a=function(n){return Math.round((o-n)/i)},y=m[n];return function(n){return n?y(n,u,a):null}}},quantize:function(n,e,t){var o=c.quantizeFunction(e,t);if(o){var r,i=n.length;for(r=0;r<i;r++)o(n[r].geometry)}}};return e("extend-esri")&&n.mixin(n.getObject("geometry",!0,t),c),c}));