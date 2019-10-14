// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../kernel","../lang","./Point","./Polyline","./Polygon","./Multipoint","./Extent"],function(n,e,t,i,r,o,u,a,l){function s(n){return void 0!==n.x&&void 0!==n.y?new r(n):void 0!==n.paths?new o(n):void 0!==n.rings?new u(n):void 0!==n.points?new a(n):void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax?new l(n):void 0}function c(n){return n instanceof r?d:n instanceof o?p:n instanceof u?G:n instanceof l?h:n instanceof a?P:null}function f(n){return n===d?r:n===p?o:n===G?u:n===h?l:n===P?a:null}function y(n,e,t){return n.x=e(n.x),n.y=t(n.y),n}function m(n,e,t){var i,r,o,u,a,l,s,c,f=n.rings||n.paths;for(i=0,r=f.length;i<r;i++)for(a=f[i],o=0,u=a.length;o<u;o++)l=a[o],o>0?(s+=l[0],c+=l[1]):(s=l[0],c=l[1]),l[0]=e(s),l[1]=t(c);return n}function v(n,e,t){return n.xmin=e(n.xmin),n.ymin=t(n.ymin),n.xmax=e(n.xmax),n.ymax=t(n.ymax),n}function x(n,e,t){var i,r,o,u,a,l=n.points;for(i=0,r=l.length;i<r;i++)o=l[i],i>0?(u+=o[0],a+=o[1]):(u=o[0],a=o[1]),o[0]=e(u),o[1]=t(a);return n}function g(n,e,t){return n.x=e(n.x),n.y=t(n.y),n}var d="esriGeometryPoint",p="esriGeometryPolyline",G="esriGeometryPolygon",h="esriGeometryEnvelope",P="esriGeometryMultipoint",z={esriGeometryPoint:y,esriGeometryPolyline:m,esriGeometryPolygon:m,esriGeometryEnvelope:v,esriGeometryMultipoint:x},q={esriGeometryPoint:g},w={createInstance:function(n,e){var t=new n;return e&&i.mixin(t,e),t},fromJson:s,getJsonType:c,getGeometryType:f,supportsLazyUnquantization:function(n){return n===d||n===p||n===G||n===P},unquantizeFunction:function(n,e){if(n&&e){var t=e.translate[0],i=e.translate[1],r=e.scale[0],o=e.scale[1],u=function(n){return n*r+t},a=function(n){return i-n*o},l=z[n];return function(n){return n?l(n,u,a):null}}},unquantize:function(n,e,t){var i=w.unquantizeFunction(e,t);if(i){var r,o=n.length;for(r=0;r<o;r++)i(n[r].geometry)}},quantizeFunction:function(n,e){if(n&&n===d&&e){var t=e.translate[0],i=e.translate[1],r=e.scale[0],o=e.scale[1],u=function(n){return Math.round((n-t)/r)},a=function(n){return Math.round((i-n)/o)},l=q[n];return function(n){return n?l(n,u,a):null}}},quantize:function(n,e,t){var i=w.quantizeFunction(e,t);if(i){var r,o=n.length;for(r=0;r<o;r++)i(n[r].geometry)}}};return e("extend-esri")&&n.mixin(n.getObject("geometry",!0,t),w),w});