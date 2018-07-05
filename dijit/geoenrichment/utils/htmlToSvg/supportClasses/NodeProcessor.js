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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","./drawing/SVGDrawer","./DomProcessor","./Clipper","./VisualsCollector"],function(e,n,r,t,i,o,a){return{processNode:function(r,u){function d(r,l,g,p,v){function m(e){if(e){if(Array.isArray(e))return void e.forEach(function(e){m(e)});s.push({text:e,stackIndex:++v}),w++}}var w=0;if("#comment"===r.nodeName)return w;var k=a.getNodeVisuals(r,p);if(!k)return w;k.style.isRelAbs&&(f+=1e5,v=f),k.parentVs=p;var x;if("svg"===r.nodeName)return m(t.drawSVG(r,k,l)),w;if("IMG"===r.nodeName)return n(t.drawImage(r,k,l),function(e){return m(e),w});var h;return k.style.getBackground().image&&"none"!==k.style.getBackground().image&&(h=n(t.drawBackgroundImage(k,function(){var e=k.style;return e.getBorder().radius||"auto"===e.getBackground().size||e.getBackground().repeatX||e.getBackground().repeatY?o.addClipping(k,u.definitions):l}()),function(e){m(e)})),x=n(h,function(){m(t.drawRect(k,l)),m(t.drawBorder(k,l))}),n(x,function(){function a(){function e(){"#text"===i.nodeName?(m(t.drawText(r,k,l,{encodeText:u.encodeText})),a()):n(d(i,l,p,k,v),function(e){v+=e,a()})}var i=r.childNodes[h++];if(!i)return void f.resolve();++c>(u.iterationsPerScript||500)?(c=0,setTimeout(e,30)):e()}i.replaceTextWithSpans(r,k);var s;if(r.childNodes.length){var f=new e;s=f.promise;var p;if("hidden"===k.style.overflow){p=u.clipFunc&&u.clipFunc(r);var x=g||u.useClipping||p;l=x&&o.addClipping(k,u.definitions,l)}var h=0;a()}return n(s,function(){return w})})}var c=0,s=[],f=0;return n(d(r,null,null,null,0),function(){return s.sort(function(e,n){return e.stackIndex-n.stackIndex}),s})}}});