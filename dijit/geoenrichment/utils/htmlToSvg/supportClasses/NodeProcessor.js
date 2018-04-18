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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","./drawing/SVGDrawer","./DomProcessor","./Clipper","./VisualsCollector"],function(e,r,n,i,t,o,a){return{processNode:function(n,d){function u(n,f,p,v,g){function m(e){if(e){if(Array.isArray(e))return void e.forEach(function(e){m(e)});c.push({text:e,stackIndex:++g}),x++}}function w(){function e(){"#text"===t.nodeName?(m(i.drawText(n,h,f,{encodeText:d.encodeText})),w()):r(u(t,f,I,h,g),function(e){g+=e,w()})}var t=n.childNodes[T++];if(!t)return void k.resolve();++s>(d.iterationsPerScript||500)?(s=0,setTimeout(e,30)):e()}var x=0;if("#comment"===n.nodeName)return x;var h=a.getNodeVisuals(n,v);if(!h)return x;if(h.style.isRelAbs&&(l+=1e5,g=l),h.parentVs=v,"svg"===n.nodeName)return m(i.drawSVG(n,h,f)),x;if("IMG"===n.nodeName)return m(i.drawImage(n,h,f)),x;if(h.style.background.image&&"none"!==h.style.background.image){var N;h.style.borderRadius&&(N=o.addClipping(h,d.definitions)),m(i.drawBackgroundImage(h,N||f))}m(i.drawRect(h,f)),m(i.drawBorder(h,f)),t.replaceTextWithSpans(n);var y;if(n.childNodes.length){var k=new e;y=k.promise;var I;if("hidden"===h.style.overflow){I=d.clipFunc&&d.clipFunc(n);var C=p||d.useClipping||I;f=C&&o.addClipping(h,d.definitions,f)}var T=0;w()}return r(y,function(){return x})}var s=0,c=[],l=0;return r(u(n,null,null,null,0),function(){return c.sort(function(e,r){return e.stackIndex-r.stackIndex}),c})}}});