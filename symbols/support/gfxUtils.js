// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","dojox/gfx/_base","../../Color","../../request","../../core/LRUMap","../../core/promiseUtils","../../core/screenUtils"],function(e,t,r,a,n,i,l,o,s){function c(e){var t=e.horizontalAlignment;return t=t&&L[t.toLowerCase()]||"middle"}function u(e){var t=e.verticalAlignment;return t&&w[t.toLowerCase()]||"alphabetic"}function p(e){return"bottom"===e.verticalAlignment?"super":null}function f(e){var t=e.style,n=null;if(e){var i=e.constructor;switch(e.type){case S:t!==i.STYLE_CROSS&&t!==i.STYLE_X&&(n=e.color);break;case v:t===i.STYLE_SOLID?n=e.color:t!==i.STYLE_NULL&&(n=r({},a.defaultPattern,{src:y+t+".png",width:8,height:8}));break;case m:n=r({},a.defaultPattern,{src:e.url,width:s.pt2px(e.width)*e.xscale,height:s.pt2px(e.height)*e.yscale,x:s.pt2px(e.xoffset),y:s.pt2px(e.yoffset)});break;case b:n=e.color}}return n}function d(e,t){var r=e+"-"+t;return C.has(r)?o.resolve(C.get(r)):i(e,{responseType:"image"}).then(function(e){var a=e.data,n=a.naturalWidth,i=a.naturalHeight,l=document.createElement("canvas");l.width=n,l.height=i;var o=l.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,i),o.globalCompositeOperation="destination-in",o.drawImage(a,0,0);var s=l.toDataURL();return C.set(r,s),s})}function h(e){if(!e)return null;var t,r=e.constructor,a=s.pt2px(e.width);switch(e.type){case v:case m:case S:t=h(e.outline);break;case x:e.style!==r.STYLE_NULL&&0!==a&&(t={color:e.color,style:_(e.style),width:a,cap:e.cap,join:e.join===r.JOIN_MITER?s.pt2px(e.miterLimit):e.join});break;default:t=null}return t}function g(e){for(var t=e.surface,r=e.colors,a=e.numClasses,n=e.size,i=t.createGroup(),l=n||75,o=l/a,s=0;s<a;s++)for(var c=s*o,u=0;u<a;u++){var p=r[s][u],f=u*o;i.createRect({x:f,y:c,width:o,height:o}).setFill(p).setStroke(null)}return i}Object.defineProperty(t,"__esModule",{value:!0});var m="picture-fill",v="simple-fill",x="simple-line",S="simple-marker",b="text",y=e.toUrl("../../symbols/patterns/"),L={left:"start",center:"middle",right:"end",justify:"start"},w={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},C=new l(1e3);t.getSVGAlign=c,t.getSVGBaseline=u,t.getSVGBaselineShift=p,t.getFill=f,t.getPatternUrlWithColor=d,t.getStroke=h,t.create2DColorRamp=g;var _=function(){var e={};return function(t){if(e[t])return e[t];var r=t.replace(/-/g,"");return e[t]=r,r}}();t.defaultThematicColor=new n([128,128,128])});