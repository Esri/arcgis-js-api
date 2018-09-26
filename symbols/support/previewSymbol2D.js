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

define(["require","exports","dojox/gfx/_base","../../core/Error","../../core/promiseUtils","../../core/screenUtils","../SimpleMarkerSymbol","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,i,l,r,n,s,o,m){function c(e,a){var t=S.getContext("2d"),i=[];return a&&(a.weight&&i.push(a.weight),a.size&&i.push(a.size+"px"),a.family&&i.push(a.family)),t.font=i.join(" "),t.measureText(e).width}function p(e,a){var p=a&&a.size?r.pt2px(a.size):null,S=a&&a.maxSize?r.pt2px(a.maxSize):null,b=a&&null!=a.opacity?a.opacity:null,k=a&&null!=a.rotation?a.rotation:null,E=s.getStroke(e),z={shape:null,fill:null,stroke:E};E&&E.width&&(E.width=Math.min(E.width,g));var T=0,_=0,U=E&&E.width||0,C=!1,P=null;switch(e.type){case y:var Y=n.defaultProps,j=e,A=j.style,D=Math.min(p||r.pt2px(j.size||Y.size),S||w);switch(T=D,_=D,A){case n.STYLE_CIRCLE:z.shape={type:"circle",cx:0,cy:0,r:.5*D};break;case n.STYLE_CROSS:z.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[T,.5*_]},{command:"M",values:[.5*T,0]},{command:"L",values:[.5*T,_]},{command:"E",values:[]}]};break;case n.STYLE_DIAMOND:z.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[.5*T,0]},{command:"L",values:[T,.5*_]},{command:"L",values:[.5*T,_]},{command:"Z",values:[]}]};break;case n.STYLE_SQUARE:z.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[T,0]},{command:"L",values:[T,_]},{command:"L",values:[0,_]},{command:"Z",values:[]}]};break;case n.STYLE_X:z.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[T,_]},{command:"M",values:[T,0]},{command:"L",values:[0,_]},{command:"E",values:[]}]};break;case n.STYLE_PATH:C=!0,z.shape={type:"path",path:j.path||""}}break;case v:var F=Math.min(p||U,S||g);T=F>M?2*F:L,_=F,E.width=F,U=0,z.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[T,.5*_]},{command:"E",values:[]}]};break;case h:case d:var O=Math.min(p,S||w);T=O,_=O,C=!0,z.shape=o.shapes.fill[0];break;case u:var R=e,H=S||w,I=r.pt2px(R.width),Z=r.pt2px(R.height),q=Math.min(p||Math.max(I,Z),H),N=I/Z;I=N<=1?Math.ceil(q*N):q,Z=N<=1?q:Math.ceil(q/N),T=I,_=Z,P=b,z.shape={type:"image",x:-Math.round(I/2),y:-Math.round(Z/2),width:I,height:Z,src:R.url||""};break;case f:var Q=e,W=Q.text||x,X=Q.font,B=Math.min(p||r.pt2px(X.size),S||w),G=c(W,{weight:X.weight,size:B,family:X.family}),J=/[\uE600-\uE6FF]/.test(W);T=J?B:G,_=B;var K=.25*t.normalizedLength((X?B:0).toString());J&&(K+=5),z.shape={type:"text",text:W,x:0,y:K,align:"middle",decoration:Q.decoration||X&&X.decoration,rotated:Q.rotated,kerning:Q.kerning},z.font=X&&{size:B,style:X.style,decoration:X.decoration,weight:X.weight,family:X.family}}if(!z.shape)return l.reject(new i("symbolPreview: renderPreviewHTML2D","symbol not supported."));T=(T||M)+2*U,_=(_||M)+2*U;var V=s.getFill(e),$=V,ee=e.color,ae=null;return $&&"pattern"===$.type&&ee&&e.type!==h?ae=s.getPatternUrlWithColor($.src,ee.toCss(!0)).then(function(e){return $.src=e,z.fill=$,z}):(z.fill=V,ae=l.resolve(z)),ae.then(function(e){return m.renderSymbol([[e]],[T,_],{node:a&&a.node,scale:C,opacity:P,rotation:k})})}Object.defineProperty(a,"__esModule",{value:!0});var h="picture-fill",u="picture-marker",d="simple-fill",v="simple-line",y="simple-marker",f="text",x="Aa",M=22,w=120,g=80,L=40,S=document.createElement("canvas");a.previewSymbol2D=p});