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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojox/gfx/_base","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,s,l,n,i,r,o){function m(e,a){var t=k.getContext("2d"),s=[];return a&&(a.weight&&s.push(a.weight),a.size&&s.push(a.size+"px"),a.family&&s.push(a.family)),t.font=s.join(" "),t.measureText(e).width}function c(e,a){var c=a&&a.size?n.pt2px(a.size):null,k=a&&a.maxSize?n.pt2px(a.maxSize):null,L=a&&null!=a.opacity?a.opacity:null,z=a&&null!=a.rotation?a.rotation:null,E=i.getStroke(e),S={shape:null,fill:null,stroke:E};E&&E.width&&(E.width=Math.min(E.width,w));var U=0,j=0,P=E&&E.width||0,C=!1,F=null;switch(e.type){case v:var Z=e,_=Z.style,q=Math.min(c||n.pt2px(Z.size),k||g);switch(U=q,j=q,_){case"circle":S.shape={type:"circle",cx:0,cy:0,r:.5*q};break;case"cross":S.shape={type:"path",path:[{command:"M",values:[0,.5*j]},{command:"L",values:[U,.5*j]},{command:"M",values:[.5*U,0]},{command:"L",values:[.5*U,j]},{command:"E",values:[]}]};break;case"diamond":S.shape={type:"path",path:[{command:"M",values:[0,.5*j]},{command:"L",values:[.5*U,0]},{command:"L",values:[U,.5*j]},{command:"L",values:[.5*U,j]},{command:"Z",values:[]}]};break;case"square":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,0]},{command:"L",values:[U,j]},{command:"L",values:[0,j]},{command:"Z",values:[]}]};break;case"triangle":S.shape={type:"path",path:[{command:"M",values:[.5*U,0]},{command:"L",values:[U,j]},{command:"L",values:[0,j]},{command:"Z",values:[]}]};break;case"x":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,j]},{command:"M",values:[U,0]},{command:"L",values:[0,j]},{command:"E",values:[]}]};break;case"path":C=!0,S.shape={type:"path",path:Z.path||""}}break;case d:var D=Math.min(c||P,k||w);U=D>x?2*D:M,j=D,E.width=D,P=0,S.shape={type:"path",path:[{command:"M",values:[0,.5*j]},{command:"L",values:[U,.5*j]},{command:"E",values:[]}]};break;case p:case u:var T=Math.min(c,k||g);U=T,j=T,C=!0,S.shape=r.shapes.fill[0];break;case h:var A=e,H=k||g,O=n.pt2px(A.width),W=n.pt2px(A.height),B=Math.min(c||Math.max(O,W),H),G=O/W;O=G<=1?Math.ceil(B*G):B,W=G<=1?B:Math.ceil(B/G),U=O,j=W,F=L,S.shape={type:"image",x:-Math.round(O/2),y:-Math.round(W/2),width:O,height:W,src:A.url||""};break;case y:var I=e,J=I.text||f,K=I.font,N=Math.min(c||n.pt2px(K.size),k||g),Q=m(J,{weight:K.weight,size:N,family:K.family}),R=/[\uE600-\uE6FF]/.test(J);U=R?N:Q,j=N;var V=.25*t.normalizedLength((K?N:0).toString());R&&(V+=5),S.shape={type:"text",text:J,x:0,y:V,align:"middle",decoration:K&&K.decoration,rotated:I.rotated,kerning:I.kerning},S.font=K&&{size:N,style:K.style,decoration:K.decoration,weight:K.weight,family:K.family}}if(!S.shape)return l.reject(new s("symbolPreview: renderPreviewHTML2D","symbol not supported."));U=(U||x)+P+b,j=(j||x)+P+b;var X=i.getFill(e),Y=X,$=e.color,ee=null;return Y&&"pattern"===Y.type&&$&&e.type!==p?ee=i.getPatternUrlWithColor(Y.src,$.toCss(!0)).then(function(e){return Y.src=e,S.fill=Y,S}):(S.fill=X,ee=l.resolve(S)),ee.then(function(e){return o.renderSymbol([[e]],[U,j],{node:a&&a.node,scale:C,opacity:F,rotation:z})})}Object.defineProperty(a,"__esModule",{value:!0});var p="picture-fill",h="picture-marker",u="simple-fill",d="simple-line",v="simple-marker",y="text",f="Aa",x=22,g=120,w=80,M=40,b=1,k=document.createElement("canvas");a.previewSymbol2D=c});