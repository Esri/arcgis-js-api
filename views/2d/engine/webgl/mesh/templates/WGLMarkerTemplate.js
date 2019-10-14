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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../../../../../symbols/cim/enums","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./WGLBaseMarkerTemplate","./WGLMeshTemplate"],function(t,e,r,A,E,G,O,U,q,R,n,z,K,o,i){Object.defineProperty(e,"__esModule",{value:!0});var a=function(k){function _(t,e,r,o,i,a,n,l,s,h,f,p,c,d,u,m,M,x){var g=k.call(this)||this;g.height=n,g.width=a,g.xOffset=e,g.yOffset=r;var y=U.vec2f32.create(),v=G.mat2df32.create(),_=(d===q.Alignment.MAP?1:0)|(f?1:0)<<1|(c?1:0)<<2|(p?1:0)<<3,A=u&&u.sdf;if(E.mat2d.translate(v,v,U.vec2f32.fromValues(e,-r)),o){E.mat2d.rotate(v,v,3.14159265359/180*o)}var R=K.MarkerMaterialKey.load(K.createMaterialKey(g.geometryType,t,!1));R.sdf=A,R.pattern=!0,R.textureBinding=u.textureBinding,g._materialKey=R.data,g._fillColor=i,g._outlineColor=s,g._sizeOutlineWidth=z.i8888to32(Math.round(Math.sqrt(256*a)),Math.round(Math.sqrt(256*n)),Math.round(Math.sqrt(256*h)),Math.round(Math.sqrt(256*l)));var w=u.rect.x,b=u.rect.y,B=w+u.rect.width,C=b+u.rect.height;m=.5-((.5+m)*u.width+1)/u.rect.width,M=.5-((.5+M)*u.height+1)/u.rect.height,a*=x,n*=x;var L=Math.round(Math.min(64*x,255)),P=(m-.5)*(a*=u.rect.width/u.width),S=(M-.5)*(n*=u.rect.height/u.height);return g._bitestAndDistRatio=z.i8888to32(0,0,_,L),O.vec2.set(y,P,S),O.vec2.transformMat2d(y,y,v),g._offsetUpperLeft=z.i1616to32(16*y[0],16*y[1]),g._texUpperLeft=z.i1616to32(w,b),O.vec2.set(y,P+a,S),O.vec2.transformMat2d(y,y,v),g._offsetUpperRight=z.i1616to32(16*y[0],16*y[1]),g._texUpperRight=z.i1616to32(B,b),O.vec2.set(y,P,S+n),O.vec2.transformMat2d(y,y,v),g._offsetBottomLeft=z.i1616to32(16*y[0],16*y[1]),g._texBottomLeft=z.i1616to32(w,C),O.vec2.set(y,P+a,S+n),O.vec2.transformMat2d(y,y,v),g._offsetBottomRight=z.i1616to32(16*y[0],16*y[1]),g._texBottomRight=z.i1616to32(B,C),g}return r(_,k),_.fromCIMMarker=function(t,e,r){var o=r&&r.width||1,i=r&&r.height||1,a=e.size,n=o/i*e.scaleX,l=e.scaleSymbolsProportionally&&e.frameHeight?a/e.frameHeight:1,s=R.premultiplyAlphaRGBA(e.color),h=R.premultiplyAlphaRGBA(e.outlineColor),f=A.pt2px(a),p=f*n,c=A.pt2px(e.offsetX||0),d=A.pt2px(e.offsetY||0),u=A.pt2px(e.outlineWidth||0)*l,m=e.alignment||q.Alignment.SCREEN,M=A.pt2px(e.referenceSize),x=e.rotation||0;e.rotateClockwise||(x=-x);var g=0,y=0,v=e.anchorPoint;return v&&(e.isAbsoluteAnchorPoint?a&&(g=-v.x/(a*n),y=v.y/a):(g=v.x,y=v.y)),new _(t,c,d,x,s,p,f,M,h,u,e.colorLocked,e.scaleSymbolsProportionally,!1,m,r,g,y,e.sizeRatio)},_.fromPictureMarker=function(t,e,r){var o=Math.round(A.pt2px(e.width)),i=Math.round(A.pt2px(e.height)),a=n.PICTURE_FILL_COLOR;return new _(t,Math.round(A.pt2px(e.xoffset||0)),Math.round(A.pt2px(e.yoffset||0)),e.angle,a,o,i,i,0,0,!1,!1,!1,q.Alignment.SCREEN,r,0,0,1)},_.fromSimpleMarker=function(t,e,r){var o=R.premultiplyAlphaRGBA(e.color),i=Math.round(A.pt2px(e.size)),a=i,n=Math.round(A.pt2px(e.xoffset||0)),l=Math.round(A.pt2px(e.yoffset||0)),s=e.style,h=e.outline,f=0|(h&&h.color&&R.premultiplyAlphaRGBA(h.color)),p=0|(h&&h.width&&Math.round(A.pt2px(h.width)));return new _(t,n,l,e.angle,o,i,a,a,f,p,!1,!1,"cross"===s||"x"===s,q.Alignment.SCREEN,r,0,0,126/64)},_}(o.default(i.default));e.default=a});