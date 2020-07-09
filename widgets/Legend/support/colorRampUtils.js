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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Color","../../../core/promiseUtils","./utils","@dojo/framework/shim/Promise"],(function(e,r,n,t,l,o){Object.defineProperty(r,"__esModule",{value:!0});var u=new t([64,64,64]);function a(e,r){var n=[],t=e.length-1;return 5===e.length?n.push(0,2,4):n.push(0,t),e.map((function(e,l){return n.indexOf(l)>-1?o.createStopLabel(e,l,t,r):null}))}function i(r,l,o){return void 0===o&&(o=u),n.__awaiter(this,void 0,void 0,(function(){var u,a;return n.__generator(this,(function(n){switch(n.label){case 0:return u=new t(o),[4,new Promise((function(r,n){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,n)}))];case 1:return null!=(a=n.sent().getOpacity(l,r))&&(u.a=a),[2,u]}}))}))}function s(e,r){var n=function(e,r){var n=0,t=r.length-1;return r.some((function(r,l){return e<r.value?(t=l,!0):(n=l,!1)})),{startIndex:n,endIndex:t,weight:(e-r[n].value)/(r[t].value-r[n].value)}}(e,r),l=n.startIndex,o=n.endIndex,u=n.weight;if(l===o)return r[l].color;var a=t.blendColors(r[l].color,r[o].color,u);return new t(a)}r.getRampStops=function(r,t,o){return n.__awaiter(this,void 0,void 0,(function(){var u,s,c,v,f,p,h,m=this;return n.__generator(this,(function(d){switch(d.label){case 0:return u=!1,s=[],c=[],r.stops&&(v=r.stops,s=v.map((function(e){return e.value})),(u=v.some((function(e){return!!e.label})))&&(c=v.map((function(e){return e.label})))),f=s[0],p=s[s.length-1],null==f&&null==p?[2,null]:(h=u?null:a(s,o),[4,l.all(s.map((function(l,o){return n.__awaiter(m,void 0,void 0,(function(){var a,s,v;return n.__generator(this,(function(n){switch(n.label){case 0:return"opacity"!==r.type?[3,2]:[4,i(l,r,t)];case 1:return s=n.sent(),[3,4];case 2:return[4,new Promise((function(r,n){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,n)}))];case 3:s=n.sent().getColor(r,l),n.label=4;case 4:return a=s,v=u?c[o]:h[o],[2,{value:l,color:a,label:v}]}}))}))})))]);case 1:return[2,d.sent().reverse()]}}))}))},r.getRampStopsForPointCloud=function(e){var r,n=[],t=[];n=e.map((function(e){return e.value})),(r=e.some((function(e){return!!e.label})))&&(t=e.map((function(e){return e.label})));var l=n[0],o=n[n.length-1];if(null==l&&null==o)return null;var u=r?null:a(n,!1);return n.map((function(n,l){return{value:n,color:s(n,e),label:r?t[l]:u[l]}})).reverse()},r.getColorFromPointCloudStops=s,r.getStrectchRampStops=function(e,r){var n=[];if(e&&"multipart"===e.type)e.colorRamps.reverse().forEach((function(l,o){0===o?n.push({value:r.max,color:new t(l.toColor),label:"high"}):n.push({value:null,color:new t(l.toColor),label:""}),o===e.colorRamps.length-1?n.push({value:r.min,color:new t(l.fromColor),label:"low"}):n.push({value:null,color:new t(l.fromColor),label:""})}));else{var l=void 0,o=void 0;e&&"algorithmic"===e.type?(l=e.fromColor,o=e.toColor):(l=[0,0,0,1],o=[255,255,255,1]),n=[{value:r.max,color:new t(o),label:"high"},{value:r.min,color:new t(l),label:"low"}]}return n}}));