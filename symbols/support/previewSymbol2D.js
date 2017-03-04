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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojox/gfx/_base","../SimpleMarkerSymbol","../../core/promiseUtils","../../core/Error","../../core/screenUtils","./renderUtils","./previewUtils","./gfxUtils"],function(e,a,t,s,m,r,l,o,i,n){function c(e,a){var c=a&&a.size?l.pt2px(a.size):null,S=a&&a.maxSize?l.pt2px(a.maxSize):null,k=n.getStroke(e),w={shape:null,fill:n.getFill(e),stroke:k};k&&k.width&&(k.width=Math.min(k.width,M));var f=0,E=0,z=k&&k.width||0,T=!1,U=null;switch(e.type){case v:var _=s.defaultProps,D=e,Y=D.style,A=Math.min(c||l.pt2px(D.size||_.size),S||L);switch(f=A,E=A,Y){case s.STYLE_CIRCLE:w.shape={type:"circle",cx:0,cy:0,r:.5*A};break;case s.STYLE_CROSS:w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[f,.5*E]},{command:"M",values:[.5*f,0]},{command:"L",values:[.5*f,E]},{command:"E",values:[]}]};break;case s.STYLE_DIAMOND:w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[.5*f,0]},{command:"L",values:[f,.5*E]},{command:"L",values:[.5*f,E]},{command:"Z",values:[]}]};break;case s.STYLE_SQUARE:w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]};break;case s.STYLE_X:w.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,E]},{command:"M",values:[f,0]},{command:"L",values:[0,E]},{command:"E",values:[]}]};break;case s.STYLE_PATH:T=!0,w.shape={type:"path",path:D.path||""}}break;case u:var C=Math.min(c||z,S||M),P=C>x?2*C:g;f=P,E=C,k.width=C,z=0,w.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[f,.5*E]},{command:"E",values:[]}]};break;case p:case d:w.shape=i.shapes.fill[0];break;case h:var R=e,j=S||L,H=l.pt2px(R.width),I=l.pt2px(R.height),O=Math.min(c||Math.max(H,I),j),Z=H/I;H=1>=Z?Math.ceil(O*Z):O,I=1>=Z?O:Math.ceil(O/Z),f=H,E=I,U=a.opacity,w.shape={type:"image",x:-Math.round(H/2),y:-Math.round(I/2),width:H,height:I,src:R.get("source.imageData")?"data:"+R.source.contentType+";base64,"+R.source.imageData:R.url||""};break;case y:for(var q=e,F=q.text||b,N=q.font,Q=Math.min(c||l.pt2px(N.size),S||L),X=0,B=0;B<F.length;B++){var G=F.charAt(B),J=G===G.toUpperCase()?.7:.5;X+=Q*J}f=X,E=Q,w.shape={type:"text",text:F,x:0,y:.25*t.normalizedLength((N?Q:0).toString()),align:"middle",decoration:q.decoration||N&&N.decoration,rotated:q.rotated,kerning:q.kerning},w.font=N&&{size:Q,style:N.style,variant:N.variant,decoration:N.decoration,weight:N.weight,family:N.family}}return w.shape?(f=(f||x)+2*z,E=(E||x)+2*z,m.resolve(o.renderSymbol([[w]],[f,E],{node:a&&a.node,scale:T,opacity:U}))):m.reject(new r("symbolPreview: renderPreviewHTML2D","symbol not supported."))}var p="picture-fill-symbol",h="picture-marker-symbol",d="simple-fill-symbol",u="simple-line-symbol",v="simple-marker-symbol",y="text-symbol",b="Aa",x=22,L=120,M=80,g=40;a.previewSymbol2D=c});