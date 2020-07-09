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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2f32","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],(function(t,e,r,a,o,i,n,l,h,c,p,u,s){Object.defineProperty(e,"__esModule",{value:!0});var d=function(t){function e(e,r,a,o,l,h,u,s,d,f,m,M,x,y,g,_,w,b,A,k,v){var B=t.call(this)||this;B.angle=o,B.height=u,B.width=h,B.xOffset=r*A,B.yOffset=a*A,B._markerPlacement=k,B.effects=v,B._anchorX=.5-((.5+_)*g.width+1)/g.rect.width,B._anchorY=.5-((.5+w)*g.height+1)/g.rect.height;var R=(1===y?1:0)|(m?1:0)<<1|(x?1:0)<<2|(M?1:0)<<3,L=g&&g.sdf,P=p.MarkerMaterialKey.load(p.createMaterialKey(B.geometryType,e,!1));P.sdf=L,P.pattern=!0,P.textureBinding=g.textureBinding,B._materialKey=P.data,B._fillColor=l,B._outlineColor=d,B._sizeOutlineWidth=c.i8888to32(Math.round(Math.min(Math.sqrt(128*h),255)),Math.round(Math.min(Math.sqrt(128*u),255)),Math.round(Math.min(Math.sqrt(128*f),255)),Math.round(Math.min(Math.sqrt(128*s),255)));var C=g.rect.x,G=g.rect.y,T=C+g.rect.width,q=G+g.rect.height;B._texUpperLeft=c.i1616to32(C,G),B._texUpperRight=c.i1616to32(T,G),B._texBottomLeft=c.i1616to32(C,q),B._texBottomRight=c.i1616to32(T,q),h*=b,u*=b,h*=A,u*=A;var O=Math.round(Math.min(64*b,255));B._bitestAndDistRatio=c.i8888to32(0,0,R,O),h*=g.rect.width/g.width,u*=g.rect.height/g.height,B._computedWidth=h,B._computedHeight=u;var z=n.vec2f32.create(),K=i.mat2df32.create();return B._applyTransformation(K,z),B}return r.__extends(e,t),e.fromCIMMarker=function(t,r,i){var n=i&&i.width||1,h=i&&i.height||1,c=r.size,p=n/h*r.scaleX,u=r.scaleSymbolsProportionally&&r.frameHeight?c/r.frameHeight:1,s=l.premultiplyAlphaRGBA(r.color),d=l.premultiplyAlphaRGBA(r.outlineColor),f=o.pt2px(c),m=f*p,M=o.pt2px(r.offsetX||0),x=o.pt2px(r.offsetY||0),y=o.pt2px(r.outlineWidth||0)*u,g=r.alignment||0,_=o.pt2px(r.referenceSize),w=r.rotation||0;r.rotateClockwise||(w=-w);var b=0,A=0,k=r.anchorPoint;return k&&(r.isAbsoluteAnchorPoint?c&&(b=-k.x/(c*p),A=k.y/c):(b=k.x,A=k.y)),new e(t,M,x,w,s,m,f,_,d,y,r.colorLocked,r.scaleSymbolsProportionally,!1,g,i,b,A,r.sizeRatio,a.unwrapOr(r.scaleFactor,1),r.markerPlacement,r.effects)},e.fromPictureMarker=function(t,r,a){var i=Math.round(o.pt2px(r.width)),n=Math.round(o.pt2px(r.height)),l=h.PICTURE_FILL_COLOR;return new e(t,Math.round(o.pt2px(r.xoffset||0)),Math.round(o.pt2px(r.yoffset||0)),r.angle,l,i,n,n,0,0,!1,!1,!1,0,a,0,0,1,1,null,null)},e.fromSimpleMarker=function(t,r,a){var i=l.premultiplyAlphaRGBA(r.color),n=Math.round(o.pt2px(r.size)),h=n,c=Math.round(o.pt2px(r.xoffset||0)),p=Math.round(o.pt2px(r.yoffset||0)),u=r.style,s=r.outline,d=0|(s&&s.color&&l.premultiplyAlphaRGBA(s.color)),f=0|(s&&s.width&&Math.round(o.pt2px(s.width))),m=new e(t,c,p,r.angle,i,n,h,h,d,f,!1,!1,"cross"===u||"x"===u,0,a,0,0,126/64,1,null,null);return m.boundsType="circle"===u?"circle":"square",m},e.fromLineSymbolMarker=function(t,r,a){var i,n=r.marker,h=n.color?l.premultiplyAlphaRGBA(n.color):l.premultiplyAlphaRGBA(r.color),c=Math.round(o.pt2px(6*r.width)),p=c,u=n.style,s="cross"===u||"x"===u;switch(n.placement){case"begin-end":i="Both";break;case"begin":i="JustBegin";break;case"end":i="JustEnd";break;default:i="None"}var d={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:i,offsetAlongLine:0},f=new e(t,0,0,0,h,c,p,p/6,h,s?Math.round(o.pt2px(r.width)):0,!1,!1,s,1,a,0,0,126/64,1,d,null);return f.boundsType="circle"===u?"circle":"square",f},e}(u.default(s.default));e.default=d}));