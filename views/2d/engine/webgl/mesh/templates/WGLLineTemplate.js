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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],function(e,t,i,r,v,w,P,b,g,x,C,o,n){Object.defineProperty(t,"__esModule",{value:!0});var l=r.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),s=function(_){function T(e,t,i,r,o,n,l,s,a,p,u,d,c,y,m,f){var h=_.call(this)||this,L=x.LineMaterialKey.load(x.createMaterialKey(h.geometryType,e,c));return t&&(L.sdf=t.sdf,L.pattern=!0,L.textureBinding=t.textureBinding),h._capType=r,h._joinType=o,h._miterLimitCosine=C.getLimitCosine(n),h.tessellationProperties._fillColor=l,h.tessellationProperties._tl=s,h.tessellationProperties._br=a,h._hasPattern=p,h._isDashed=u,h._joinOnUTurn=f,h._isColorLocked=d,h._isOutline=c,h._zOrder=m,h._materialKey=L.data,h.tessellationProperties._bitset=d?1:0,h.tessellationProperties._halfWidth=.5*i,h.tessellationProperties._halfReferenceWidth=.5*y,h._initializeTessellator(!1),h}return i(T,_),T.fromCIMLine=function(e,t,i,r,o,n){var l=t.color,s=t.isDashed,a=t.cap;s&&a===w.CapType.ROUND&&(a=w.CapType.SQUARE);var p=t.join,u=v.pt2px(t.width)*n,d=v.pt2px(t.referenceWidth),c=v.pt2px(t.miterLimit),y=l&&P.premultiplyAlphaRGBA(l)||0;if(!i)return new T(e,i,u,a,p,c,y,0,0,!1,s,t.colorLocked,r,d,t.zOrder,o);var m=i.rect,f=i.width,h=i.height,L=m.x+1,_=m.y+1,g=m.x+1+f,x=m.y+1+h;return new T(e,i,u,a,p,c,y,b.i1616to32(L,_),b.i1616to32(g,x),!0,s,t.colorLocked,r,d,t.zOrder,o)},T.fromSimpleLine=function(e,t,i,r,o){var n=i.color,l="solid"!==i.style&&"none"!==i.style,s=g.getCapType(i.cap||"round",l),a=g.getJoinType(i.join||"round"),p=n&&"none"!==i.style&&P.premultiplyAlphaRGBA(n)||0;"none"===i.style&&(p=0);var u=v.pt2px(i.width),d=i.miterLimit;if(!r)return new T(e,r,u,s,a,d,p,0,0,!1,l,!1,t,u,0,o);var c=r.rect,y=r.width,m=r.height,f=c.x+1,h=c.y+1,L=c.x+1+y,_=c.y+1+m;return new T(e,r,u,s,a,d,p,b.i1616to32(f,h),b.i1616to32(L,_),!0,l,!1,t,u,0,o)},T.fromPictureLineSymbol=function(e,t,i,r){return l.error("PictureLineSymbol support does not exist!"),null},T}(o.default(n.default));t.default=s});