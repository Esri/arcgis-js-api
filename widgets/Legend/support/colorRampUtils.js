// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","../../../core/promiseUtils","./utils","@dojo/framework/shim/Promise"],(function(e,r,t,n,o,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getStrectchRampStops=r.getColorFromPointCloudStops=r.getRampStopsForPointCloud=r.getRampStops=void 0;var u=new n([64,64,64]);function a(e,r){var t=[],n=e.length-1;return 5===e.length?t.push(0,2,4):t.push(0,n),e.map((function(e,o){return t.indexOf(o)>-1?l.createStopLabel(e,o,n,r):null}))}function i(r,o,l){return void 0===l&&(l=u),t.__awaiter(this,void 0,void 0,(function(){var u,a;return t.__generator(this,(function(t){switch(t.label){case 0:return u=new n(l),[4,new Promise((function(r,t){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,t)}))];case 1:return null!=(a=t.sent().getOpacity(o,r))&&(u.a=a),[2,u]}}))}))}function s(e,r){var t=function(e,r){var t=0,n=r.length-1;return r.some((function(r,o){return e<r.value?(n=o,!0):(t=o,!1)})),{startIndex:t,endIndex:n,weight:(e-r[t].value)/(r[n].value-r[t].value)}}(e,r),o=t.startIndex,l=t.endIndex,u=t.weight;if(o===l)return r[o].color;var a=n.blendColors(r[o].color,r[l].color,u);return new n(a)}r.getRampStops=function(r,n,l){return t.__awaiter(this,void 0,void 0,(function(){var u,s,c,p,v,f,m,h=this;return t.__generator(this,(function(d){switch(d.label){case 0:return u=!1,s=[],c=[],r.stops&&(p=r.stops,s=p.map((function(e){return e.value})),(u=p.some((function(e){return!!e.label})))&&(c=p.map((function(e){return e.label})))),v=s[0],f=s[s.length-1],null==v&&null==f?[2,null]:(m=u?null:a(s,l),[4,o.all(s.map((function(o,l){return t.__awaiter(h,void 0,void 0,(function(){var a,s,p;return t.__generator(this,(function(t){switch(t.label){case 0:return"opacity"!==r.type?[3,2]:[4,i(o,r,n)];case 1:return s=t.sent(),[3,4];case 2:return[4,new Promise((function(r,t){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,t)}))];case 3:s=t.sent().getColor(r,o),t.label=4;case 4:return a=s,p=u?c[l]:m[l],[2,{value:o,color:a,label:p}]}}))}))})))]);case 1:return[2,d.sent().reverse()]}}))}))},r.getRampStopsForPointCloud=function(e){var r,t=[],n=[];t=e.map((function(e){return e.value})),(r=e.some((function(e){return!!e.label})))&&(n=e.map((function(e){return e.label})));var o=t[0],l=t[t.length-1];if(null==o&&null==l)return null;var u=r?null:a(t,!1);return t.map((function(t,o){return{value:t,color:s(t,e),label:r?n[o]:u[o]}})).reverse()},r.getColorFromPointCloudStops=s,r.getStrectchRampStops=function(e,r){var t=[];if(e&&"multipart"===e.type)e.colorRamps.reverse().forEach((function(o,l){0===l?t.push({value:r.max,color:new n(o.toColor),label:"high"}):t.push({value:null,color:new n(o.toColor),label:""}),l===e.colorRamps.length-1?t.push({value:r.min,color:new n(o.fromColor),label:"low"}):t.push({value:null,color:new n(o.fromColor),label:""})}));else{var o=void 0,l=void 0;e&&"algorithmic"===e.type?(o=e.fromColor,l=e.toColor):(o=[0,0,0,1],l=[255,255,255,1]),t=[{value:r.max,color:new n(l),label:"high"},{value:r.min,color:new n(o),label:"low"}]}return t}}));