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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","dojox/gfx/_base","../../Color","../../request","../../core/LRUMap","../../core/promiseUtils","../../core/screenUtils"],function(e,t,r,a,l,n,i,o,s){function c(e){var t=e.horizontalAlignment;return t=t&&y[t.toLowerCase()]||"middle"}function u(e){var t=e.verticalAlignment;return t&&L[t.toLowerCase()]||"alphabetic"}function p(e){return"bottom"===e.verticalAlignment?"super":null}function f(e){var t=e.style,l=null;if(e){var n=e.constructor;switch(e.type){case S:t!==n.STYLE_CROSS&&t!==n.STYLE_X&&(l=e.color);break;case v:t===n.STYLE_SOLID?l=e.color:t!==n.STYLE_NULL&&(l=r({},a.defaultPattern,{src:w+t+".png",width:8,height:8}));break;case m:l=r({},a.defaultPattern,{src:e.url,width:s.pt2px(e.width)*e.xscale,height:s.pt2px(e.height)*e.yscale,x:s.pt2px(e.xoffset),y:s.pt2px(e.yoffset)});break;case b:l=e.color}}return l}function d(e,t){var r=e+"-"+t;return C.has(r)?o.resolve(C.get(r)):n(e,{responseType:"image",allowImageDataAccess:!0}).then(function(e){var a=e.data,l=a.naturalWidth,n=a.naturalHeight,i=document.createElement("canvas");i.width=l,i.height=n;var o=i.getContext("2d");o.fillStyle=t,o.fillRect(0,0,l,n),o.globalCompositeOperation="destination-in",o.drawImage(a,0,0);var s=i.toDataURL();return C.set(r,s),s})}function h(e){if(!e)return null;var t,r=e.constructor,a=s.pt2px(e.width);switch(e.type){case v:case m:case S:t=h(e.outline);break;case x:e.style!==r.STYLE_NULL&&0!==a&&(t={color:e.color,style:_(e.style),width:a,cap:e.cap,join:e.join===r.JOIN_MITER?s.pt2px(e.miterLimit):e.join});break;default:t=null}return t}function g(e){for(var t=e.surface,r=e.colors,a=e.numClasses,l=e.size,n=t.createGroup(),i=l||75,o=i/a,s=0;s<a;s++)for(var c=s*o,u=0;u<a;u++){var p=r[s][u],f=u*o;n.createRect({x:f,y:c,width:o,height:o}).setFill(p).setStroke(null)}return n}Object.defineProperty(t,"__esModule",{value:!0});var m="picture-fill",v="simple-fill",x="simple-line",S="simple-marker",b="text",w=e.toUrl("../../symbols/patterns/"),y={left:"start",center:"middle",right:"end",justify:"start"},L={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},C=new i(1e3);t.getSVGAlign=c,t.getSVGBaseline=u,t.getSVGBaselineShift=p,t.getFill=f,t.getPatternUrlWithColor=d,t.getStroke=h,t.create2DColorRamp=g;var _=function(){var e={};return function(t){if(e[t])return e[t];var r=t.replace(/-/g,"");return e[t]=r,r}}();t.defaultThematicColor=new l([128,128,128])});