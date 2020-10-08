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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/promiseUtils","../../../../../core/screenUtils","../../../../../symbols/cim/CIMSymbolHelper","../../../../../symbols/cim/Rect","../../../engine/webgl/definitions","../../graphics/graphicsUtils"],(function(e,t,r,i,n,a,s,u,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.computePxBuffer=void 0;var l={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};t.computePxBuffer=function(e,t,a){return r.__awaiter(this,void 0,void 0,(function(){var s,u,o,l,c,p,f;return r.__generator(this,(function(r){switch(r.label){case 0:if(!e||a&&"cluster"===a.type)return[2,0];if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,200];for(s=e.getSymbols(),u=function(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map((function(e){return e.size})).reduce(M,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((function(e){return e.size})).reduce(M,0):"real-world-size"===r.transformationType?30:void 0}(e),o=[],l=0,c=s;l<c.length;l++)p=c[l],o.push(y(p,u));return[4,i.all(o)];case 1:return f=r.sent(),[2,n.pt2px(f.reduce(M,0))]}}))}))};var c=[0,0,0,0];function p(e,t){return null==e?t:e}function f(e,t){return null==e.outline?t:p(e.outline.width,t)}var m={sdf:!0,code:99,metrics:u.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new s.default(0,0,24,24),page:0,textureBinding:2};function h(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,s,u,l,y,M,g,v,x,b,_,w,S;return r.__generator(this,(function(z){switch(z.label){case 0:return"simple-marker"===e.type?(i=Math.max(p(e.size,12),t),[2,d(e)+.707*i]):"picture-marker"===e.type?(n=Math.max(p(e.height,12),t),s=p(e.width,12)*(n/p(e.height,12)),u=s/2,l=n/2,[2,d(e)+Math.sqrt(u*u+l*l)]):"text"===e.type?(y=function(e){var t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[m]};for(var i=[],n=0;n<t;n++)i.push(r.__assign(r.__assign({},m),{code:e.text.charCodeAt(n)}));return{glyphMosaicItems:i}}(e),o.getTextSymbolSize(c,e.toJSON(),y),M=Math.abs(c[0]),g=Math.abs(c[1]),v=c[2],x=c[3],[2,Math.max(M,g)+Math.max(v,x)]):"simple-line"===e.type?(b=e,_=Math.max(p(b.width,.75),t)/2,b.marker?[2,Math.max(6*b.width,2*t)]:[2,_]):"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(f(e,0),t)/2]:"cim"===e.type?(w=a.CIMSymbolHelper.getEnvelope(e.data))?[2,Math.sqrt(w.width*w.width+w.height*w.height)]:[2,0]:"web-style"!==e.type?[3,2]:(S=h,[4,e.fetchCIMSymbol()]);case 1:return[2,S.apply(void 0,[z.sent(),t])];case 2:return[2,0]}}))}))}function y(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return function(e){return e.type in l}(e)?(n=(i=Math).min,[4,h(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}}))}))}function d(e){var t=p(e.xoffset,0),r=p(e.yoffset,0);return Math.sqrt(t*t+r*r)}function M(e,t){return Math.max(e,t)}}));