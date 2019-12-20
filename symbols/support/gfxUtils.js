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

define(["require","exports","../../core/tsSupport/assignHelper","../../Color","../../request","../../core/ItemCache","../../core/promiseUtils","../../core/screenUtils"],function(e,t,r,n,i,a,l,o){function s(e){var t=e.horizontalAlignment;return t=t&&b[t.toLowerCase()]||"middle"}function c(e){var t=e.verticalAlignment;return t&&w[t.toLowerCase()]||"alphabetic"}function p(e){return"bottom"===e.verticalAlignment?"super":null}function u(e){var t=e.style,r=null;if(e)switch(e.type){case v:"cross"!==t&&"x"!==t&&(r=e.color);break;case h:"solid"===t?r=e.color:"none"!==t&&(r={type:"pattern",x:0,y:0,src:x+t+".png",width:8,height:8});break;case g:r={type:"pattern",src:e.url,width:o.pt2px(e.width)*e.xscale,height:o.pt2px(e.height)*e.yscale,x:o.pt2px(e.xoffset),y:o.pt2px(e.yoffset)};break;case y:r=e.color}return r}function f(e,t){var r=e+"-"+t;return void 0!==C.get(r)?l.resolve(C.get(r)):i(e,{responseType:"image"}).then(function(e){var n=e.data,i=n.naturalWidth,a=n.naturalHeight,l=document.createElement("canvas");l.width=i,l.height=a;var o=l.getContext("2d");o.fillStyle=t,o.fillRect(0,0,i,a),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0);var s=l.toDataURL();return C.put(r,s),s})}function d(e){if(!e)return null;var t;switch(e.type){case h:case g:case v:t=d(e.outline);break;case m:var r=o.pt2px(e.width);"none"!==e.style&&0!==r&&(t={color:e.color,style:k(e.style),width:r,cap:e.cap,join:"miter"===e.join?o.pt2px(e.miterLimit):e.join});break;default:t=null}return t}Object.defineProperty(t,"__esModule",{value:!0});var g="picture-fill",h="simple-fill",m="simple-line",v="simple-marker",y="text",x=e.toUrl("../../symbols/patterns/"),b={left:"start",center:"middle",right:"end",justify:"start"},w={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},C=new a(1e3);t.getSVGAlign=s,t.getSVGBaseline=c,t.getSVGBaselineShift=p,t.getFill=u,t.getPatternUrlWithColor=f,t.getStroke=d;var k=function(){var e={};return function(t){if(e[t])return e[t];var r=t.replace(/-/g,"");return e[t]=r,r}}();t.defaultThematicColor=new n([128,128,128])});