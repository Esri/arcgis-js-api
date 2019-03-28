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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./drawing/SVGDrawer","./DomProcessor","./Clipper","./VisualsCollector"],function(e,n,r,t,i,o){return{processNode:function(a,u){function d(a,l,g,p,v){function m(e){if(e){if(Array.isArray(e))return void e.forEach(function(e){m(e)});s.push({text:e,stackIndex:++v}),w++}}var w=0;if("#comment"===a.nodeName)return w;var h=o.getNodeVisuals(a,p);if(!h)return w;h.style.isRelAbs&&(f+=1e5,v=f),h.parentVs=p;var k;if("svg"===a.nodeName)return m(r.drawSVG(a,h,l)),w;if("IMG"===a.nodeName)return n(r.drawImage(a,h,l),function(e){return m(e),w});var x;return h.style.getBackground().image&&"none"!==h.style.getBackground().image&&(x=n(r.drawBackgroundImage(h,function(){var e=h.style;return e.getBorder().radius||"auto"===e.getBackground().size||e.getBackground().repeatX||e.getBackground().repeatY?i.addClipping(h,u.definitions):l}()),function(e){m(e)})),k=n(x,function(){m(r.drawRect(h,l)),m(r.drawBorder(h,l))}),n(k,function(){function o(){function e(){"#text"===t.nodeName?(m(r.drawText(a,h,l,{encodeText:u.encodeText})),o()):n(d(t,l,p,h,v),function(e){v+=e,o()})}var t=a.childNodes[x++];if(!t)return void f.resolve();++c>(u.iterationsPerScript||500)?(c=0,setTimeout(e,30)):e()}t.replaceTextWithSpans(a,h);var s;if(a.childNodes.length){var f=new e;s=f.promise;var p;if("hidden"===h.style.overflow){p=u.clipFunc&&u.clipFunc(a);var k=g||u.useClipping||p;l=k&&i.addClipping(h,u.definitions,l)}var x=0;o()}return n(s,function(){return w})})}var c=0,s=[],f=0;return n(d(a,null,null,null,0),function(){return s.sort(function(e,n){return e.stackIndex-n.stackIndex}),s})}}});