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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","dojo/has","../promiseUtils","./Connection","./DedicatedConnection","./JobProxy"],function(n,e,r,t,o,i,u,c){function a(){l(),C()}function f(n,e,r){void 0===r&&(r=!1);var t=r?C():l();return t.then(function(t){var i;return i=r?w(n):g(n),p(e,i,r).then(function(){return i}).otherwise(function(n){return o.reject(n)})})}function d(){for(var n=0;n<x.length;n++)x[n]&&x[n].terminate();x.length=0,j.length=0,I.clear()}function s(n){if(n)if(I.has(n.id)&&I["delete"](n.id),n instanceof e.DedicatedConnection)x[n.workerId].closeConnection(n.id);else for(var r=0;m>r;r++)x[r]&&x[r].closeConnection(n.id)}function v(n,e,r,t,o){var i=null;if(t&&(i=t.id),null===i){var u=x.some(function(n,e){return m>e&&!n.hasOutgoingJobs()?(i=n.index,!0):!1});u||(i=D=(D+1)%m)}var c=x[i].invoke(n,e,r,o);return t&&(t.id=i),c}function h(n,e,r,t){for(var o=[],i=0;m>i;i++)o.push(x[i].invoke(n,e,r,t));return o}function l(){if(J)return J;for(var n=[],e=function(e){var r=c.create(I,e).then(function(n){return x[e]=n,n});n.push(r)},t=0;m>t;t++)e(t);return J=r(n).then(function(){return!0})}function C(){if(O)return O;for(var n=[],e=function(e){var r=m+e,t=c.create(I,r).then(function(n){return x[r]=n,n});n.push(t)},t=0;b>t;t++)e(t);return O=r(n).then(function(){return!0})}function p(n,e,t){var o=e.id;if(t){var i=e.workerId;return x[i].openConnection(n,o)}for(var u=[],c=0;c<x.length;c++)u.push(x[c].openConnection(n,o));return r(u)}function g(n){var r=y++,t=new e.Connection(n,r);return I.set(r,t),t}function w(n){var r=y++,t=m+M++;M%=b;var o=new e.DedicatedConnection(n,r,t);return I.set(r,o),o}Object.defineProperty(e,"__esModule",{value:!0}),e.Connection=i,e.DedicatedConnection=u;var k=(navigator||{}).hardwareConcurrency||2,m=t("esri-workers-debug")?1:Math.max(1,Math.ceil(k/2)),b=t("esri-workers-debug")?1:Math.max(1,Math.floor(k/2)),M=0,x=[],j=[],D=0,y=0,I=new Map;e.initialize=a,e.open=f,e.terminate=d,e.closeConnection=s,e.invoke=v,e.broadcast=h;var J,O});