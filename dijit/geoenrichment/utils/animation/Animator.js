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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","dojo/fx/easing","dojox/gfx/matrix"],(function(n,r,t){var e={},o={_funcs:null,setTimeout:function(n){var r=this;this._funcs?this._funcs.push(n):(this._funcs=[n],setTimeout((function(){var n=r._funcs;r._funcs=null,n.forEach((function(n){n()}))}),33))}};function s(){return(new Date).getTime()}function i(n){for(var t in n.params.properties){var e=n.params.properties[t],o=e.easing?"function"==typeof e.easing?e.easing:r[e.easing]:null,s=o?o(n.progress):n.progress,i=e.start+s*(e.end-e.start);n.obj[t]=e.units?i+e.units:i,n.progressFunction&&n.progressFunction(t,i,s)}}return e.animateProperty=function(r){var t={},e=new n;return t.promise=e.promise,t.params=r,t.obj=r.obj||r.node||{},t.duration=void 0!==r.duration?r.duration:1e3,t.startTime=s(),t.endTime=t.startTime+t.duration,t.progress=0,t.endFunction=function(){r.endFunction&&r.endFunction(),e.resolve()},t.progressFunction=r.progressFunction,t.stop=function(){t.isStopped=!0},i(t),function n(r){r.progress<1&&!r.isStopped?o.setTimeout((function(){if(r.isStopped)r.endFunction();else{var t=s();r.progress=1-(r.endTime-t)/r.duration,r.progress=Math.min(1,r.progress),i(r),n(r)}})):r.endFunction()}(t),t},e.animateTransform=function(n){var r=n.shape;return r.setTransform(null),e.animateProperty({duration:n.duration,properties:{p:{start:0,end:1,easing:n.easing}},progressFunction:function(e,o,s){var i,a,u,c;n.transform.forEach((function(n){var r=n.start[0]+(n.end[0]-n.start[0])*s,t=n.start[1]+(n.end[1]-n.start[1])*s;"translate"===n.name?(i=r,a=t):"scale"===n.name&&(u=r,c=t)})),r.setTransform(new t.Matrix2D({dx:i,dy:a,xx:u,yy:c}))},endFunction:function(){r.setTransform(null),n.onEnd&&n.onEnd()}}).promise},e}));