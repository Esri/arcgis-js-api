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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/promiseUtils","../../../../../core/screenUtils","../../../../../symbols/cim/Rect","../../../engine","../../../engine/webgl/definitions","../../graphics/graphicsUtils"],(function(e,t,r,i,n,a,s,u,o){Object.defineProperty(t,"__esModule",{value:!0});var l={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1,"web-style":1};t.computePxBuffer=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var a,s,u,o,l,c,p;return r.__generator(this,(function(r){switch(r.label){case 0:if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,50];for(a=e.getSymbols(),s=function(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map((function(e){return e.size})).reduce(g,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((function(e){return e.size})).reduce(g,0):"real-world-size"===r.transformationType?30:void 0}(e),u=[],o=0,l=a;o<l.length;o++)c=l[o],u.push(d(c,s));return[4,i.all(u)];case 1:return p=r.sent(),[2,n.pt2px(p.reduce(g,0))]}}))}))};var c=[0,0,0,0];function p(e,t){return null==e?t:e}function h(e,t){return null==e.outline?t:p(e.outline.width,t)}var f={sdf:!0,code:99,metrics:u.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new a.default(0,0,24,24),page:0,textureBinding:2};function m(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n,a,u,l,d,g,M,v,x,_,b,w,z;return r.__generator(this,(function(S){switch(S.label){case 0:return"simple-marker"===e.type?(i=Math.max(p(e.size,12),t),[2,y(e)+.707*i]):"picture-marker"===e.type?(n=Math.max(p(e.height,12),t),a=p(e.width,12)*(n/p(e.height,12)),u=a/2,l=n/2,[2,y(e)+Math.sqrt(u*u+l*l)]):"text"===e.type?(d=function(e){var t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[f]};for(var i=[],n=0;n<t;n++)i.push(r.__assign(r.__assign({},f),{code:e.text.charCodeAt(n)}));return{glyphMosaicItems:i}}(e),o.getTextSymbolSize(c,e,d),g=Math.abs(c[0]),M=Math.abs(c[1]),v=c[2],x=c[3],[2,Math.max(g,M)+Math.max(v,x)]):"simple-line"===e.type?(_=e,b=Math.max(p(_.width,.75),t)/2,_.marker?[2,Math.max(6*_.width,2*t)]:[2,b]):"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(h(e,0),t)/2]:"cim"===e.type?(w=s.CIMSymbolHelper.getEnvelope(e.data))?[2,Math.sqrt(w.width*w.width+w.height*w.height)]:[2,0]:"web-style"!==e.type?[3,2]:(z=m,[4,e.fetchCIMSymbol()]);case 1:return[2,z.apply(void 0,[S.sent(),t])];case 2:return[2,0]}}))}))}function d(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,n;return r.__generator(this,(function(r){switch(r.label){case 0:return function(e){return e.type in l}(e)?(n=(i=Math).min,[4,m(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}}))}))}function y(e){var t=p(e.xoffset,0),r=p(e.yoffset,0);return Math.sqrt(t*t+r*r)}function g(e,t){return Math.max(e,t)}}));