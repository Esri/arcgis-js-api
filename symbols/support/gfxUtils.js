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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../Color","../../request","../../core/ItemCache","../../core/promiseUtils","../../core/screenUtils"],function(e,t,r,i,n,a,l,o){function s(e){var t=e.horizontalAlignment;return t=t&&C[t.toLowerCase()]||"middle"}function c(e){var t=e.verticalAlignment;return t&&k[t.toLowerCase()]||"alphabetic"}function u(e){return"bottom"===e.verticalAlignment?"super":null}function p(e){var t=e.style,i=null;if(e)switch(e.type){case x:"cross"!==t&&"x"!==t&&(i=e.color);break;case m:"solid"===t?i=e.color:"none"!==t&&(i=r({},b,{src:w+t+".png",width:8,height:8}));break;case g:i=r({},b,{src:e.url,width:o.pt2px(e.width)*e.xscale,height:o.pt2px(e.height)*e.yscale,x:o.pt2px(e.xoffset),y:o.pt2px(e.yoffset)});break;case y:i=e.color}return i}function f(e,t){var r=e+"-"+t;return void 0!==S.get(r)?l.resolve(S.get(r)):n(e,{responseType:"image"}).then(function(e){var i=e.data,n=i.naturalWidth,a=i.naturalHeight,l=document.createElement("canvas");l.width=n,l.height=a;var o=l.getContext("2d");o.fillStyle=t,o.fillRect(0,0,n,a),o.globalCompositeOperation="destination-in",o.drawImage(i,0,0);var s=l.toDataURL();return S.put(r,s),s})}function h(e){if(!e)return null;var t,r=o.pt2px(e.width);switch(e.type){case m:case g:case x:t=h(e.outline);break;case v:"none"!==e.style&&0!==r&&(t={color:e.color,style:j(e.style),width:r,cap:e.cap,join:"miter"===e.join?o.pt2px(e.miterLimit):e.join});break;default:t=null}return t}function d(e){for(var t=e.surface,r=e.colors,i=e.numClasses,n=e.size,a=t.createGroup(),l=n||75,o=l/i,s=0;s<i;s++)for(var c=s*o,u=0;u<i;u++){var p=r[s][u],f=u*o;a.createRect({x:f,y:c,width:o,height:o}).setFill(p).setStroke(null)}return a}Object.defineProperty(t,"__esModule",{value:!0});var g="picture-fill",m="simple-fill",v="simple-line",x="simple-marker",y="text",w=e.toUrl("../../symbols/patterns/"),b={type:"pattern",x:0,y:0,width:0,height:0,src:""},C={left:"start",center:"middle",right:"end",justify:"start"},k={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},S=new a(1e3);t.getSVGAlign=s,t.getSVGBaseline=c,t.getSVGBaselineShift=u,t.getFill=p,t.getPatternUrlWithColor=f,t.getStroke=h,t.create2DColorRamp=d;var j=function(){var e={};return function(t){if(e[t])return e[t];var r=t.replace(/-/g,"");return e[t]=r,r}}();t.defaultThematicColor=new i([128,128,128])});