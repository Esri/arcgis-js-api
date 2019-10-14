// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../core/promiseUtils","../../core/screenUtils","./gfxUtils","./previewUtils","./renderUtils"],function(e,a,t,r,n,s,i,l){function c(e,a){var t=k.getContext("2d"),r=[];return a&&(a.weight&&r.push(a.weight),a.size&&r.push(a.size+"px"),a.family&&r.push(a.family)),t.font=r.join(" "),t.measureText(e).width}function o(e){if(0===e.length)return 0;if(e.length>2){var a=n.px2pt(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return t*b*a;case"cm":return t*L*a}}return parseFloat(e)}function m(e,a){var m=a&&a.size?n.pt2px(a.size):null,k=a&&a.maxSize?n.pt2px(a.maxSize):null,b=a&&null!=a.opacity?a.opacity:null,L=a&&null!=a.rotation?a.rotation:null,z=s.getStroke(e),S={shape:null,fill:null,stroke:z};z&&z.width&&(z.width=Math.min(z.width,w));var U=0,F=0;switch(e.type){case v:var E=e.style,P=n.pt2px(e.size);switch(U=Math.min(m||P||x,k||M),F=Math.min(m||P||x,k||M),E){case"circle":S.shape={type:"circle",cx:.5*P,cy:.5*P,r:.5*P};break;case"cross":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[U,.5*F]},{command:"M",values:[.5*U,0]},{command:"L",values:[.5*U,F]}]};break;case"diamond":S.shape={type:"path",path:[{command:"M",values:[0,.5*F]},{command:"L",values:[.5*U,0]},{command:"L",values:[U,.5*F]},{command:"L",values:[.5*U,F]},{command:"Z",values:[]}]};break;case"square":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"triangle":S.shape={type:"path",path:[{command:"M",values:[.5*U,0]},{command:"L",values:[U,F]},{command:"L",values:[0,F]},{command:"Z",values:[]}]};break;case"x":S.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[U,F]},{command:"M",values:[U,0]},{command:"L",values:[0,F]}]};break;case"path":S.shape={type:"path",path:e.path||""}}break;case d:var j=Math.min(m||z&&z.width||x,k||w),C=j>x?2*j:g;z.width=j,U=C,F=j,S.shape={type:"path",path:[{command:"M",values:[0,F]},{command:"L",values:[U,F]}]};break;case p:case u:U=Math.min(m||x,k||M),F=Math.min(m||x,k||M),S.shape=i.shapes.fill[0];break;case h:var Z=n.pt2px(e.width),q=n.pt2px(e.height),D=Math.max(Z,q),T=Z/q;Z=T<=1?Math.ceil(D*T):D,q=T<=1?D:Math.ceil(D/T),U=Math.min(m||Z||x,k||M),F=Math.min(m||q||x,k||M),S.shape={type:"image",x:-Math.round(U/2),y:-Math.round(F/2),width:U,height:F,src:e.url||""};break;case y:var _=e,A=_.text||f,H=_.font,O=Math.min(m||n.pt2px(H.size),k||M),W=c(A,{weight:H.weight,size:O,family:H.family}),B=/[\uE600-\uE6FF]/.test(A);U=B?O:W,F=O;var G=.25*o((H?O:0).toString());B&&(G+=5),S.shape={type:"text",text:A,x:0,y:G,align:"middle",decoration:H&&H.decoration,rotated:_.rotated,kerning:_.kerning},S.font=H&&{size:O,style:H.style,decoration:H.decoration,weight:H.weight,family:H.family}}if(!S.shape)return r.reject(new t("symbolPreview: renderPreviewHTML2D","symbol not supported."));var I=s.getFill(e),J=I,K=e.color,N=null;return J&&"pattern"===J.type&&K&&e.type!==p?N=s.getPatternUrlWithColor(J.src,K.toCss(!0)).then(function(e){return J.src=e,S.fill=J,S}):(S.fill=I,N=r.resolve(S)),N.then(function(e){return l.renderSymbol([[e]],[U,F],{node:a&&a.node,scale:!0,opacity:b,rotation:L})})}Object.defineProperty(a,"__esModule",{value:!0});var p="picture-fill",h="picture-marker",u="simple-fill",d="simple-line",v="simple-marker",y="text",f="Aa",x=22,M=120,w=80,g=40,k=document.createElement("canvas"),b=7.2/2.54,L=72/2.54;a.previewSymbol2D=m});