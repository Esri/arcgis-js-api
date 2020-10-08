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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/Logger","../../../../../../core/screenUtils","../../color","../../definitions","../../number","../../Utils","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLMeshTemplate"],(function(e,t,i,r,l,n,o,s,a,u,p,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=r.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),m=function(e){function t(t,i,r,l,n,o,s,a,c,d,f,m,y,_,L,h){var P=e.call(this)||this,S=u.LineMaterialKey.load(t);return i&&(S.sdf=i.sdf,S.pattern=!0,S.textureBinding=i.textureBinding),P._capType=l,P._joinType=n,P._miterLimitCosine=p.getLimitCosine(o),P.tessellationProperties._fillColor=s,P.tessellationProperties._tl=a,P.tessellationProperties._br=c,P._hasPattern=d,P._isDashed=f,P._joinOnUTurn=L,P._isColorLocked=m,P._zOrder=_,P.effects=h,P._materialKey=S.data,P.tessellationProperties._bitset=m?1:0,P.tessellationProperties._halfWidth=.5*r,P.tessellationProperties._halfReferenceWidth=.5*y,P._initializeTessellator(!1),P}return i.__extends(t,e),t.fromCIMLine=function(e,i,r){var a=e.color,u=e.scaleFactor||1,p=e.isDashed,c=e.cap;p&&1===c&&(c=2);var d=e.join,f=l.pt2px(e.width)*u,m=l.pt2px(e.referenceWidth),y=l.pt2px(e.miterLimit),_=a&&n.premultiplyAlphaRGBA(a)||0;if(!i)return new t(e.materialKey,i,f,c,d,y,_,0,0,!1,p,e.colorLocked,m,e.zOrder,r,e.effects);var L=i.rect,h=i.width,P=i.height,S=L.x+o.SPRITE_PADDING,g=L.y+o.SPRITE_PADDING,T=S+h,x=g+P,v=s.i1616to32(S,g),w=s.i1616to32(T,x);return new t(e.materialKey,i,f,c,d,y,_,v,w,!0,p,e.colorLocked,m,e.zOrder,r,e.effects)},t.fromSimpleLine=function(e,i,r){var u=e.color,p="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,c=a.getCapType(e.cap||"round",p),d=a.getJoinType(e.join||"round"),f=u&&"esriSLSNull"!==e.style&&n.premultiplyAlphaRGBAArray(u)||0;"esriSLSNull"===e.style&&(f=0);var m=l.pt2px(e.width),y=e.miterLimit;if(!i)return new t(e.materialKey,i,m,c,d,y,f,0,0,!1,p,!1,m,0,r,null);var _=i.rect,L=i.width,h=i.height,P=_.x+o.SPRITE_PADDING,S=_.y+o.SPRITE_PADDING,g=P+L,T=S+h,x=s.i1616to32(P,S),v=s.i1616to32(g,T);return new t(e.materialKey,i,m,c,d,y,f,x,v,!0,p,!1,m,0,r,null)},t.fromPictureLineSymbol=function(e,t,i,r){return f.error("PictureLineSymbol support does not exist!"),null},t}(c.default(d.default));t.default=m}));