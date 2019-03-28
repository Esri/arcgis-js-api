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

define(["require","exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,r,n,s,l,i){function c(e,a){var t=b.getContext("2d"),r=[];return a&&(a.weight&&r.push(a.weight),a.size&&r.push(a.size+"px"),a.family&&r.push(a.family)),t.font=r.join(" "),t.measureText(e).width}function o(e){if(0===e.length)return 0;if(e.length>2){var a=n.px2pt(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return t*L*a;case"cm":return t*z*a}}return parseFloat(e)}function m(e,a){var m=a&&a.size?n.pt2px(a.size):null,b=a&&a.maxSize?n.pt2px(a.maxSize):null,L=a&&null!=a.opacity?a.opacity:null,z=a&&null!=a.rotation?a.rotation:null,E=s.getStroke(e),S={shape:null,fill:null,stroke:E};E&&E.width&&(E.width=Math.min(E.width,g));var U=0,F=0,P=E&&E.width||0,j=!1,C=null;switch(e.type){case v:var Z=e,q=Z.style,D=Math.min(m||n.pt2px(Z.size),b||w);switch(U=D,F=D,q){case"circle":S.shape={type:"circle",cx:0,cy:0,r:.5*D};break;case"cross":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[U,.5*F]},{command:"M",values:[.5*U,0]},{command:"L",values:[.5*U,F]},{command:"E",values:[]}]};break;case"diamond":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[.5*U,0]},{command:"L",values:[U,.5*F]},{command:"L",values:[.5*U,F]},{command:"Z",values:[]}]};break;case"square":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"triangle":S.shape={type:"path",path:[{command:"M",values:[.5*U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"x":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,F]},{command:"M",values:[U,0]},{command:"L",values:[0,F]},{command:"E",values:[]}]};break;case"path":j=!0,S.shape={type:"path",path:Z.path||""}}break;case d:var T=Math.min(m||P,b||g);U=T>x?2*T:M,F=T,E.width=T,P=0,S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[U,.5*F]},{command:"E",values:[]}]};break;case p:case h:var _=Math.min(m,b||w);U=_,F=_,j=!0,S.shape=l.shapes.fill[0];break;case u:var A=e,H=b||w,O=n.pt2px(A.width),W=n.pt2px(A.height),B=Math.min(m||Math.max(O,W),H),G=O/W;O=G<=1?Math.ceil(B*G):B,W=G<=1?B:Math.ceil(B/G),U=O,F=W,C=L,S.shape={type:"image",x:-Math.round(O/2),y:-Math.round(W/2),width:O,height:W,src:A.url||""};break;case y:var I=e,J=I.text||f,K=I.font,N=Math.min(m||n.pt2px(K.size),b||w),Q=c(J,{weight:K.weight,size:N,family:K.family}),R=/[\uE600-\uE6FF]/.test(J);U=R?N:Q,F=N;var V=.25*o((K?N:0).toString());R&&(V+=5),S.shape={type:"text",text:J,x:0,y:V,align:"middle",decoration:K&&K.decoration,rotated:I.rotated,kerning:I.kerning},S.font=K&&{size:N,style:K.style,decoration:K.decoration,weight:K.weight,family:K.family}}if(!S.shape)return r.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));U=(U||x)+P+k,F=(F||x)+P+k;var X=s.getFill(e),Y=X,$=e.color,ee=null;return Y&&"pattern"===Y.type&&$&&e.type!==p?ee=s.getPatternUrlWithColor(Y.src,$.toCss(!0)).then(function(e){return Y.src=e,S.fill=Y,S}):(S.fill=X,ee=r.resolve(S)),ee.then(function(e){return i.renderSymbol([[e]],[U,F],{node:a&&a.node,scale:j,opacity:C,rotation:z})})}Object.defineProperty(a,"__esModule",{value:!0});var p="picture-fill",u="picture-marker",h="simple-fill",d="simple-line",v="simple-marker",y="text",f="Aa",x=22,w=120,g=80,M=40,k=1,b=document.createElement("canvas"),L=7.2/2.54,z=72/2.54;a.previewSymbol2D=m});