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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],function(t,e,r,p,u,h,f,L,m,i,n,P){Object.defineProperty(e,"__esModule",{value:!0});var a=function(c){function i(t,n){var e=c.call(this,n)||this;e._cimLineLayer=n;var r=0;m.isFunction(n.width)||(r=.5*p.pt2px(n.width));e._dynamicPropertyMap.set("_halfWidth",function(t,e,i){return m.isFunction(n.width)?.5*p.pt2px(n.width(t,e,i)):r});var a=u.CapType.ROUND;m.isFunction(n.cap)||(a=n.cap);var s;e._dynamicPropertyMap.set("_capType",function(t,e,i){return m.isFunction(n.cap)?n.cap(t,e,i):a}),m.isFunction(n.join)||(s=n.join);var o;if(e._dynamicPropertyMap.set("_joinType",function(t,e,i){return m.isFunction(n.join)?n.join(t,e,i):s}),!m.isFunction(n.color)){var i=n.color;o=i&&h.premultiplyAlphaRGBA(i)||0}var l;e._dynamicPropertyMap.set("_fillColor",function(t,e,i){if(m.isFunction(n.color)){var r=n.color(t,e,i);return r&&h.premultiplyAlphaRGBA(r)||0}return o}),m.isFunction(n.miterLimit)||(l=m.getLimitCosine(n.miterLimit));return e._dynamicPropertyMap.set("_miterLimitCosine",function(t,e,i){return m.isFunction(n.miterLimit)?m.getLimitCosine(n.miterLimit(t,e,i)):l}),e._isDashed=n.isDashed,e.tessellationProperties._bitset=n.colorLocked?1:0,e._materialKey=L.createMaterialKey(e.geometryType,t,n.isOutline),e._initializeTessellator(!0),e}return r(i,c),i.fromCIMLine=function(t,e){return new i(t,e)},i.prototype.bindFeature=function(i,r,n){var a=this,t=this._dynamicPropertyMap;t&&t.forEach(function(t,e){a[e]=t(i,r,n)});var e=this._materialCache,s=(0,this._cimLineLayer.materialHash)(i,r,n),o=e.get(s),l=null;if(o&&P.ok(o.spriteMosaicItem)&&(l=o.spriteMosaicItem),l){this._hasPattern=!0;var c=l.rect,p=l.width,u=l.height,h=c.x+1,m=c.y+1,y=c.x+1+p,d=c.y+1+u;this.tessellationProperties._tl=f.i1616to32(h,m),this.tessellationProperties._br=f.i1616to32(y,d)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;var _=L.LineMaterialKey.load(this._materialKey);l&&(_.sdf=l.sdf,_.pattern=!0,_.textureBinding=l.textureBinding),this._materialKey=_.data},i}(i.default(n.default));e.default=a});