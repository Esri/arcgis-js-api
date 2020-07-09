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

define(["require","exports","tslib","../../../../../../core/Logger","../../../../../../core/screenUtils","../../color","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],(function(e,t,i,r,n,o,l,s,a,p,u,c){Object.defineProperty(t,"__esModule",{value:!0});var d=r.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),f=function(e){function t(t,i,r,n,o,l,s,u,c,d,f,y,m,h,_,L,g){var x=e.call(this)||this,v=a.LineMaterialKey.load(a.createMaterialKey(x.geometryType,t,m));return i&&(v.sdf=i.sdf,v.pattern=!0,v.textureBinding=i.textureBinding),x._capType=n,x._joinType=o,x._miterLimitCosine=p.getLimitCosine(l),x.tessellationProperties._fillColor=s,x.tessellationProperties._tl=u,x.tessellationProperties._br=c,x._hasPattern=d,x._isDashed=f,x._joinOnUTurn=L,x._isColorLocked=y,x._isOutline=m,x._zOrder=_,x.effects=g,x._materialKey=v.data,x.tessellationProperties._bitset=y?1:0,x.tessellationProperties._halfWidth=.5*r,x.tessellationProperties._halfReferenceWidth=.5*h,x._initializeTessellator(!1),x}return i.__extends(t,e),t.fromCIMLine=function(e,i,r,s,a){var p=i.color,u=i.scaleFactor||1,c=i.isDashed,d=i.cap;c&&1===d&&(d=2);var f=i.join,y=n.pt2px(i.width)*u,m=n.pt2px(i.referenceWidth),h=n.pt2px(i.miterLimit),_=p&&o.premultiplyAlphaRGBA(p)||0;if(!r)return new t(e,r,y,d,f,h,_,0,0,!1,c,i.colorLocked,s,m,i.zOrder,a,i.effects);var L=r.rect,g=r.width,x=r.height,v=L.x+1,w=L.y+1,P=L.x+1+g,T=L.y+1+x;return new t(e,r,y,d,f,h,_,l.i1616to32(v,w),l.i1616to32(P,T),!0,c,i.colorLocked,s,m,i.zOrder,a,i.effects)},t.fromSimpleLine=function(e,i,r,a,p){var u=r.color,c="solid"!==r.style&&"none"!==r.style,d=s.getCapType(r.cap||"round",c),f=s.getJoinType(r.join||"round"),y=u&&"none"!==r.style&&o.premultiplyAlphaRGBA(u)||0;"none"===r.style&&(y=0);var m=n.pt2px(r.width),h=r.miterLimit;if(!a)return new t(e,a,m,d,f,h,y,0,0,!1,c,!1,i,m,0,p,null);var _=a.rect,L=a.width,g=a.height,x=_.x+1,v=_.y+1,w=_.x+1+L,P=_.y+1+g;return new t(e,a,m,d,f,h,y,l.i1616to32(x,v),l.i1616to32(w,P),!0,c,!1,i,m,0,p,null)},t.fromPictureLineSymbol=function(e,t,i,r){return d.error("PictureLineSymbol support does not exist!"),null},t}(u.default(c.default));t.default=f}));