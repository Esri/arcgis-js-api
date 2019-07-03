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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],function(i,t,r,u,p,h,f,L,m,e,n,v){Object.defineProperty(t,"__esModule",{value:!0});var a=function(l){function e(i,n){var t=l.call(this,n)||this;t._cimLineLayer=n;var r=0;m.isFunction(n.width)||(r=.5*u.pt2px(n.width));t._dynamicPropertyMap.set("_halfWidth",function(i,t,e){return m.isFunction(n.width)?.5*u.pt2px(n.width(i,t,e)):r});var a=p.CapType.ROUND;m.isFunction(n.cap)||(a=n.cap);var o;t._dynamicPropertyMap.set("_capType",function(i,t,e){return m.isFunction(n.cap)?n.cap(i,t,e):a}),m.isFunction(n.join)||(o=n.join);var s;if(t._dynamicPropertyMap.set("_joinType",function(i,t,e){return m.isFunction(n.join)?n.join(i,t,e):o}),!m.isFunction(n.color)){var e=n.color;s=e&&h.premultiplyAlphaRGBA(e)||0}var c;t._dynamicPropertyMap.set("_fillColor",function(i,t,e){if(m.isFunction(n.color)){var r=n.color(i,t,e);return r&&h.premultiplyAlphaRGBA(r)||0}return s}),m.isFunction(n.miterLimit)||(c=m.getLimitCosine(n.miterLimit));return t._dynamicPropertyMap.set("_miterLimitCosine",function(i,t,e){return m.isFunction(n.miterLimit)?m.getLimitCosine(n.miterLimit(i,t,e)):c}),t._isDashed=n.isDashed,t._bitset=n.colorLocked?1:0,t._materialKey=L.createMaterialKey(t.geometryType,i,n.isOutline),t._initializeTessellator(!0),t}return r(e,l),e.fromCIMLine=function(i,t){return new e(i,t)},e.prototype.bindFeature=function(e,r,n){var a=this,i=this._dynamicPropertyMap;i&&i.forEach(function(i,t){a[t]=i(e,r,n)});var t=this._materialCache,o=(0,this._cimLineLayer.materialHash)(e,r,n),s=t.get(o),c=null;if(s&&v.ok(s.spriteMosaicItem)&&(c=s.spriteMosaicItem),c){this._hasPattern=!0;var l=c.rect,u=c.width,p=c.height,h=l.x+1,m=l.y+1,y=l.x+1+u,d=l.y+1+p;this._tl=f.i1616to32(h,m),this._br=f.i1616to32(y,d)}else this._hasPattern=!1,this._tl=0,this._br=0;this._halfReferenceWidth=this._halfWidth;var _=L.LineMaterialKey.load(this._materialKey);c&&(_.sdf=c.sdf,_.pattern=!0,_.textureBinding=c.textureBinding),this._materialKey=_.data},e}(e.default(n.default));t.default=a});