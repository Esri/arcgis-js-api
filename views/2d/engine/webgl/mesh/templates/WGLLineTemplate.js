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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],(function(e,t,r,i,o,n,l,s,a,p,u,c,d){Object.defineProperty(t,"__esModule",{value:!0});var y=i.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),m=function(e){function t(t,r,i,o,n,l,s,a,c,d,y,m,f,h,L,_){var g=e.call(this)||this,x=p.LineMaterialKey.load(p.createMaterialKey(g.geometryType,t,f));return r&&(x.sdf=r.sdf,x.pattern=!0,x.textureBinding=r.textureBinding),g._capType=o,g._joinType=n,g._miterLimitCosine=u.getLimitCosine(l),g.tessellationProperties._fillColor=s,g.tessellationProperties._tl=a,g.tessellationProperties._br=c,g._hasPattern=d,g._isDashed=y,g._joinOnUTurn=_,g._isColorLocked=m,g._isOutline=f,g._zOrder=L,g._materialKey=x.data,g.tessellationProperties._bitset=m?1:0,g.tessellationProperties._halfWidth=.5*i,g.tessellationProperties._halfReferenceWidth=.5*h,g._initializeTessellator(!1),g}return r(t,e),t.fromCIMLine=function(e,r,i,a,p){var u=r.color,c=r.scaleFactor||1,d=r.isDashed,y=r.cap;d&&y===n.CapType.ROUND&&(y=n.CapType.SQUARE);var m=r.join,f=o.pt2px(r.width)*c,h=o.pt2px(r.referenceWidth),L=o.pt2px(r.miterLimit),_=u&&l.premultiplyAlphaRGBA(u)||0;if(!i)return new t(e,i,f,y,m,L,_,0,0,!1,d,r.colorLocked,a,h,r.zOrder,p);var g=i.rect,x=i.width,T=i.height,v=g.x+1,w=g.y+1,P=g.x+1+x,b=g.y+1+T;return new t(e,i,f,y,m,L,_,s.i1616to32(v,w),s.i1616to32(P,b),!0,d,r.colorLocked,a,h,r.zOrder,p)},t.fromSimpleLine=function(e,r,i,n,p){var u=i.color,c="solid"!==i.style&&"none"!==i.style,d=a.getCapType(i.cap||"round",c),y=a.getJoinType(i.join||"round"),m=u&&"none"!==i.style&&l.premultiplyAlphaRGBA(u)||0;"none"===i.style&&(m=0);var f=o.pt2px(i.width),h=i.miterLimit;if(!n)return new t(e,n,f,d,y,h,m,0,0,!1,c,!1,r,f,0,p);var L=n.rect,_=n.width,g=n.height,x=L.x+1,T=L.y+1,v=L.x+1+_,w=L.y+1+g;return new t(e,n,f,d,y,h,m,s.i1616to32(x,T),s.i1616to32(v,w),!0,c,!1,r,f,0,p)},t.fromPictureLineSymbol=function(e,t,r,i){return y.error("PictureLineSymbol support does not exist!"),null},t}(c.default(d.default));t.default=m}));