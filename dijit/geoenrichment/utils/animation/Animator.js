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

define(["esri/dijit/geoenrichment/Deferred","dojo/fx/easing","dojox/gfx/matrix"],function(n,r,e){function t(n){for(var e in n.params.properties){var t=n.params.properties[e],o=t.easing?"function"==typeof t.easing?t.easing:r[t.easing]:null,i=o?o(n.progress):n.progress,s=t.start+i*(t.end-t.start);n.obj[e]=t.addPx?s+"px":s,n.progressFunction&&n.progressFunction(e,s,i)}}function o(){return(new Date).getTime()}function i(n){n.progress<1&&!n.isStopped?n._executeAnimation=a.setTimeout(function(){var r=o();n.progress=1-(n.endTime-r)/n.duration,n.progress=Math.min(1,n.progress),t(n),i(n)}):n.endFunction()}var s={},a={_funcs:null,setTimeout:function(n){var r=this;if(this._funcs)return void this._funcs.push(n);this._funcs=[n],setTimeout(function(){var n=r._funcs;r._funcs=null,n.forEach(function(n){n()})},33)}};return s.animateProperty=function(r){var e={},s=new n;return e.promise=s.promise,e.params=r,e.obj=r.obj||r.node||{},e.duration=void 0!==r.duration?r.duration:1e3,e.startTime=o(),e.endTime=e.startTime+e.duration,e.progress=0,e.endFunction=function(){r.endFunction&&r.endFunction(),s.resolve()},e.progressFunction=r.progressFunction,e.stop=function(){clearTimeout(e._executeAnimation),e.isStopped=!0},t(e),i(e),e},s.animateTransform=function(n){var r=n.shape;return r.setTransform(null),s.animateProperty({duration:n.duration,properties:{p:{start:0,end:1,easing:n.easing}},progressFunction:function(t,o,i){var s,a,u,c;n.transform.forEach(function(n){var r=n.start[0]+(n.end[0]-n.start[0])*i,e=n.start[1]+(n.end[1]-n.start[1])*i;"translate"===n.name?(s=r,a=e):"scale"===n.name&&(u=r,c=e)}),r.setTransform(new e.Matrix2D({dx:s,dy:a,xx:u,yy:c}))},endFunction:function(){r.setTransform(null),n.onEnd&&n.onEnd()}}).promise},s});