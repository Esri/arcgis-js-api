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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojox/gfx/_base","../../Color","../../core/screenUtils","../../request","../../core/promiseUtils","../../core/LRUMap"],function(e,t,r,a,n,i,l,o,s){function c(e){var t=e.horizontalAlignment;return t=t&&w[t.toLowerCase()]||"middle"}function u(e){var t=e.verticalAlignment;return t&&y[t.toLowerCase()]||"alphabetic"}function p(e){return"bottom"===e.verticalAlignment?"super":null}function f(e){var t=e.style,n=null;if(e){var l=e.constructor;switch(e.type){case x:t!==l.STYLE_CROSS&&t!==l.STYLE_X&&(n=e.color);break;case m:t===l.STYLE_SOLID?n=e.color:t!==l.STYLE_NULL&&(n=r.mixin({},a.defaultPattern,{src:L+t+".png",width:8,height:8}));break;case h:n=r.mixin({},a.defaultPattern,{src:e.url,width:i.pt2px(e.width)*e.xscale,height:i.pt2px(e.height)*e.yscale,x:i.pt2px(e.xoffset),y:i.pt2px(e.yoffset)});break;case b:n=e.color}}return n}function d(e,t){var r=e+"-"+t;return S.has(r)?o.resolve(S.get(r)):l(e,{responseType:"image",allowImageDataAccess:!0}).then(function(e){var a=e.data,n=a.naturalWidth,i=a.naturalHeight,l=document.createElement("canvas");l.width=n,l.height=i;var o=l.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,i),o.globalCompositeOperation="destination-in",o.drawImage(a,0,0);var s=l.toDataURL();return S.set(r,s),s})}function g(e){if(!e)return null;var t,r=e.constructor,a=i.pt2px(e.width);switch(e.type){case m:case h:case x:t=g(e.outline);break;case v:e.style!==r.STYLE_NULL&&0!==a&&(t={color:e.color,style:_(e.style),width:a,cap:e.cap,join:e.join===r.JOIN_MITER?i.pt2px(e.miterLimit):e.join});break;default:t=null}return t}Object.defineProperty(t,"__esModule",{value:!0});var h="picture-fill",m="simple-fill",v="simple-line",x="simple-marker",b="text",L=e.toUrl("../../symbols/patterns/"),w={left:"start",center:"middle",right:"end",justify:"start"},y={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},S=new s(1e3);t.getSVGAlign=c,t.getSVGBaseline=u,t.getSVGBaselineShift=p,t.getFill=f,t.getPatternUrlWithColor=d,t.getStroke=g;var _=function(){var e={};return function(t){if(e[t])return e[t];var r=t.replace(/-/g,"");return e[t]=r,r}}();t.defaultThematicColor=new n([128,128,128])});