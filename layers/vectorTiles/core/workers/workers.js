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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","../promiseUtils","./Connection","./JobProxy"],function(e,n,r,o,t,i,u){function a(e,n){if(x===!1){for(var r=0;m>r;++r){var o=new u(k,r,d);w.push(o),j.push(!1)}x=!0}return h(e).then(function(e){return s(n,e.id).then(function(){return e}).otherwise(function(e){return t.reject(e)})})}function f(){for(var e=0;e<w.length;e++)w[e].terminate();w=[],j=[],g=!1}function c(e){if(e)if(k[e.id]&&delete k[e.id],g)for(var n=0;n<w.length;n++)w[n].closeConnection(e.id);else{var r=y[e.id];r&&(r.promise.cancel(),delete y[e.id])}}function l(e,n,r,o,i){var u=null;if(o&&(u=o.id),null===u&&(u=C=(C+1)%w.length,!j[u])){var a=w.some(function(e,n,r){return u=(u+1)%r.length,j[u]});if(!a)return t.reject(new Error("No worker available"))}var f=w[u].invoke(e,n,r,i);return o&&(o.id=u),f}function v(e,n,r,o){for(var t=[],i=0;i<w.length;i++)j[i]&&t.push(w[i].invoke(e,n,r,o));return t}function s(e,n){for(var r=[],t=0;t<w.length;t++)r.push(w[t].openConnection(e,n));return o(r).then(function(e){})}function d(e){if(j[e]=!0,!g){var n=j.every(function(e){return e});if(n){for(var r in y){var o=k[r];o&&y[r].resolve(o)}y={},g=!0}}}function h(e){var n=b++,o=new i(e,n),t=new r;return k[n]=o,g?t.resolve(o):y[n]=t,t.promise}Object.defineProperty(n,"__esModule",{value:!0});var p=navigator.hardwareConcurrency||2,m=Math.max(p-1,2),g=!1,w=[],j=[],C=0,b=0,k={},y={},x=!1;n.open=a,n.terminate=f,n.closeConnection=c,n.invoke=l,n.broadcast=v});