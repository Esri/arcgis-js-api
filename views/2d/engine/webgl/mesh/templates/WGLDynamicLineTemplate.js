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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../color","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(e,t,i,r,a,s,o,l,n,c,p){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t,i){var s=e.call(this,i)||this;s._cimLineLayer=i;var n=0;l.isFunction(i.width)||(n=.5*r.pt2px(i.width));if(s._dynamicPropertyMap.set("_halfWidth",(function(e,t,a){return l.isFunction(i.width)?.5*r.pt2px(i.width(e,t,a)):n})),l.isFunction(i.cap)?s._dynamicPropertyMap.set("_capType",i.cap):s._capType=i.cap,l.isFunction(i.join)?s._dynamicPropertyMap.set("_joinType",i.join):s._joinType=i.join,l.isFunction(i.color)){s._dynamicPropertyMap.set("_fillColor",(function(e,t,r){var s=i.color(e,t,r);return s&&a.premultiplyAlphaRGBA(s)||0}))}else{var c=i.color;s._fillColor=c&&a.premultiplyAlphaRGBA(c)||0}if(l.isFunction(i.miterLimit)){s._dynamicPropertyMap.set("_miterLimitCosine",(function(e,t,r){return l.getLimitCosine(i.miterLimit(e,t,r))}))}else s._miterLimitCosine=l.getLimitCosine(i.miterLimit);return s._scaleFactor=i.scaleFactor||1,s._isDashed=i.isDashed,s.tessellationProperties._bitset=i.colorLocked?1:0,s._materialKey=o.createMaterialKey(s.geometryType,t,i.isOutline),s._initializeTessellator(!0),s}return i(t,e),t.fromCIMLine=function(e,i){return new t(e,i)},t.prototype.bindFeature=function(e,t,i){var r=this;this._dynamicPropertyMap.forEach((function(a,s){r[s]=a(e,t,i)})),this._halfWidth*=this._scaleFactor;var a=this._materialCache,l=(0,this._cimLineLayer.materialHash)(e,t,i),n=a.get(l),c=null;if(n&&p.ok(n.spriteMosaicItem)&&(c=n.spriteMosaicItem),c){this._hasPattern=!0;var h=c.rect,_=c.width,u=c.height,m=h.x+1,d=h.y+1,y=h.x+1+_,f=h.y+1+u;this.tessellationProperties._tl=s.i1616to32(m,d),this.tessellationProperties._br=s.i1616to32(y,f)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;var P=o.LineMaterialKey.load(this._materialKey);c&&(P.sdf=c.sdf,P.pattern=!0,P.textureBinding=c.textureBinding),this._materialKey=P.data},t}(n.default(c.default));t.default=h}));