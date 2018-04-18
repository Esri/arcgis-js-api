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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojox/gfx/_base","../../core/Error","../../core/promiseUtils","../../core/screenUtils","../SimpleMarkerSymbol","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,s,i,r,l,n,o,m){function c(e,a){var t=S.getContext("2d"),s=[];return a&&(a.weight&&s.push(a.weight),a.size&&s.push(a.size+"px"),a.family&&s.push(a.family)),t.font=s.join(" "),t.measureText(e).width}function p(e,a){var p=a&&a.size?r.pt2px(a.size):null,S=a&&a.maxSize?r.pt2px(a.maxSize):null,b=n.getStroke(e),k={shape:null,fill:null,stroke:b};b&&b.width&&(b.width=Math.min(b.width,g));var E=0,z=0,T=b&&b.width||0,_=!1,U=null;switch(e.type){case y:var C=l.defaultProps,P=e,Y=P.style,j=Math.min(p||r.pt2px(P.size||C.size),S||M);switch(E=j,z=j,Y){case l.STYLE_CIRCLE:k.shape={type:"circle",cx:0,cy:0,r:.5*j};break;case l.STYLE_CROSS:k.shape={type:"path",path:[{command:"M",values:[0,.5*z]},{command:"L",values:[E,.5*z]},{command:"M",values:[.5*E,0]},{command:"L",values:[.5*E,z]},{command:"E",values:[]}]};break;case l.STYLE_DIAMOND:k.shape={type:"path",path:[{command:"M",values:[0,.5*z]},{command:"L",values:[.5*E,0]},{command:"L",values:[E,.5*z]},{command:"L",values:[.5*E,z]},{command:"Z",values:[]}]};break;case l.STYLE_SQUARE:k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[E,0]},{command:"L",values:[E,z]},{command:"L",values:[0,z]},{command:"Z",values:[]}]};break;case l.STYLE_X:k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[E,z]},{command:"M",values:[E,0]},{command:"L",values:[0,z]},{command:"E",values:[]}]};break;case l.STYLE_PATH:_=!0,k.shape={type:"path",path:P.path||""}}break;case v:var A=Math.min(p||T,S||g);E=A>w?2*A:L,z=A,b.width=A,T=0,k.shape={type:"path",path:[{command:"M",values:[0,.5*z]},{command:"L",values:[E,.5*z]},{command:"E",values:[]}]};break;case h:case u:k.shape=o.shapes.fill[0];break;case d:var D=e,F=S||M,O=r.pt2px(D.width),R=r.pt2px(D.height),H=Math.min(p||Math.max(O,R),F),I=O/R;O=I<=1?Math.ceil(H*I):H,R=I<=1?H:Math.ceil(H/I),E=O,z=R,U=a.opacity,k.shape={type:"image",x:-Math.round(O/2),y:-Math.round(R/2),width:O,height:R,src:D.url||""};break;case f:var Z=e,q=Z.text||x,N=Z.font,Q=Math.min(p||r.pt2px(N.size),S||M),W=c(q,{weight:N.weight,size:Q,family:N.family}),X=/[\uE600-\uE6FF]/.test(q);E=X?Q:W,z=Q;var B=.25*t.normalizedLength((N?Q:0).toString());X&&(B+=5),k.shape={type:"text",text:q,x:0,y:B,align:"middle",decoration:Z.decoration||N&&N.decoration,rotated:Z.rotated,kerning:Z.kerning},k.font=N&&{size:Q,style:N.style,decoration:N.decoration,weight:N.weight,family:N.family}}if(!k.shape)return i.reject(new s("symbolPreview: renderPreviewHTML2D","symbol not supported."));E=(E||w)+2*T,z=(z||w)+2*T;var G=n.getFill(e),J=G,K=e.color,V=null;return J&&"pattern"===J.type&&K&&e.type!==h?V=n.getPatternUrlWithColor(J.src,K.toCss(!0)).then(function(e){return J.src=e,k.fill=J,k}):(k.fill=G,V=i.resolve(k)),V.then(function(e){return m.renderSymbol([[e]],[E,z],{node:a&&a.node,scale:_,opacity:U})})}Object.defineProperty(a,"__esModule",{value:!0});var h="picture-fill",d="picture-marker",u="simple-fill",v="simple-line",y="simple-marker",f="text",x="Aa",w=22,M=120,g=80,L=40,S=document.createElement("canvas");a.previewSymbol2D=p});