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

define(["dojo/Deferred","dojo/fx/easing"],function(n,e){function o(e){var o={},s=new n;return o.promise=s.promise,o.params=e,o.obj=e.obj||e.node,o.duration=void 0!==e.duration?e.duration:1e3,o.startTime=r(),o.endTime=o.startTime+o.duration,o.progress=1-(o.endTime-o.startTime)/o.duration,o.endFunction=function(){e.endFunction&&e.endFunction(),s.resolve()},o.progressFunction=e.progressFunction,o.stop=function(){clearTimeout(o._executeAnimation),o.isStopped=!0},t(o),i(o),o}function t(n){for(var o in n.params.properties){var t=n.params.properties[o],r=t.easing&&"function"==typeof e[t.easing]?e[t.easing](n.progress):n.progress,i=t.start+r*(t.end-t.start);n.obj[o]=t.addPx?i+"px":i,n.progressFunction&&n.progressFunction(o,i)}}function r(){return(new Date).getTime()}function i(n){n.progress<1&&!n.isStopped?n._executeAnimation=a.setTimeout(function(){var e=r();n.progress=1-(n.endTime-e)/n.duration,n.progress=Math.min(1,n.progress),t(n),i(n)}):n.endFunction()}var s={},u=33,a={_funcs:null,setTimeout:function(n){var e=this;return this._funcs?void this._funcs.push(n):(this._funcs=[n],void setTimeout(function(){var n=e._funcs;e._funcs=null,n.forEach(function(n){n()})},u))}};return s.animateProperty=o,s});