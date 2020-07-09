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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../color","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(e,t,i,r,s,a,o,l,n,c,h){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t,i){var a=e.call(this,i)||this;a._cimLineLayer=i;var n=0;l.isFunction(i.width)||(n=.5*r.pt2px(i.width));if(a._dynamicPropertyMap.set("_halfWidth",(function(e,t,s){return l.isFunction(i.width)?.5*r.pt2px(i.width(e,t,s)):n})),l.isFunction(i.cap)?a._dynamicPropertyMap.set("_capType",i.cap):a._capType=i.cap,l.isFunction(i.join)?a._dynamicPropertyMap.set("_joinType",i.join):a._joinType=i.join,l.isFunction(i.color)){a._dynamicPropertyMap.set("_fillColor",(function(e,t,r){var a=i.color(e,t,r);return a&&s.premultiplyAlphaRGBA(a)||0}))}else{var c=i.color;a._fillColor=c&&s.premultiplyAlphaRGBA(c)||0}if(l.isFunction(i.miterLimit)){a._dynamicPropertyMap.set("_miterLimitCosine",(function(e,t,r){return l.getLimitCosine(i.miterLimit(e,t,r))}))}else a._miterLimitCosine=l.getLimitCosine(i.miterLimit);return a._scaleFactor=i.scaleFactor||1,a._isDashed=i.isDashed,a.effects=i.effects,a.tessellationProperties._bitset=i.colorLocked?1:0,a._materialKey=o.createMaterialKey(a.geometryType,t,i.isOutline),a._initializeTessellator(!0),a}return i.__extends(t,e),t.fromCIMLine=function(e,i){return new t(e,i)},t.prototype.bindFeature=function(e,t,i){var r=this;this._dynamicPropertyMap.forEach((function(s,a){r[a]=s(e,t,i)})),this._halfWidth*=this._scaleFactor;var s=this._materialCache,l=(0,this._cimLineLayer.materialHash)(e,t,i),n=s.get(l),c=null;if(n&&h.ok(n.spriteMosaicItem)&&(c=n.spriteMosaicItem),c){this._hasPattern=!0;var p=c.rect,_=c.width,u=c.height,f=p.x+1,m=p.y+1,d=p.x+1+_,y=p.y+1+u;this.tessellationProperties._tl=a.i1616to32(f,m),this.tessellationProperties._br=a.i1616to32(d,y)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;var P=o.LineMaterialKey.load(this._materialKey);c&&(P.sdf=c.sdf,P.pattern=!0,P.textureBinding=c.textureBinding),this._materialKey=P.data},t}(n.default(c.default));t.default=p}));