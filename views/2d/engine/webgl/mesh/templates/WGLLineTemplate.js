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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],function(e,t,i,r,T,v,w,P,g,b,C,o,n){Object.defineProperty(t,"__esModule",{value:!0});var l=r.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),s=function(_){function x(e,t,i,r,o,n,l,s,a,p,u,d,c,y,m,f){var h=_.call(this)||this,L=b.LineMaterialKey.load(b.createMaterialKey(h.geometryType,e,c));return t&&(L.sdf=t.sdf,L.pattern=!0,L.textureBinding=t.textureBinding),h._capType=r,h._joinType=o,h._miterLimitCosine=C.getLimitCosine(n),h.tessellationProperties._fillColor=l,h.tessellationProperties._tl=s,h.tessellationProperties._br=a,h._hasPattern=p,h._isDashed=u,h._joinOnUTurn=f,h._isColorLocked=d,h._isOutline=c,h._zOrder=m,h._materialKey=L.data,h.tessellationProperties._bitset=d?1:0,h.tessellationProperties._halfWidth=.5*i,h.tessellationProperties._halfReferenceWidth=.5*y,h._initializeTessellator(!1),h}return i(x,_),x.fromCIMLine=function(e,t,i,r,o){var n=t.color,l=t.isDashed,s=t.cap;l&&s===v.CapType.ROUND&&(s=v.CapType.SQUARE);var a=t.join,p=T.pt2px(t.width),u=T.pt2px(t.referenceWidth),d=T.pt2px(t.miterLimit),c=n&&w.premultiplyAlphaRGBA(n)||0;if(!i)return new x(e,i,p,s,a,d,c,0,0,!1,l,t.colorLocked,r,u,t.zOrder,o);var y=i.rect,m=i.width,f=i.height,h=y.x+1,L=y.y+1,_=y.x+1+m,g=y.y+1+f;return new x(e,i,p,s,a,d,c,P.i1616to32(h,L),P.i1616to32(_,g),!0,l,t.colorLocked,r,u,t.zOrder,o)},x.fromSimpleLine=function(e,t,i,r,o){var n=i.color,l="solid"!==i.style&&"none"!==i.style,s=g.getCapType(i.cap||"round",l),a=g.getJoinType(i.join||"round"),p=n&&"none"!==i.style&&w.premultiplyAlphaRGBA(n)||0;"none"===i.style&&(p=0);var u=T.pt2px(i.width),d=i.miterLimit;if(!r)return new x(e,r,u,s,a,d,p,0,0,!1,l,!1,t,u,0,o);var c=r.rect,y=r.width,m=r.height,f=c.x+1,h=c.y+1,L=c.x+1+y,_=c.y+1+m;return new x(e,r,u,s,a,d,p,P.i1616to32(f,h),P.i1616to32(L,_),!0,l,!1,t,u,0,o)},x.fromPictureLineSymbol=function(e,t,i,r){return l.error("PictureLineSymbol support does not exist!"),null},x}(o.default(n.default));t.default=s});