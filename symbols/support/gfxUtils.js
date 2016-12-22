// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojox/gfx/_base","../../Color","../../core/screenUtils"],function(e,t,a,r,i,l){function n(e){var t=e.horizontalAlignment;return t=t&&b[t.toLowerCase()]||"middle"}function o(e){var t=e.verticalAlignment;return t&&x[t.toLowerCase()]||"alphabetic"}function s(e){return"bottom"===e.verticalAlignment?"super":null}function c(e){var t=e.style,i=null;if(e){var n=e.constructor;switch(e.type){case L:t!==n.STYLE_CROSS&&t!==n.STYLE_X&&(i=e.color);break;case d:t===n.STYLE_SOLID?i=e.color:t!==n.STYLE_NULL&&(i=a.mixin({},r.defaultPattern,{src:m+t+".png",width:10,height:10}));break;case h:i=a.mixin({},r.defaultPattern,{src:e.url,width:l.pt2px(e.width)*e.xscale,height:l.pt2px(e.height)*e.yscale,x:l.pt2px(e.xoffset),y:l.pt2px(e.yoffset)});break;case g:i=e.color}}return i}function p(e){if(!e)return null;var t,a=e.constructor,r=l.pt2px(e.width);switch(e.type){case d:case h:case L:t=p(e.outline);break;case y:e.style!==a.STYLE_NULL&&0!==r&&(t={color:e.color,style:S(e.style),width:r,cap:e.cap,join:e.join===a.JOIN_MITER?l.pt2px(e.miterLimit):e.join});break;default:t=null}return t}function u(e){if(!e)return{defaultShape:null,fill:null,font:null,stroke:null};var t={defaultShape:null,fill:c(e),font:null,stroke:p(e)},a=e.constructor,r=a.defaultProps,i=null;switch(e.type){case L:var n=e.style,o=l.pt2px(e.size||r.size),s=.5*o,u=-s,m=+s,b=-s,x=+s;switch(n){case a.STYLE_CIRCLE:i={type:"circle",cx:0,cy:0,r:s};break;case a.STYLE_CROSS:i={type:"path",path:"M "+u+",0 L "+m+",0 M 0,"+b+" L 0,"+x+" E"};break;case a.STYLE_DIAMOND:i={type:"path",path:"M "+u+",0 L 0,"+b+" L "+m+",0 L 0,"+x+" L "+u+",0 Z"};break;case a.STYLE_SQUARE:i={type:"path",path:"M "+u+","+x+" L "+u+","+b+" L "+m+","+b+" L "+m+","+x+" L "+u+","+x+" Z"};break;case a.STYLE_X:i={type:"path",path:"M "+u+","+x+" L "+m+","+b+" M "+u+","+b+" L "+m+","+x+" E"};break;case a.STYLE_PATH:i={type:"path",path:e.path||""}}break;case y:i={type:"path",path:"M -15,0 L 15,0 E"};break;case h:case d:i={type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 E"};break;case f:i={type:"image",x:-Math.round(l.pt2px(e.width)/2),y:-Math.round(l.pt2px(e.height)/2),width:l.pt2px(e.width),height:l.pt2px(e.height),src:e.source&&e.source.imageData?"data:"+e.source.contentType+";base64,"+e.source.imageData:e.url||""};break;case g:var S=e.font,k=l.pt2px(S.size);i={type:"text",text:e.text,x:0,y:.25*k,align:"middle",decoration:e.decoration||S&&S.decoration,rotated:e.rotated,kerning:e.kerning},t.font=S&&{size:k+"px",style:S.style,variant:S.variant,weight:S.weight,family:S.family}}return t.defaultShape=i,t}var h="picture-fill-symbol",f="picture-marker-symbol",d="simple-fill-symbol",y="simple-line-symbol",L="simple-marker-symbol",g="text-symbol",m=e.toUrl("../../symbols/patterns/"),b={left:"start",center:"middle",right:"end",justify:"start"},x={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"};t.getSVGAlign=n,t.getSVGBaseline=o,t.getSVGBaselineShift=s,t.getFill=c,t.getStroke=p;var S=function(){var e={};return function(t){if(e[t])return e[t];var a=t.replace(/-/g,"");return e[t]=a,a}}();t.getShapeDescriptors=u,t.defaultThematicColor=new i([128,128,128])});