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

define(["require","exports","../../core/tsSupport/assignHelper","../../Color","../../request","../../core/ItemCache","../../core/promiseUtils","../../core/screenUtils"],(function(e,t,r,i,l,n,a,o){Object.defineProperty(t,"__esModule",{value:!0});var s=e.toUrl("../../symbols/patterns/"),c={left:"start",center:"middle",right:"end",justify:"start"},p={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"},u=new n(1e3);t.getSVGAlign=function(e){var t=e.horizontalAlignment;return t=t&&c[t.toLowerCase()]||"middle"},t.getSVGBaseline=function(e){var t=e.verticalAlignment;return t&&p[t.toLowerCase()]||"alphabetic"},t.getSVGBaselineShift=function(e){return"bottom"===e.verticalAlignment?"super":null},t.getFill=function(e){var t=e.style,r=null;if(e)switch(e.type){case"simple-marker":"cross"!==t&&"x"!==t&&(r=e.color);break;case"simple-fill":"solid"===t?r=e.color:"none"!==t&&(r={type:"pattern",x:0,y:0,src:s+t+".png",width:8,height:8});break;case"picture-fill":r={type:"pattern",src:e.url,width:o.pt2px(e.width)*e.xscale,height:o.pt2px(e.height)*e.yscale,x:o.pt2px(e.xoffset),y:o.pt2px(e.yoffset)};break;case"text":r=e.color}return r},t.getPatternUrlWithColor=function(e,t){var r=e+"-"+t;return void 0!==u.get(r)?a.resolve(u.get(r)):l(e,{responseType:"image"}).then((function(e){var i=e.data,l=i.naturalWidth,n=i.naturalHeight,a=document.createElement("canvas");a.width=l,a.height=n;var o=a.getContext("2d");o.fillStyle=t,o.fillRect(0,0,l,n),o.globalCompositeOperation="destination-in",o.drawImage(i,0,0);var s=a.toDataURL();return u.put(r,s),s}))},t.getStroke=function e(t){if(!t)return null;var r;switch(t.type){case"simple-fill":case"picture-fill":case"simple-marker":r=e(t.outline);break;case"simple-line":var i=o.pt2px(t.width);"none"!==t.style&&0!==i&&(r={color:t.color,style:d(t.style),width:i,cap:t.cap,join:"miter"===t.join?o.pt2px(t.miterLimit):t.join});break;default:r=null}return r};var f,d=(f={},function(e){if(f[e])return f[e];var t=e.replace(/-/g,"");return f[e]=t,t});t.defaultThematicColor=new i([128,128,128])}));