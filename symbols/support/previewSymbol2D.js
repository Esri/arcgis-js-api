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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,r,n,s,i,l){function c(e,a){var t=b.getContext("2d"),r=[];return a&&(a.weight&&r.push(a.weight),a.size&&r.push(a.size+"px"),a.family&&r.push(a.family)),t.font=r.join(" "),t.measureText(e).width}function o(e){if(0===e.length)return 0;if(e.length>2){var a=n.px2pt(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return t*L*a;case"cm":return t*z*a}}return parseFloat(e)}function m(e,a){var m=a&&a.size?n.pt2px(a.size):null,b=a&&a.maxSize?n.pt2px(a.maxSize):null,L=a&&null!=a.opacity?a.opacity:null,z=a&&null!=a.rotation?a.rotation:null,E=s.getStroke(e),S={shape:null,fill:null,stroke:E};E&&E.width&&(E.width=Math.min(E.width,g));var U=0,F=0,P=E&&E.width||0,j=!1;switch(e.type){case v:var C=e,Z=C.style,q=Math.min(m||n.pt2px(C.size),b||w);switch(U=q,F=q,Z){case"circle":S.shape={type:"circle",cx:0,cy:0,r:.5*q};break;case"cross":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[U,.5*F]},{command:"M",values:[.5*U,0]},{command:"L",values:[.5*U,F]},{command:"E",values:[]}]};break;case"diamond":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[.5*U,0]},{command:"L",values:[U,.5*F]},{command:"L",values:[.5*U,F]},{command:"Z",values:[]}]};break;case"square":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"triangle":S.shape={type:"path",path:[{command:"M",values:[.5*U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"x":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,F]},{command:"M",values:[U,0]},{command:"L",values:[0,F]},{command:"E",values:[]}]};break;case"path":j=!0,S.shape={type:"path",path:C.path||""}}break;case d:var D=Math.min(m||P,b||g);U=D>x?2*D:M,F=D,E.width=D,P=0,S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[U,.5*F]},{command:"E",values:[]}]};break;case p:case h:var T=Math.min(m,b||w);U=T,F=T,j=!0,S.shape=i.shapes.fill[0];break;case u:var _=e,A=b||w,H=n.pt2px(_.width),O=n.pt2px(_.height),W=Math.min(m||Math.max(H,O),A),B=H/O;H=B<=1?Math.ceil(W*B):W,O=B<=1?W:Math.ceil(W/B),U=H,F=O,S.shape={type:"image",x:-Math.round(H/2),y:-Math.round(O/2),width:H,height:O,src:_.url||""};break;case y:var G=e,I=G.text||f,J=G.font,K=Math.min(m||n.pt2px(J.size),b||w),N=c(I,{weight:J.weight,size:K,family:J.family}),Q=/[\uE600-\uE6FF]/.test(I);U=Q?K:N,F=K;var R=.25*o((J?K:0).toString());Q&&(R+=5),S.shape={type:"text",text:I,x:0,y:R,align:"middle",decoration:J&&J.decoration,rotated:G.rotated,kerning:G.kerning},S.font=J&&{size:K,style:J.style,decoration:J.decoration,weight:J.weight,family:J.family}}if(!S.shape)return r.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));U=(U||x)+P+k,F=(F||x)+P+k;var V=s.getFill(e),X=V,Y=e.color,$=null;return X&&"pattern"===X.type&&Y&&e.type!==p?$=s.getPatternUrlWithColor(X.src,Y.toCss(!0)).then(function(e){return X.src=e,S.fill=X,S}):(S.fill=V,$=r.resolve(S)),$.then(function(e){return l.renderSymbol([[e]],[U,F],{node:a&&a.node,scale:j,opacity:L,rotation:z})})}Object.defineProperty(a,"__esModule",{value:!0});var p="picture-fill",u="picture-marker",h="simple-fill",d="simple-line",v="simple-marker",y="text",f="Aa",x=22,w=120,g=80,M=40,k=1,b=document.createElement("canvas"),L=7.2/2.54,z=72/2.54;a.previewSymbol2D=m});