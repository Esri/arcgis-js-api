// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/promiseUtils","../../../../../core/screenUtils","../../../engine","../../graphics/graphicsUtils"],function(e,t,r,i,n,a,o,s){function u(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map(function(e){return e.size}).reduce(v,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map(function(e){return e.size}).reduce(v,0):"real-world-size"===r.transformationType?30:void 0}function l(e){return e.type in M}function p(e,t){return i(this,void 0,void 0,function(){var i,o,s,l,p,c,f;return r(this,function(r){switch(r.label){case 0:if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,50];for(i=e.getSymbols(),o=u(e),s=[],l=0,p=i;l<p.length;l++)c=p[l],s.push(y(c,o));return[4,n.all(s)];case 1:return f=r.sent(),[2,a.pt2px(f.reduce(v,0))]}})})}function c(e,t){return null==e?t:e}function f(e,t){return null==e.outline?t:c(e.outline.width,t)}function h(e,t){return null==e.font?t:c(e.font.size,t)}function m(e,t){return i(this,void 0,void 0,function(){var i,n,a,u,l,p,y,v,M,w,S;return r(this,function(r){switch(r.label){case 0:return"simple-marker"===e.type?(i=Math.max(c(e.size,12),t),[2,d(e)+i*b]):"picture-marker"===e.type?(n=Math.max(c(e.height,12),t),a=c(e.width,12)*(n/c(e.height,12)),u=a/2,l=n/2,[2,d(e)+Math.sqrt(u*u+l*l)]):"text"===e.type?(s.getTextSymbolEstimatedSize(g,e,o.definitions.AVERAGE_GLYPH_MOSAIC_ITEM),p=g[2]*(c(e.horizontalAlignment,"top")in x?1:.5),y=g[3]*(c(e.horizontalAlignment,"center")in z?1:.5),v=h(e,9),M=Math.max(v,t)/v,[2,d(e)+Math.sqrt(p*p+y*y)*M]):"simple-line"===e.type?[2,Math.max(c(e.width,.75),t)/2]:"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(f(e,0),t)/2]:"cim"===e.type?(w=o.CIMSymbolHelper.getEnvelope(e.data),w?[2,Math.sqrt(w.width*w.width+w.height*w.height)]:[2,0]):"web-style"!==e.type?[3,2]:(S=m,[4,e.fetchCIMSymbol()]);case 1:return[2,S.apply(void 0,[r.sent(),t])];case 2:return[2,0]}})})}function y(e,t){return i(this,void 0,void 0,function(){var i,n;return r(this,function(r){switch(r.label){case 0:return l(e)?(n=(i=Math).min,[4,m(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}})})}function d(e){var t=c(e.xoffset,0),r=c(e.yoffset,0);return Math.sqrt(t*t+r*r)}function v(e,t){return Math.max(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var M={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1,"web-style":1},b=.707;t.computePxBuffer=p;var g=[0,0,0,0],x={left:1,right:1},z={top:1,bottom:1,baseline:1}});