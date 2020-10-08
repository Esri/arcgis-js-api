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

define(["require","exports","tslib","../../../../../../core/mathUtils","../../../../../../core/screenUtils","../../color","../../definitions","../../GeometryUtils","../../number","../../materialKey/MaterialKey","./util","./WGLBaseFillTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(t,e,i,r,a,n,s,o,l,f,c,u,h,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var y=function(t){function e(e){var i=t.call(this,e)||this;if(c.isFunction(e.color)){i._dynamicPropertyMap.set("_fillColor",(function(t,i,r){var a=e.color(t,i,r);return a&&n.premultiplyAlphaRGBA(a)||0}))}else{var r=e.color;i.fillColor=r&&n.premultiplyAlphaRGBA(r)||0}var s=0;c.isFunction(e.height)||(s=e.height||0);i._dynamicPropertyMap.set("_height",(function(t,i,r){return c.isFunction(e.height)?e.height(t,i,r):s}));var l=0;c.isFunction(e.offsetX)||(l=a.pt2px(e.offsetX||0)+128)>255&&(l=255);i._dynamicPropertyMap.set("_offsetX",(function(t,i,r){if(c.isFunction(e.offsetX)){var n=a.pt2px(e.offsetX(t,i,r))+128;return n>255&&(n=255),n}return l}));var u=1;c.isFunction(e.scaleX)||(u=e.scaleX||1);i._dynamicPropertyMap.set("_scaleX",(function(t,i,r){return c.isFunction(e.scaleX)?e.scaleX(t,i,r):u}));var h=0;c.isFunction(e.offsetY)||(h=a.pt2px(-e.offsetY||0)+128)>255&&(h=255);i._dynamicPropertyMap.set("_offsetY",(function(t,i,r){if(c.isFunction(e.offsetY)){var n=a.pt2px(-e.offsetY(t,i,r))+128;return n>255&&(n=255),n}return h}));var p=0;c.isFunction(e.angle)||(p=o.radToByte(e.angle)||0);return i._dynamicPropertyMap.set("_angle",(function(t,i,r){return c.isFunction(e.angle)?o.radToByte(e.angle(t,i,r)):p})),i.effects=e.effects,i._cimFillLayer=e,i._fillMaterialKey=f.FillMaterialKey.load(e.materialKey),i}return i.__extends(e,t),e.fromCIMFill=function(t){return new e(t)},e.prototype.bindFeature=function(t,e,i){var n=this,o=t.readLegacyFeature();this._dynamicPropertyMap.forEach((function(t,r){n[r]=t(o,e,i)}));var f=this._fillMaterialKey,c=this._materialCache,u=this._cimFillLayer;this.aux3=l.i8888to32(0,0,this._angle,u.colorLocked?1:0);var h=(0,u.materialHash)(o,e,i),y=c.get(h),_=null;if(y&&p.ok(y.spriteMosaicItem)&&(_=y.spriteMosaicItem),_){var d=_.rect,m=_.width,g=_.height,x=d.x+s.SPRITE_PADDING,v=d.y+s.SPRITE_PADDING,F=x+m,M=v+g,P=r.nextHighestPowerOfTwo(a.pt2px(this._height));P>255?P=255:P<=0&&(P=r.nextHighestPowerOfTwo(M-v));var X=r.nextHighestPowerOfTwo(a.pt2px(this._height/g*m||0));X>255?X=255:X<=0&&(X=r.nextHighestPowerOfTwo(F-x));var w=this._scaleX;this.tl=l.i1616to32(x,v),this.br=l.i1616to32(F,M),this.aux1=l.i8888to32(X,P,this._offsetX,this._offsetY),this.aux2=l.i1616to32(128*w,128),f.sdf=_.sdf,f.pattern=!0,f.textureBinding=_.textureBinding}else this.tl=0,this.br=0,this.aux1=0,this.aux2=0,f.sdf=!1,f.pattern=!1,f.textureBinding=0;this._materialKey=f.data},e}(u.default(h.default));e.default=y}));