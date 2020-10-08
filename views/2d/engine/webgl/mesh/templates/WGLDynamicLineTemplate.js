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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../color","../../definitions","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(t,e,i,r,s,a,o,n,l,c,h,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=function(t){function e(e){var i=t.call(this,e)||this;i._cimLineLayer=e;var a=0;l.isFunction(e.width)||(a=.5*r.pt2px(e.width));if(i._dynamicPropertyMap.set("_halfWidth",(function(t,i,s){return l.isFunction(e.width)?.5*r.pt2px(e.width(t,i,s)):a})),l.isFunction(e.cap)?i._dynamicPropertyMap.set("_capType",e.cap):i._capType=e.cap,l.isFunction(e.join)?i._dynamicPropertyMap.set("_joinType",e.join):i._joinType=e.join,l.isFunction(e.color)){i._dynamicPropertyMap.set("_fillColor",(function(t,i,r){var a=e.color(t,i,r);return a&&s.premultiplyAlphaRGBA(a)||0}))}else{var o=e.color;i._fillColor=o&&s.premultiplyAlphaRGBA(o)||0}if(l.isFunction(e.miterLimit)){i._dynamicPropertyMap.set("_miterLimitCosine",(function(t,i,r){return l.getLimitCosine(e.miterLimit(t,i,r))}))}else i._miterLimitCosine=l.getLimitCosine(e.miterLimit);return i._scaleFactor=e.scaleFactor||1,i._isDashed=e.isDashed,i.effects=e.effects,i.tessellationProperties._bitset=e.colorLocked?1:0,i._materialKey=e.materialKey,i._initializeTessellator(!0),i}return i.__extends(e,t),e.fromCIMLine=function(t){return new e(t)},e.prototype.bindFeature=function(t,e,i){var r=this,s=t.readLegacyFeature();this._dynamicPropertyMap.forEach((function(t,a){r[a]=t(s,e,i)})),this._halfWidth*=this._scaleFactor;var l=this._materialCache,c=(0,this._cimLineLayer.materialHash)(s,e,i),h=l.get(c),_=null;if(h&&p.ok(h.spriteMosaicItem)&&(_=h.spriteMosaicItem),_){this._hasPattern=!0;var u=_.rect,f=_.width,d=_.height,m=u.x+a.SPRITE_PADDING,y=u.y+a.SPRITE_PADDING,P=m+f,L=y+d;this.tessellationProperties._tl=o.i1616to32(m,y),this.tessellationProperties._br=o.i1616to32(P,L)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;var M=n.LineMaterialKey.load(this._materialKey);_&&(M.sdf=_.sdf,M.pattern=!0,M.textureBinding=_.textureBinding),this._materialKey=M.data},e}(c.default(h.default));e.default=_}));