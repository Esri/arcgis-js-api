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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","./drawing/SVGDrawer","./DomProcessor","./Clipper","./VisualsCollector"],function(e,n,r,t,i,o){return{processNode:function(a,u){function d(a,l,g,p,v){function m(e){if(e){if(Array.isArray(e))return void e.forEach(function(e){m(e)});s.push({text:e,stackIndex:++v}),w++}}var w=0;if("#comment"===a.nodeName)return w;var k=o.getNodeVisuals(a,p);if(!k)return w;k.style.isRelAbs&&(f+=1e5,v=f),k.parentVs=p;var x;if("svg"===a.nodeName)return m(r.drawSVG(a,k,l)),w;if("IMG"===a.nodeName)return n(r.drawImage(a,k,l),function(e){return m(e),w});var h;return k.style.getBackground().image&&"none"!==k.style.getBackground().image&&(h=n(r.drawBackgroundImage(k,function(){var e=k.style;return e.getBorder().radius||"auto"===e.getBackground().size||e.getBackground().repeatX||e.getBackground().repeatY?i.addClipping(k,u.definitions):l}()),function(e){m(e)})),x=n(h,function(){m(r.drawRect(k,l)),m(r.drawBorder(k,l))}),n(x,function(){function o(){function e(){"#text"===t.nodeName?(m(r.drawText(a,k,l,{encodeText:u.encodeText})),o()):n(d(t,l,p,k,v),function(e){v+=e,o()})}var t=a.childNodes[h++];if(!t)return void f.resolve();++c>(u.iterationsPerScript||500)?(c=0,setTimeout(e,30)):e()}t.replaceTextWithSpans(a,k);var s;if(a.childNodes.length){var f=new e;s=f.promise;var p;if("hidden"===k.style.overflow){p=u.clipFunc&&u.clipFunc(a);var x=g||u.useClipping||p;l=x&&i.addClipping(k,u.definitions,l)}var h=0;o()}return n(s,function(){return w})})}var c=0,s=[],f=0;return n(d(a,null,null,null,0),function(){return s.sort(function(e,n){return e.stackIndex-n.stackIndex}),s})}}});