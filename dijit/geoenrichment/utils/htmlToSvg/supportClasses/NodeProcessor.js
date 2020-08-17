// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./drawing/SVGDrawer","./Clipper","./VisualsCollector"],(function(e,n,r,t,i){return{processNode:function(o,a){var u=0,d=[],c=0;return n(function o(s,l,f,g,p){var m=0;if("#comment"===s.nodeName)return m;var v,w,h,k=i.getNodeVisuals(s,g);if(!k)return m;function B(e){e&&(Array.isArray(e)?e.forEach((function(e){B(e)})):(d.push({text:e,stackIndex:++p}),m++))}return k.style.isRelAbs&&(p=c+=1e5),k.parentVs=g,"svg"===s.nodeName?(B(r.drawSVG(s,k,l)),m):"IMG"===s.nodeName?n(r.drawImage(s,k,l),(function(e){return B(e),m})):(k.style.getBackground().image&&"none"!==k.style.getBackground().image&&(h=n(r.drawBackgroundImage(k,(w=k.style).getBorder().radius||"auto"===w.getBackground().size||w.getBackground().repeatX||w.getBackground().repeatY?t.addClipping(k,a.definitions):l),(function(e){B(e)}))),v=n(h,(function(){B(r.drawRect(k,l)),B(r.drawBorder(k,l))})),n(v,(function(){var i;if(s.childNodes.length){var d,c=new e;if(i=c.promise,"hidden"===k.style.overflow){d=a.clipFunc&&a.clipFunc(s);var g=f||a.useClipping||d;l=g&&t.addClipping(k,a.definitions,l)||l}var v=0;!function e(){var t=s.childNodes[v++];function i(){"#text"===t.nodeName?(B(r.drawText(t,s,k,l)),e()):n(o(t,l,d,k,p),(function(n){p+=n,e()}))}t?++u>(a.iterationsPerScript||500)?(u=0,setTimeout(i,30)):i():c.resolve()}()}return n(i,(function(){return m}))})))}(o,null,null,null,0),(function(){return d.sort((function(e,n){return e.stackIndex-n.stackIndex})),d}))}}}));
