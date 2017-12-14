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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojox/gfx/_base","../SimpleMarkerSymbol","../../core/promiseUtils","../../core/Error","../../core/screenUtils","./renderUtils","./previewUtils","./gfxUtils"],function(e,a,t,r,s,l,n,i,o,m){function p(e,a){var p=a&&a.size?n.pt2px(a.size):null,b=a&&a.maxSize?n.pt2px(a.maxSize):null,g=m.getStroke(e),k={shape:null,fill:null,stroke:g};g&&g.width&&(g.width=Math.min(g.width,L));var w=0,E=0,z=g&&g.width||0,_=!1,T=null;switch(e.type){case v:var U=r.defaultProps,C=e,P=C.style,Y=Math.min(p||n.pt2px(C.size||U.size),b||x);switch(w=Y,E=Y,P){case r.STYLE_CIRCLE:k.shape={type:"circle",cx:0,cy:0,r:.5*Y};break;case r.STYLE_CROSS:k.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[w,.5*E]},{command:"M",values:[.5*w,0]},{command:"L",values:[.5*w,E]},{command:"E",values:[]}]};break;case r.STYLE_DIAMOND:k.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[.5*w,0]},{command:"L",values:[w,.5*E]},{command:"L",values:[.5*w,E]},{command:"Z",values:[]}]};break;case r.STYLE_SQUARE:k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[w,0]},{command:"L",values:[w,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]};break;case r.STYLE_X:k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[w,E]},{command:"M",values:[w,0]},{command:"L",values:[0,E]},{command:"E",values:[]}]};break;case r.STYLE_PATH:_=!0,k.shape={type:"path",path:C.path||""}}break;case u:var A=Math.min(p||z,b||L),D=A>M?2*A:S;w=D,E=A,g.width=A,z=0,k.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[w,.5*E]},{command:"E",values:[]}]};break;case c:case d:k.shape=o.shapes.fill[0];break;case h:var j=e,O=b||x,R=n.pt2px(j.width),H=n.pt2px(j.height),I=Math.min(p||Math.max(R,H),O),Z=R/H;R=1>=Z?Math.ceil(I*Z):I,H=1>=Z?I:Math.ceil(I/Z),w=R,E=H,T=a.opacity,k.shape={type:"image",x:-Math.round(R/2),y:-Math.round(H/2),width:R,height:H,src:j.url||""};break;case y:for(var q=e,F=q.text||f,N=q.font,Q=Math.min(p||n.pt2px(N.size),b||x),W=0,X=0;X<F.length;X++){var B=F.charAt(X),G=B===B.toUpperCase()?.7:.5;W+=Q*G}w=W,E=Q,k.shape={type:"text",text:F,x:0,y:.25*t.normalizedLength((N?Q:0).toString()),align:"middle",decoration:q.decoration||N&&N.decoration,rotated:q.rotated,kerning:q.kerning},k.font=N&&{size:Q,style:N.style,decoration:N.decoration,weight:N.weight,family:N.family}}if(!k.shape)return s.reject(new l("symbolPreview: renderPreviewHTML2D","symbol not supported."));w=(w||M)+2*z,E=(E||M)+2*z;var J=m.getFill(e),K=J,V=e.color,$=null;return K&&"pattern"===K.type&&V&&e.type!==c?$=m.getPatternUrlWithColor(K.src,V.toCss(!0)).then(function(e){return K.src=e,k.fill=K,k}):(k.fill=J,$=s.resolve(k)),$.then(function(e){return i.renderSymbol([[e]],[w,E],{node:a&&a.node,scale:_,opacity:T})})}Object.defineProperty(a,"__esModule",{value:!0});var c="picture-fill",h="picture-marker",d="simple-fill",u="simple-line",v="simple-marker",y="text",f="Aa",M=22,x=120,L=80,S=40;a.previewSymbol2D=p});