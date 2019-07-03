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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../Color","../../../core/promiseUtils","../../../renderers/support/numberUtils","../../../symbols/support/gfxUtils","./utils","@dojo/framework/shim/Promise"],function(e,r,t,n,o,l,u,a,i){function s(e){var r=null;if("simple"===e.type)r=e.symbol;else if("unique-value"===e.type||"class-breaks"===e.type){var t=e.classBreakInfos||e.uniqueValueInfos,n=t&&t[0];r=n&&n.symbol}var o=r&&-1===r.type.indexOf("line-symbol")?a.getStroke(r):null,l=o&&o.color;return l&&l.a>0&&!(l.r>=240&&l.g>=240&&l.b>=240)?l:null}function c(e){var r=new o(g);return r.a=1-e,r}function f(r,o,a){return t(this,void 0,void 0,function(){var r,s,c,f,v,m,b,d,g=this;return n(this,function(h){switch(h.label){case 0:return r=!1,s=[],c=[],(o.stops&&(f=o.stops,s=f.map(function(e){return e.value}),(r=f.some(function(e){return!!e.label}))&&(c=f.map(function(e){return e.label}))),v=s[0],m=s[s.length-1],null==v&&null==m)?[2,null]:(b=m-v,[4,l.all(s.map(function(l,f){return t(g,void 0,void 0,function(){var t,m,d;return n(this,function(n){switch(n.label){case 0:return"opacity"!==o.type?[3,2]:[4,p(l,o,a)];case 1:return m=n.sent(),[3,4];case 2:return[4,new Promise(function(r,t){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,t)})];case 3:m=n.sent().getColor(o,l),n.label=4;case 4:return t=m,d=r?c[f]:i.getLabelPrefix(f,s.length-1)+u.format(l),[2,{value:l,color:t,label:d,offset:b?1-(l-v)/b:1}]}})})}))]);case 1:return d=h.sent(),[2,d.reverse()]}})})}function p(r,l,u){return void 0===u&&(u=d),t(this,void 0,void 0,function(){var t,a;return n(this,function(n){switch(n.label){case 0:return t=new o(u),[4,new Promise(function(r,t){e(["../../../renderers/visualVariables/support/visualVariableUtils"],r,t)})];case 1:return a=n.sent().getOpacity(l,r),null!=a&&(t.a=a),[2,t]}})})}function v(e){var r=!1,t=[],n=[];t=e.map(function(e){return e.value}),(r=e.some(function(e){return!!e.label}))&&(n=e.map(function(e){return e.label}));var o=t[0],l=t[t.length-1];if(null==o&&null==l)return null;var a=l-o;return t.map(function(l,s){return{value:l,color:m(l,e),label:r?n[s]:i.getLabelPrefix(s,t.length-1)+u.format(l),offset:a?1-(l-o)/a:1}}).reverse()}function m(e,r){var t=b(e,r),n=t.startIndex,l=t.endIndex,u=t.weight;if(n===l)return r[n].color;var a=o.blendColors(r[n].color,r[l].color,u);return new o(a)}function b(e,r){var t=0,n=r.length-1;return r.some(function(r,o){return e<r.value?(n=o,!0):(t=o,!1)}),{startIndex:t,endIndex:n,weight:(e-r[t].value)/(r[n].value-r[t].value)}}Object.defineProperty(r,"__esModule",{value:!0});var d=[64,64,64],g=[255,255,255];r.getRampBorderColor=s,r.getRampOverlayColor=c,r.getRampStops=f,r.getRampStopsForPointCloud=v,r.getColorFromPointCloudStops=m});