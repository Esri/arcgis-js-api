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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],function(e,t,i,r,x,T,v,w,_,b,C,n,o){Object.defineProperty(t,"__esModule",{value:!0});var l=r.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),a=function(L){function g(e,t,i,r,n,o,l,a,p,s,u,d,c,y,m){var f=L.call(this)||this,h=b.LineMaterialKey.load(b.createMaterialKey(f.geometryType,e,c));return t&&(h.sdf=t.sdf,h.pattern=!0,h.textureBinding=t.textureBinding),f._capType=r,f._joinType=n,f._miterLimitCosine=C.getLimitCosine(o),f._fillColor=l,f._tl=a,f._br=p,f._hasPattern=s,f._isDashed=u,f._isColorLocked=d,f._isOutline=c,f._zOrder=m,f._materialKey=h.data,f._bitset=d?1:0,f._halfWidth=.5*i,f._halfReferenceWidth=.5*y,f._initializeTessellator(!1),f}return i(g,L),g.fromCIMLine=function(e,t,i,r){var n=t.color,o=t.isDashed,l=t.cap;o&&l===T.CapType.ROUND&&(l=T.CapType.SQUARE);var a=t.join,p=x.pt2px(t.width),s=x.pt2px(t.referenceWidth),u=x.pt2px(t.miterLimit),d=n&&v.premultiplyAlphaRGBA(n)||0;if(!i)return new g(e,i,p,l,a,u,d,0,0,!1,o,t.colorLocked,r,s,t.zOrder);var c=i.rect,y=i.width,m=i.height,f=c.x+1,h=c.y+1,L=c.x+1+y,_=c.y+1+m;return new g(e,i,p,l,a,u,d,w.i1616to32(f,h),w.i1616to32(L,_),!0,o,t.colorLocked,r,s,t.zOrder)},g.fromSimpleLine=function(e,t,i,r){var n=i.color,o="solid"!==i.style&&"none"!==i.style,l=_.getCapType(i.cap||"round",o),a=_.getJoinType(i.join||"round"),p=n&&"none"!==i.style&&v.premultiplyAlphaRGBA(n)||0;"none"===i.style&&(p=0);var s=x.pt2px(i.width),u=i.miterLimit;if(!r)return new g(e,r,s,l,a,u,p,0,0,!1,o,!1,t,s,0);var d=r.rect,c=r.width,y=r.height,m=d.x+1,f=d.y+1,h=d.x+1+c,L=d.y+1+y;return new g(e,r,s,l,a,u,p,w.i1616to32(m,f),w.i1616to32(h,L),!0,o,!1,t,s,0)},g.fromPictureLineSymbol=function(e,t,i,r){return l.error("PictureLineSymbol support does not exist!"),null},g}(n.default(o.default));t.default=a});