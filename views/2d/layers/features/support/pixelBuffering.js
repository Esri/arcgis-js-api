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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/generatorHelper","../../../../../core/tsSupport/awaiterHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/promiseUtils","../../../../../core/screenUtils","../../../../../symbols/cim/Rect","../../../engine","../../../engine/webgl/definitions","../../graphics/graphicsUtils"],(function(e,t,r,i,n,a,s,u,o,l,p){Object.defineProperty(t,"__esModule",{value:!0});var c={"simple-marker":1,"picture-marker":1,text:1,"simple-line":1,"simple-fill":1,"picture-fill":1,cim:1,"web-style":1};t.computePxBuffer=function(e,t){return i(this,void 0,void 0,(function(){var i,n,u,o,l,p,c;return r(this,(function(r){switch(r.label){case 0:if("heatmap"===e.type)return[2,Math.round(3*e.blurRadius)];if("dot-density"===e.type)return[2,0];if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?[2,100]:[2,50];for(i=e.getSymbols(),n=function(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var t=e.getVisualVariablesForType("size");if(!t[0])return 0;var r=t[0];return"stops"===r.transformationType?r.stops.map((function(e){return e.size})).reduce(g,0):"clamped-linear"===r.transformationType?"number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((function(e){return e.size})).reduce(g,0):"real-world-size"===r.transformationType?30:void 0}(e),u=[],o=0,l=i;o<l.length;o++)p=l[o],u.push(v(p,n));return[4,a.all(u)];case 1:return c=r.sent(),[2,s.pt2px(c.reduce(g,0))]}}))}))};var f=[0,0,0,0];function h(e,t){return null==e?t:e}function m(e,t){return null==e.outline?t:h(e.outline.width,t)}var d={sdf:!0,code:99,metrics:l.AVERAGE_GLYPH_MOSAIC_ITEM.metrics,rect:new u.default(0,0,24,24),page:0,textureBinding:2};function y(e,t){return i(this,void 0,void 0,(function(){var i,a,s,u,l,c,v,g,x,b,w,S;return r(this,(function(r){switch(r.label){case 0:return"simple-marker"===e.type?(i=Math.max(h(e.size,12),t),[2,M(e)+.707*i]):"picture-marker"===e.type?(a=Math.max(h(e.height,12),t),s=h(e.width,12)*(a/h(e.height,12)),u=s/2,l=a/2,[2,M(e)+Math.sqrt(u*u+l*l)]):"text"===e.type?(c=function(e){var t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[d]};for(var r=[],i=0;i<t;i++)r.push(n({},d,{code:e.text.charCodeAt(i)}));return{glyphMosaicItems:r}}(e),p.getTextSymbolSize(f,e,c),v=Math.abs(f[0]),g=Math.abs(f[1]),x=f[2],b=f[3],[2,Math.max(v,g)+Math.max(x,b)]):"simple-line"===e.type?[2,Math.max(h(e.width,.75),t)/2]:"simple-fill"===e.type||"picture-fill"===e.type?[2,Math.max(m(e,0),t)/2]:"cim"===e.type?(w=o.CIMSymbolHelper.getEnvelope(e.data))?[2,Math.sqrt(w.width*w.width+w.height*w.height)]:[2,0]:"web-style"!==e.type?[3,2]:(S=y,[4,e.fetchCIMSymbol()]);case 1:return[2,S.apply(void 0,[r.sent(),t])];case 2:return[2,0]}}))}))}function v(e,t){return i(this,void 0,void 0,(function(){var i,n;return r(this,(function(r){switch(r.label){case 0:return function(e){return e.type in c}(e)?(n=(i=Math).min,[4,y(e,t)]):[2,0];case 1:return[2,n.apply(i,[r.sent(),75])]}}))}))}function M(e){var t=h(e.xoffset,0),r=h(e.yoffset,0);return Math.sqrt(t*t+r*r)}function g(e,t){return Math.max(e,t)}}));