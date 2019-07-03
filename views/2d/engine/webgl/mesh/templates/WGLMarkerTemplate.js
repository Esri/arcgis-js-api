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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../../symbols/cim/enums","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],function(t,e,r,S,o,_,z,G,O,U,q,A,l,K,T,i,a){Object.defineProperty(e,"__esModule",{value:!0});var W=o.getLogger("esri.views.2d.engine.webgl.WGLMeshTemplate"),n=function(P){function w(t,e,r,o,i,a,l,n,s,h,p,f,c,d,m,u,M,g){var x=P.call(this)||this;(200<a||200<l)&&(W.error(new S("mapview-oversized-resource","Marker size was clamped to the maximum allowed value of 200x200 pixels")),l<a?(l*=200/a,a=200):(a*=200/l,l=200)),x.height=l,x.width=a,x.xOffset=e,x.yOffset=r;var v=U.vec2f32.create(),y=G.mat2df32.create(),w=(d===q.Alignment.MAP?1:0)|(p?1:0)<<1|(c?1:0)<<2|(f?1:0)<<3,_=m&&m.sdf;if(z.mat2d.translate(y,y,U.vec2f32.fromValues(e,-r)),o){z.mat2d.rotate(y,y,3.14159265359/180*o)}var A=T.MarkerMaterialKey.load(T.createMaterialKey(x.geometryType,t,!1));A.sdf=_,A.pattern=!0,A.textureBinding=m.textureBinding,x._materialKey=A.data,x._fillColor=i,x._outlineColor=s,x._sizeOutlineWidth=K.i8888to32(Math.round(Math.sqrt(256*a)),Math.round(Math.sqrt(256*l)),Math.round(Math.sqrt(256*h)),Math.round(Math.sqrt(256*n)));var R=m.rect.x/4,L=m.rect.y/4,b=R+m.rect.width/4,B=L+m.rect.height/4;u=.5-((.5+u)*m.width+1)/m.rect.width,M=.5-((.5+M)*m.height+1)/m.rect.height,a*=g,l*=g;var C=Math.round(Math.min(64*g,255)),k=(u-.5)*(a*=m.rect.width/m.width),E=(M-.5)*(l*=m.rect.height/m.height);return O.vec2.set(v,k,E),O.vec2.transformMat2d(v,v,y),x._offsetUpperLeft=K.i1616to32(16*v[0],16*v[1]),x._texUpperLeft=K.i8888to32(R,L,w,C),O.vec2.set(v,k+a,E),O.vec2.transformMat2d(v,v,y),x._offsetUpperRight=K.i1616to32(16*v[0],16*v[1]),x._texUpperRight=K.i8888to32(b,L,w,C),O.vec2.set(v,k,E+l),O.vec2.transformMat2d(v,v,y),x._offsetBottomLeft=K.i1616to32(16*v[0],16*v[1]),x._texBottomLeft=K.i8888to32(R,B,w,C),O.vec2.set(v,k+a,E+l),O.vec2.transformMat2d(v,v,y),x._offsetBottomRight=K.i1616to32(16*v[0],16*v[1]),x._texBottomRight=K.i8888to32(b,B,w,C),x}return r(w,P),w.fromCIMMarker=function(t,e,r){var o=r&&r.width||1,i=r&&r.height||1,a=e.size,l=o/i*e.scaleX,n=e.scaleSymbolsProportionally&&e.frameHeight?a/e.frameHeight:1,s=A.premultiplyAlphaRGBA(e.color),h=A.premultiplyAlphaRGBA(e.outlineColor),p=_.pt2px(a),f=p*l,c=_.pt2px(e.offsetX||0),d=_.pt2px(e.offsetY||0),m=_.pt2px(e.outlineWidth||0)*n,u=e.alignment||q.Alignment.SCREEN,M=_.pt2px(e.referenceSize),g=e.rotation||0;e.rotateClockwise||(g=-g);var x=0,v=0,y=e.anchorPoint;return y&&(e.isAbsoluteAnchorPoint?a&&(x=-y.x/(a*l),v=y.y/a):(x=y.x,v=y.y)),new w(t,c,d,g,s,f,p,M,h,m,e.colorLocked,e.scaleSymbolsProportionally,!1,u,r,x,v,e.sizeRatio)},w.fromPictureMarker=function(t,e,r){var o=Math.round(_.pt2px(e.width)),i=Math.round(_.pt2px(e.height)),a=l.PICTURE_FILL_COLOR;return new w(t,Math.round(_.pt2px(e.xoffset||0)),Math.round(_.pt2px(e.yoffset||0)),e.angle,a,o,i,i,0,0,!1,!1,!1,q.Alignment.SCREEN,r,0,0,1)},w.fromSimpleMarker=function(t,e,r){var o=A.premultiplyAlphaRGBA(e.color),i=Math.round(_.pt2px(e.size)),a=i,l=Math.round(_.pt2px(e.xoffset||0)),n=Math.round(_.pt2px(e.yoffset||0)),s=e.style,h=e.outline,p=0|(h&&h.color&&A.premultiplyAlphaRGBA(h.color)),f=0|(h&&h.width&&Math.round(_.pt2px(h.width)));return new w(t,l,n,e.angle,o,i,a,a,p,f,!1,!1,"cross"===s||"x"===s,q.Alignment.SCREEN,r,0,0,126/64)},w}(i.default(a.default));e.default=n});