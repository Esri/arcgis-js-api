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

define(["require","exports","dojo/Deferred","dojo/promise/all","../promiseUtils","./Connection","./JobProxy"],function(n,e,r,o,t,i,u){function a(n,e){if(y===!1){for(var r=0;m>r;++r){var o=new u(b,r,d);w.push(o),C.push(!1)}y=!0}return h(n).then(function(n){return s(e,n.id).then(function(){return n}).otherwise(function(n){return t.reject(n)})})}function f(){for(var n=0,e=w.length;e>n;n++)w[n].terminate();w=[],C=[],g=!1}function c(n){if(n)if(b[n.id]&&delete b[n.id],g)for(var e=0,r=w.length;r>e;e++)w[e].closeConnection(n.id);else{var o=x[n.id];o&&(o.promise.cancel(),delete x[n.id])}}function l(n,e,r,o,i){var u=null;if(o&&(u=o.id),null===u&&(u=j=(j+1)%w.length,!C[u]&&!w.some(function(n,e,r){return u=(u+1)%r.length,C[u]})))return t.reject(new Error("No worker available"));var a=w[u].invoke(n,e,r,i);return o&&(o.id=u),a}function v(n,e,r,o){for(var t=[],i=0,u=w.length;u>i;i++)C[i]&&t.push(w[i].invoke(n,e,r,o));return t}function s(n,e){for(var r=[],t=0,i=w.length;i>t;t++)r.push(w[t].openConnection(n,e));return o(r).then(function(n){})}function d(n){if(C[n]=!0,!g){var e=C.every(function(n){return n});if(e){for(var r in x){var o=b[r];o&&x[r].resolve(o)}x={},g=!0}}}function h(n){var e=k++,o=new i(n,e),t=new r;return b[e]=o,g?t.resolve(o):x[e]=t,t.promise}var p=navigator.hardwareConcurrency||2,m=Math.max(p-1,2),g=!1,w=[],C=[],j=0,k=0,b={},x={},y=!1;e.open=a,e.terminate=f,e.closeConnection=c,e.invoke=l,e.broadcast=v});