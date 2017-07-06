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

define(["require","exports","dojox/gfx/_base","../SimpleMarkerSymbol","../../core/promiseUtils","../../core/Error","../../core/screenUtils","./renderUtils","./previewUtils","./gfxUtils"],function(e,a,t,s,l,r,m,o,i,n){function p(e,a){var p=a&&a.size?m.pt2px(a.size):null,f=a&&a.maxSize?m.pt2px(a.maxSize):null,k=n.getStroke(e),w={shape:null,fill:n.getFill(e),stroke:k};k&&k.width&&(k.width=Math.min(k.width,L));var g=0,E=0,z=k&&k.width||0,_=!1,T=null;switch(e.type){case v:var U=s.defaultProps,Y=e,A=Y.style,P=Math.min(p||m.pt2px(Y.size||U.size),f||x);switch(g=P,E=P,A){case s.STYLE_CIRCLE:w.shape={type:"circle",cx:0,cy:0,r:.5*P};break;case s.STYLE_CROSS:w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[g,.5*E]},{command:"M",values:[.5*g,0]},{command:"L",values:[.5*g,E]},{command:"E",values:[]}]};break;case s.STYLE_DIAMOND:w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[.5*g,0]},{command:"L",values:[g,.5*E]},{command:"L",values:[.5*g,E]},{command:"Z",values:[]}]};break;case s.STYLE_SQUARE:w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[g,0]},{command:"L",values:[g,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]};break;case s.STYLE_X:w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[g,E]},{command:"M",values:[g,0]},{command:"L",values:[0,E]},{command:"E",values:[]}]};break;case s.STYLE_PATH:_=!0,w.shape={type:"path",path:Y.path||""}}break;case u:var C=Math.min(p||z,f||L),D=C>M?2*C:S;g=D,E=C,k.width=C,z=0,w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[g,.5*E]},{command:"E",values:[]}]};break;case c:case d:w.shape=i.shapes.fill[0];break;case h:var j=e,O=f||x,R=m.pt2px(j.width),H=m.pt2px(j.height),I=Math.min(p||Math.max(R,H),O),Z=R/H;R=1>=Z?Math.ceil(I*Z):I,H=1>=Z?I:Math.ceil(I/Z),g=R,E=H,T=a.opacity,w.shape={type:"image",x:-Math.round(R/2),y:-Math.round(H/2),width:R,height:H,src:j.url||""};break;case y:for(var q=e,F=q.text||b,N=q.font,Q=Math.min(p||m.pt2px(N.size),f||x),X=0,B=0;B<F.length;B++){var G=F.charAt(B),J=G===G.toUpperCase()?.7:.5;X+=Q*J}g=X,E=Q,w.shape={type:"text",text:F,x:0,y:.25*t.normalizedLength((N?Q:0).toString()),align:"middle",decoration:q.decoration||N&&N.decoration,rotated:q.rotated,kerning:q.kerning},w.font=N&&{size:Q,style:N.style,variant:N.variant,decoration:N.decoration,weight:N.weight,family:N.family}}return w.shape?(g=(g||M)+2*z,E=(E||M)+2*z,l.resolve(o.renderSymbol([[w]],[g,E],{node:a&&a.node,scale:_,opacity:T}))):l.reject(new r("symbolPreview: renderPreviewHTML2D","symbol not supported."))}Object.defineProperty(a,"__esModule",{value:!0});var c="picture-fill-symbol",h="picture-marker-symbol",d="simple-fill-symbol",u="simple-line-symbol",v="simple-marker-symbol",y="text-symbol",b="Aa",M=22,x=120,L=80,S=40;a.previewSymbol2D=p});