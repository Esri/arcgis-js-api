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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/promise/all","./drawing/SVGDrawer","./DomProcessor","./Clipper","./VisualsCollector"],function(e,r,n,i,o,t,a){var d=500,u=1e5,s={processNode:function(n,s){function c(n,v,g,m,w){function x(e){if(e){if(Array.isArray(e))return void e.forEach(function(e){x(e)});f.push({text:e,stackIndex:++w}),N++}}function h(){function e(){"#text"===o.nodeName?(x(i.drawText(n,y,v,{encodeText:s.encodeText})),h()):r(c(o,v,T,y,w),function(e){w+=e,h()})}var o=n.childNodes[b++];return o?void(++l>(s.iterationsPerScript||d)?(l=0,setTimeout(e,30)):e()):void C.resolve()}var N=0;if("#comment"===n.nodeName)return N;var y=a.getNodeVisuals(n,m);if(!y)return N;if(y.style.isRelAbs&&(p+=u,w=p),y.parentVs=m,"svg"===n.nodeName)return x(i.drawSVG(n,y,v)),N;if("IMG"===n.nodeName)return x(i.drawImage(n,y,v)),N;if(y.style.background.image&&"none"!==y.style.background.image){var k;y.style.borderRadius&&(k=t.addClipping(y,s.definitions)),x(i.drawBackgroundImage(y,k||v))}x(i.drawRect(y,v)),x(i.drawBorder(y,v)),o.replaceTextWithSpans(n);var I;if(n.childNodes.length){var C=new e;I=C.promise;var T;if("hidden"===y.style.overflow){T=s.clipFunc&&s.clipFunc(n);var V=g||s.useClipping||T;v=V&&t.addClipping(y,s.definitions,v)}var b=0;h()}return r(I,function(){return N})}var l=0,f=[],p=0;return r(c(n,null,null,null,0),function(){return f.sort(function(e,r){return e.stackIndex-r.stackIndex}),f})}};return s});