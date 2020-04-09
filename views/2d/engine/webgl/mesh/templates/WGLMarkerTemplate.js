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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../../symbols/cim/enums","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],(function(t,e,r,o,i,a,n,l,s,f,c,h,p,d,u,m){Object.defineProperty(e,"__esModule",{value:!0});var M=function(t){function e(e,r,o,i,c,h,u,m,M,x,g,y,v,_,A,w,R,b,B){var C=t.call(this)||this;C.height=u,C.width=h,C.xOffset=r*B,C.yOffset=o*B;var L=s.vec2f32.create(),O=n.mat2df32.create(),P=(_===f.Alignment.MAP?1:0)|(g?1:0)<<1|(v?1:0)<<2|(y?1:0)<<3,S=A&&A.sdf;if(a.mat2d.translate(O,O,s.vec2f32.fromValues(C.xOffset,-C.yOffset)),i){a.mat2d.rotate(O,O,3.14159265359/180*i)}var k=d.MarkerMaterialKey.load(d.createMaterialKey(C.geometryType,e,!1));k.sdf=S,k.pattern=!0,k.textureBinding=A.textureBinding,C._materialKey=k.data,C._fillColor=c,C._outlineColor=M,C._sizeOutlineWidth=p.i8888to32(Math.round(Math.sqrt(256*h)),Math.round(Math.sqrt(256*u)),Math.round(Math.sqrt(256*x)),Math.round(Math.sqrt(256*m)));var E=A.rect.x,q=A.rect.y,G=E+A.rect.width,U=q+A.rect.height;w=.5-((.5+w)*A.width+1)/A.rect.width,R=.5-((.5+R)*A.height+1)/A.rect.height,h*=b,u*=b,h*=B,u*=B;var z=Math.round(Math.min(64*b,255)),K=(w-.5)*(h*=A.rect.width/A.width),T=(R-.5)*(u*=A.rect.height/A.height);return C._bitestAndDistRatio=p.i8888to32(0,0,P,z),l.vec2.set(L,K,T),l.vec2.transformMat2d(L,L,O),C._offsetUpperLeft=p.i1616to32(16*L[0],16*L[1]),C._texUpperLeft=p.i1616to32(E,q),l.vec2.set(L,K+h,T),l.vec2.transformMat2d(L,L,O),C._offsetUpperRight=p.i1616to32(16*L[0],16*L[1]),C._texUpperRight=p.i1616to32(G,q),l.vec2.set(L,K,T+u),l.vec2.transformMat2d(L,L,O),C._offsetBottomLeft=p.i1616to32(16*L[0],16*L[1]),C._texBottomLeft=p.i1616to32(E,U),l.vec2.set(L,K+h,T+u),l.vec2.transformMat2d(L,L,O),C._offsetBottomRight=p.i1616to32(16*L[0],16*L[1]),C._texBottomRight=p.i1616to32(G,U),C}return r(e,t),e.fromCIMMarker=function(t,r,a){var n=a&&a.width||1,l=a&&a.height||1,s=r.size,h=n/l*r.scaleX,p=r.scaleSymbolsProportionally&&r.frameHeight?s/r.frameHeight:1,d=c.premultiplyAlphaRGBA(r.color),u=c.premultiplyAlphaRGBA(r.outlineColor),m=i.pt2px(s),M=m*h,x=i.pt2px(r.offsetX||0),g=i.pt2px(r.offsetY||0),y=i.pt2px(r.outlineWidth||0)*p,v=r.alignment||f.Alignment.SCREEN,_=i.pt2px(r.referenceSize),A=r.rotation||0;r.rotateClockwise||(A=-A);var w=0,R=0,b=r.anchorPoint;return b&&(r.isAbsoluteAnchorPoint?s&&(w=-b.x/(s*h),R=b.y/s):(w=b.x,R=b.y)),new e(t,x,g,A,d,M,m,_,u,y,r.colorLocked,r.scaleSymbolsProportionally,!1,v,a,w,R,r.sizeRatio,o.unwrapOr(r.scaleFactor,1))},e.fromPictureMarker=function(t,r,o){var a=Math.round(i.pt2px(r.width)),n=Math.round(i.pt2px(r.height)),l=h.PICTURE_FILL_COLOR;return new e(t,Math.round(i.pt2px(r.xoffset||0)),Math.round(i.pt2px(r.yoffset||0)),r.angle,l,a,n,n,0,0,!1,!1,!1,f.Alignment.SCREEN,o,0,0,1,1)},e.fromSimpleMarker=function(t,r,o){var a=c.premultiplyAlphaRGBA(r.color),n=Math.round(i.pt2px(r.size)),l=n,s=Math.round(i.pt2px(r.xoffset||0)),h=Math.round(i.pt2px(r.yoffset||0)),p=r.style,d=r.outline,u=0|(d&&d.color&&c.premultiplyAlphaRGBA(d.color)),m=0|(d&&d.width&&Math.round(i.pt2px(d.width))),M=new e(t,s,h,r.angle,a,n,l,l,u,m,!1,!1,"cross"===p||"x"===p,f.Alignment.SCREEN,o,0,0,126/64,1);return M.boundsType="circle"===p?"circle":"square",M},e}(u.default(m.default));e.default=M}));