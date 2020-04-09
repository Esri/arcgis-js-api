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

define(["require","exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],(function(e,a,t,r,n,i,s,l){Object.defineProperty(a,"__esModule",{value:!0});var c=document.createElement("canvas");a.previewSymbol2D=function(e,a){var o=a&&a.size?n.pt2px(a.size):null,m=a&&a.maxSize?n.pt2px(a.maxSize):null,p=a&&null!=a.opacity?a.opacity:null,h=a&&null!=a.rotation?a.rotation:null,u=i.getStroke(e),d={shape:null,fill:null,stroke:u};u&&u.width&&(u.width=Math.min(u.width,80));var v=0,y=0;switch(e.type){case"simple-marker":var f=e.style,x=n.pt2px(e.size);switch(v=Math.min(o||x||22,m||120),y=Math.min(o||x||22,m||120),f){case"circle":d.shape={type:"circle",cx:.5*x,cy:.5*x,r:.5*x};break;case"cross":d.shape={type:"path",path:[{command:"M",values:[0,.5*y]},{command:"L",values:[v,.5*y]},{command:"M",values:[.5*v,0]},{command:"L",values:[.5*v,y]}]};break;case"diamond":d.shape={type:"path",path:[{command:"M",values:[0,.5*y]},{command:"L",values:[.5*v,0]},{command:"L",values:[v,.5*y]},{command:"L",values:[.5*v,y]},{command:"Z",values:[]}]};break;case"square":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[v,0]},{command:"L",values:[v,y]},{command:"L",values:[0,y]},{command:"Z",values:[]}]};break;case"triangle":d.shape={type:"path",path:[{command:"M",values:[.5*v,0]},{command:"L",values:[v,y]},{command:"L",values:[0,y]},{command:"Z",values:[]}]};break;case"x":d.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[v,y]},{command:"M",values:[v,0]},{command:"L",values:[0,y]}]};break;case"path":d.shape={type:"path",path:e.path||""}}break;case"simple-line":var M=Math.min(o||u&&u.width||22,m||80),w=M>22?2*M:40;u.width=M,v=w,y=M,d.shape={type:"path",path:[{command:"M",values:[0,y]},{command:"L",values:[v,y]}]};break;case"picture-fill":case"simple-fill":v=Math.min(o||22,m||120),y=Math.min(o||22,m||120),d.shape=s.shapes.fill[0];break;case"picture-marker":var g=n.pt2px(e.width),k=n.pt2px(e.height),b=Math.max(g,k),L=g/k;g=L<=1?Math.ceil(b*L):b,k=L<=1?b:Math.ceil(b/L),v=Math.min(o||g||22,m||120),y=Math.min(o||k||22,m||120),d.shape={type:"image",x:-Math.round(v/2),y:-Math.round(y/2),width:v,height:y,src:e.url||""};break;case"text":var z=e,S=z.text||"Aa",U=z.font,F=Math.min(o||n.pt2px(U.size),m||120),E=function(e,a){var t=c.getContext("2d"),r=[];return a&&(a.weight&&r.push(a.weight),a.size&&r.push(a.size+"px"),a.family&&r.push(a.family)),t.font=r.join(" "),t.measureText(e).width}(S,{weight:U.weight,size:F,family:U.family}),P=/[\uE600-\uE6FF]/.test(S);v=P?F:E,y=F;var j=.25*function(e){if(0===e.length)return 0;if(e.length>2){var a=n.px2pt(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return t*(7.2/2.54)*a;case"cm":return t*(72/2.54)*a}}return parseFloat(e)}((U?F:0).toString());P&&(j+=5),d.shape={type:"text",text:S,x:0,y:j,align:"middle",decoration:U&&U.decoration,rotated:z.rotated,kerning:z.kerning},d.font=U&&{size:F,style:U.style,decoration:U.decoration,weight:U.weight,family:U.family}}if(!d.shape)return r.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));var C=i.getFill(e),Z=C,q=e.color,D=null;return Z&&"pattern"===Z.type&&q&&"picture-fill"!==e.type?D=i.getPatternUrlWithColor(Z.src,q.toCss(!0)).then((function(e){return Z.src=e,d.fill=Z,d})):(d.fill=C,D=r.resolve(d)),D.then((function(e){return l.renderSymbol([[e]],[v,y],{node:a&&a.node,scale:!0,opacity:p,rotation:h})}))}}));