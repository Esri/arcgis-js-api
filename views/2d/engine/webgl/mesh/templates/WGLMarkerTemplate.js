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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../../symbols/cim/enums","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],function(t,e,r,R,E,G,U,q,z,w,n,K,T,o,i){Object.defineProperty(e,"__esModule",{value:!0});var a=function(k){function A(t,e,r,o,i,a,n,l,s,f,h,p,c,d,u,m,M,x,g){var y=k.call(this)||this;y.height=n,y.width=a,y.xOffset=e*g,y.yOffset=r*g;var v=q.vec2f32.create(),_=G.mat2df32.create(),A=(d===z.Alignment.MAP?1:0)|(h?1:0)<<1|(c?1:0)<<2|(p?1:0)<<3,R=u&&u.sdf;if(E.mat2d.translate(_,_,q.vec2f32.fromValues(y.xOffset,-y.yOffset)),o){E.mat2d.rotate(_,_,3.14159265359/180*o)}var w=T.MarkerMaterialKey.load(T.createMaterialKey(y.geometryType,t,!1));w.sdf=R,w.pattern=!0,w.textureBinding=u.textureBinding,y._materialKey=w.data,y._fillColor=i,y._outlineColor=s,y._sizeOutlineWidth=K.i8888to32(Math.round(Math.sqrt(256*a)),Math.round(Math.sqrt(256*n)),Math.round(Math.sqrt(256*f)),Math.round(Math.sqrt(256*l)));var b=u.rect.x,B=u.rect.y,C=b+u.rect.width,L=B+u.rect.height;m=.5-((.5+m)*u.width+1)/u.rect.width,M=.5-((.5+M)*u.height+1)/u.rect.height,a*=x,n*=x,a*=g,n*=g;var O=Math.round(Math.min(64*x,255)),P=(m-.5)*(a*=u.rect.width/u.width),S=(M-.5)*(n*=u.rect.height/u.height);return y._bitestAndDistRatio=K.i8888to32(0,0,A,O),U.vec2.set(v,P,S),U.vec2.transformMat2d(v,v,_),y._offsetUpperLeft=K.i1616to32(16*v[0],16*v[1]),y._texUpperLeft=K.i1616to32(b,B),U.vec2.set(v,P+a,S),U.vec2.transformMat2d(v,v,_),y._offsetUpperRight=K.i1616to32(16*v[0],16*v[1]),y._texUpperRight=K.i1616to32(C,B),U.vec2.set(v,P,S+n),U.vec2.transformMat2d(v,v,_),y._offsetBottomLeft=K.i1616to32(16*v[0],16*v[1]),y._texBottomLeft=K.i1616to32(b,L),U.vec2.set(v,P+a,S+n),U.vec2.transformMat2d(v,v,_),y._offsetBottomRight=K.i1616to32(16*v[0],16*v[1]),y._texBottomRight=K.i1616to32(C,L),y}return r(A,k),A.fromCIMMarker=function(t,e,r,o){var i=r&&r.width||1,a=r&&r.height||1,n=e.size,l=i/a*e.scaleX,s=e.scaleSymbolsProportionally&&e.frameHeight?n/e.frameHeight:1,f=w.premultiplyAlphaRGBA(e.color),h=w.premultiplyAlphaRGBA(e.outlineColor),p=R.pt2px(n),c=p*l,d=R.pt2px(e.offsetX||0),u=R.pt2px(e.offsetY||0),m=R.pt2px(e.outlineWidth||0)*s,M=e.alignment||z.Alignment.SCREEN,x=R.pt2px(e.referenceSize),g=e.rotation||0;e.rotateClockwise||(g=-g);var y=0,v=0,_=e.anchorPoint;return _&&(e.isAbsoluteAnchorPoint?n&&(y=-_.x/(n*l),v=_.y/n):(y=_.x,v=_.y)),new A(t,d,u,g,f,c,p,x,h,m,e.colorLocked,e.scaleSymbolsProportionally,!1,M,r,y,v,e.sizeRatio,o)},A.fromPictureMarker=function(t,e,r){var o=Math.round(R.pt2px(e.width)),i=Math.round(R.pt2px(e.height)),a=n.PICTURE_FILL_COLOR;return new A(t,Math.round(R.pt2px(e.xoffset||0)),Math.round(R.pt2px(e.yoffset||0)),e.angle,a,o,i,i,0,0,!1,!1,!1,z.Alignment.SCREEN,r,0,0,1,1)},A.fromSimpleMarker=function(t,e,r){var o=w.premultiplyAlphaRGBA(e.color),i=Math.round(R.pt2px(e.size)),a=i,n=Math.round(R.pt2px(e.xoffset||0)),l=Math.round(R.pt2px(e.yoffset||0)),s=e.style,f=e.outline,h=0|(f&&f.color&&w.premultiplyAlphaRGBA(f.color)),p=0|(f&&f.width&&Math.round(R.pt2px(f.width)));return new A(t,n,l,e.angle,o,i,a,a,h,p,!1,!1,"cross"===s||"x"===s,z.Alignment.SCREEN,r,0,0,126/64,1)},A}(o.default(i.default));e.default=a});