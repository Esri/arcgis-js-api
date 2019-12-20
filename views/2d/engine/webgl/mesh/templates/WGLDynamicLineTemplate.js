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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../../../../../symbols/cim/enums","../../color","../../number","../../materialKey/MaterialKey","./util","./WGLBaseLineTemplate","./WGLDynamicMeshTemplate","../../util/Result"],function(t,i,e,h,m,y,f,L,_,r,n,P){Object.defineProperty(i,"__esModule",{value:!0});var a=function(u){function r(t,n,r){var i=u.call(this,n)||this;i._cimLineLayer=n;var a=0;_.isFunction(n.width)||(a=.5*h.pt2px(n.width));i._dynamicPropertyMap.set("_halfWidth",function(t,i,e){return _.isFunction(n.width)?.5*h.pt2px(n.width(t,i,e)):a});var s=m.CapType.ROUND;_.isFunction(n.cap)||(s=n.cap);var o;i._dynamicPropertyMap.set("_capType",function(t,i,e){return _.isFunction(n.cap)?n.cap(t,i,e):s}),_.isFunction(n.join)||(o=n.join);var l;if(i._dynamicPropertyMap.set("_joinType",function(t,i,e){return _.isFunction(n.join)?n.join(t,i,e):o}),!_.isFunction(n.color)){var e=n.color;l=e&&y.premultiplyAlphaRGBA(e)||0}var c;i._dynamicPropertyMap.set("_fillColor",function(t,i,e){if(_.isFunction(n.color)){var r=n.color(t,i,e);return r&&y.premultiplyAlphaRGBA(r)||0}return l}),_.isFunction(n.miterLimit)||(c=_.getLimitCosine(n.miterLimit));i._dynamicPropertyMap.set("_miterLimitCosine",function(t,i,e){return _.isFunction(n.miterLimit)?_.getLimitCosine(n.miterLimit(t,i,e)):c});var p=1;_.isFunction(r)||(p=r);return i._dynamicPropertyMap.set("_scaleFactor",function(t,i,e){return _.isFunction(r)?r(t,i,e):p}),i._isDashed=n.isDashed,i.tessellationProperties._bitset=n.colorLocked?1:0,i._materialKey=L.createMaterialKey(i.geometryType,t,n.isOutline),i._initializeTessellator(!0),i}return e(r,u),r.fromCIMLine=function(t,i,e){return new r(t,i,e)},r.prototype.bindFeature=function(e,r,n){var a=this,t=this._dynamicPropertyMap;t&&t.forEach(function(t,i){a[i]=t(e,r,n)}),this._halfWidth*=this._scaleFactor;var i=this._materialCache,s=(0,this._cimLineLayer.materialHash)(e,r,n),o=i.get(s),l=null;if(o&&P.ok(o.spriteMosaicItem)&&(l=o.spriteMosaicItem),l){this._hasPattern=!0;var c=l.rect,p=l.width,u=l.height,h=c.x+1,m=c.y+1,y=c.x+1+p,_=c.y+1+u;this.tessellationProperties._tl=f.i1616to32(h,m),this.tessellationProperties._br=f.i1616to32(y,_)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;var d=L.LineMaterialKey.load(this._materialKey);l&&(d.sdf=l.sdf,d.pattern=!0,d.textureBinding=l.textureBinding),this._materialKey=d.data},r}(r.default(n.default));i.default=a});