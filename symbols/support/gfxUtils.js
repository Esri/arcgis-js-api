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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojox/gfx/_base","../../Color","../../core/screenUtils"],function(e,t,a,r,l,i){function n(e){var t=e.horizontalAlignment;return t=t&&g[t.toLowerCase()]||"middle"}function o(e){var t=e.verticalAlignment;return t&&m[t.toLowerCase()]||"alphabetic"}function s(e){return"bottom"===e.verticalAlignment?"super":null}function p(e){var t=e.style,l=null;if(e){var n=e.constructor;switch(e.type){case L:t!==n.STYLE_CROSS&&t!==n.STYLE_X&&(l=e.color);break;case d:t===n.STYLE_SOLID?l=e.color:t!==n.STYLE_NULL&&(l=a.mixin({},r.defaultPattern,{src:x+t+".png",width:10,height:10}));break;case h:l=a.mixin({},r.defaultPattern,{src:e.url,width:i.pt2px(e.width)*e.xscale,height:i.pt2px(e.height)*e.yscale,x:i.pt2px(e.xoffset),y:i.pt2px(e.yoffset)});break;case b:l=e.color}}return l}function c(e){if(!e)return null;var t,a=e.constructor,r=i.pt2px(e.width);switch(e.type){case d:case h:case L:t=c(e.outline);break;case y:e.style!==a.STYLE_NULL&&0!==r&&(t={color:e.color,style:S(e.style),width:r,cap:e.cap,join:e.join===a.JOIN_MITER?i.pt2px(e.miterLimit):e.join});break;default:t=null}return t}function u(e){if(!e)return{defaultShape:null,fill:null,font:null,stroke:null};var t={defaultShape:null,fill:p(e),font:null,stroke:c(e)},a=e.constructor,r=a.defaultProps,l=null;switch(e.type){case L:var n=e.style,o=i.pt2px(e.size||r.size),s=.5*o,u=-s,x=+s,g=-s,m=+s;switch(n){case a.STYLE_CIRCLE:l={type:"circle",cx:0,cy:0,r:s};break;case a.STYLE_CROSS:l={type:"path",path:"M "+u+",0 L "+x+",0 M 0,"+g+" L 0,"+m+" E"};break;case a.STYLE_DIAMOND:l={type:"path",path:"M "+u+",0 L 0,"+g+" L "+x+",0 L 0,"+m+" L "+u+",0 Z"};break;case a.STYLE_SQUARE:l={type:"path",path:"M "+u+","+m+" L "+u+","+g+" L "+x+","+g+" L "+x+","+m+" L "+u+","+m+" Z"};break;case a.STYLE_X:l={type:"path",path:"M "+u+","+m+" L "+x+","+g+" M "+u+","+g+" L "+x+","+m+" E"};break;case a.STYLE_PATH:l={type:"path",path:e.path||""}}break;case y:l={type:"path",path:"M -15,0 L 15,0 E"};break;case h:case d:l={type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 E"};break;case f:l={type:"image",x:-Math.round(i.pt2px(e.width)/2),y:-Math.round(i.pt2px(e.height)/2),width:i.pt2px(e.width),height:i.pt2px(e.height),src:e.url||""};break;case b:var S=e.font,k=i.pt2px(S.size);l={type:"text",text:e.text,x:0,y:.25*k,align:"middle",decoration:e.decoration||S&&S.decoration,rotated:e.rotated,kerning:e.kerning},t.font=S&&{size:k+"px",style:S.style,variant:S.variant,weight:S.weight,family:S.family}}return t.defaultShape=l,t}Object.defineProperty(t,"__esModule",{value:!0});var h="picture-fill-symbol",f="picture-marker-symbol",d="simple-fill-symbol",y="simple-line-symbol",L="simple-marker-symbol",b="text-symbol",x=e.toUrl("../../symbols/patterns/"),g={left:"start",center:"middle",right:"end",justify:"start"},m={top:"text-before-edge",middle:"central",baseline:"alphabetic",bottom:"text-after-edge"};t.getSVGAlign=n,t.getSVGBaseline=o,t.getSVGBaselineShift=s,t.getFill=p,t.getStroke=c;var S=function(){var e={};return function(t){if(e[t])return e[t];var a=t.replace(/-/g,"");return e[t]=a,a}}();t.getShapeDescriptors=u,t.defaultThematicColor=new l([128,128,128])});