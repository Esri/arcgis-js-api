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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],(function(e,a,t,l,n,r,i,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.previewSymbol2D=void 0;var o=document.createElement("canvas");a.previewSymbol2D=function(e,a){var c=null!=(null==a?void 0:a.size)?n.pt2px(a.size):null,u=null!=(null==a?void 0:a.maxSize)?n.pt2px(a.maxSize):null,m=null!=(null==a?void 0:a.opacity)?a.opacity:null,p=null!=(null==a?void 0:a.rotation)?a.rotation:null,h=r.getStroke(e),d={shape:null,fill:null,stroke:h};(null==h?void 0:h.width)&&(h.width=Math.min(h.width,80));var v=(null==h?void 0:h.width)||0,y=null!=c&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),f=0,x=0;switch(e.type){case"simple-marker":var w=e.style,M=Math.min(null!=c?c:n.pt2px(e.size),u||120);switch(f=M,x=M,w){case"circle":d.shape={type:"circle",cx:0,cy:0,r:.5*M},y||(f+=v,x+=v);break;case"cross":d.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[f,.5*x]},{command:"M",values:[.5*f,0]},{command:"L",values:[.5*f,x]}]};break;case"diamond":d.shape={type:"path",path:[{command:"M",values:[0,.5*x]},{command:"L",values:[.5*f,0]},{command:"L",values:[f,.5*x]},{command:"L",values:[.5*f,x]},{command:"Z",values:[]}]},y||(f+=v,x+=v);break;case"square":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},y||(f+=v,x+=v);break;case"triangle":d.shape={type:"path",path:[{command:"M",values:[.5*f,0]},{command:"L",values:[f,x]},{command:"L",values:[0,x]},{command:"Z",values:[]}]},y||(f+=v,x+=v);break;case"x":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,x]},{command:"M",values:[f,0]},{command:"L",values:[0,x]}]};break;case"path":d.shape={type:"path",path:e.path||""},y||(f+=v,x+=v),y=!0}break;case"simple-line":var g=Math.min(null!=c?c:v,u||80),b=g>22?2*g:40;h.width=g,f=b,x=g,d.shape={type:"path",path:[{command:"M",values:[0,x]},{command:"L",values:[f,x]}]};break;case"picture-fill":case"simple-fill":f=Math.min(null!=c?c:22,u||120)+v,x=f,y=!0,d.shape=i.shapes.fill[0];break;case"picture-marker":var k=n.pt2px(e.width),L=n.pt2px(e.height),z=Math.max(k,L),S=k/L;k=S<=1?Math.ceil(z*S):z,L=S<=1?z:Math.ceil(z/S),f=Math.min(null!=c?c:k,u||120),x=Math.min(null!=c?c:L,u||120),d.shape={type:"image",x:-Math.round(f/2),y:-Math.round(x/2),width:f,height:x,src:e.url||""};break;case"text":var U=e,F=U.text||"Aa",E=U.font,P=Math.min(null!=c?c:n.pt2px(E.size),u||120),j=function(e,a){var t=o.getContext("2d"),l=[];return a&&(a.weight&&l.push(a.weight),a.size&&l.push(a.size+"px"),a.family&&l.push(a.family)),t.font=l.join(" "),t.measureText(e).width}(F,{weight:E.weight,size:P,family:E.family}),C=/[\uE600-\uE6FF]/.test(F);f=C?P:j,x=P;var D=.25*function(e){if(0===e.length)return 0;if(e.length>2){var a=n.px2pt(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return t*(7.2/2.54)*a;case"cm":return t*(72/2.54)*a}}return parseFloat(e)}((E?P:0).toString());C&&(D+=5),d.shape={type:"text",text:F,x:0,y:D,align:"middle",decoration:E&&E.decoration,rotated:U.rotated,kerning:U.kerning},d.font=E&&{size:P,style:E.style,decoration:E.decoration,weight:E.weight,family:E.family}}if(!d.shape)return l.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));var Z=r.getFill(e),q=Z,T=e.color,_=null;return q&&"pattern"===q.type&&T&&"picture-fill"!==e.type?_=r.getPatternUrlWithColor(q.src,T.toCss(!0)).then((function(e){return q.src=e,d.fill=q,d})):(d.fill=Z,_=l.resolve(d)),_.then((function(e){return s.renderSymbol([[e]],[f,x],{node:a&&a.node,scale:y,opacity:m,rotation:p})}))}}));