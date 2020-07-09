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

define(["require","exports","tslib","../../../../../../core/mathUtils","../../../../../../core/screenUtils","../../color","../../GeometryUtils","../../number","../../materialKey/MaterialKey","./util","./WGLBaseFillTemplate","./WGLDynamicMeshTemplate","../../util/Result"],(function(t,e,i,r,a,n,o,s,l,f,c,u,h){Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(e,i){var r=t.call(this,i)||this;if(f.isFunction(i.color)){r._dynamicPropertyMap.set("_fillColor",(function(t,e,r){var a=i.color(t,e,r);return a&&n.premultiplyAlphaRGBA(a)||0}))}else{var s=i.color;r.fillColor=s&&n.premultiplyAlphaRGBA(s)||0}var c=0;f.isFunction(i.height)||(c=i.height||0);r._dynamicPropertyMap.set("_height",(function(t,e,r){return f.isFunction(i.height)?i.height(t,e,r):c}));var u=0;f.isFunction(i.offsetX)||(u=a.pt2px(i.offsetX||0)+128)>255&&(u=255);r._dynamicPropertyMap.set("_offsetX",(function(t,e,r){if(f.isFunction(i.offsetX)){var n=a.pt2px(i.offsetX(t,e,r))+128;return n>255&&(n=255),n}return u}));var h=1;f.isFunction(i.scaleX)||(h=i.scaleX||1);r._dynamicPropertyMap.set("_scaleX",(function(t,e,r){return f.isFunction(i.scaleX)?i.scaleX(t,e,r):h}));var p=0;f.isFunction(i.offsetY)||(p=a.pt2px(-i.offsetY||0)+128)>255&&(p=255);r._dynamicPropertyMap.set("_offsetY",(function(t,e,r){if(f.isFunction(i.offsetY)){var n=a.pt2px(-i.offsetY(t,e,r))+128;return n>255&&(n=255),n}return p}));var y=0;f.isFunction(i.angle)||(y=o.radToByte(i.angle)||0);return r._dynamicPropertyMap.set("_angle",(function(t,e,r){return f.isFunction(i.angle)?o.radToByte(i.angle(t,e,r)):y})),r.isBFS=!1,r.effects=i.effects,r._cimFillLayer=i,r._fillMaterialKey=l.FillMaterialKey.load(l.createMaterialKey(r.geometryType,e,!1)),r}return i.__extends(e,t),e.fromCIMFill=function(t,i){return new e(t,i)},e.prototype.bindFeature=function(t,e,i){var n=this;this._dynamicPropertyMap.forEach((function(r,a){n[a]=r(t,e,i)}));var o=this._fillMaterialKey,l=this._materialCache,f=this._cimFillLayer;this.aux3=s.i8888to32(0,0,this._angle,f.colorLocked?1:0);var c=(0,f.materialHash)(t,e,i),u=l.get(c),p=null;if(u&&h.ok(u.spriteMosaicItem)&&(p=u.spriteMosaicItem),p){var y=p.rect,_=p.width,d=p.height,m=y.x+1,g=y.y+1,x=m+_,v=g+d,F=r.nextHighestPowerOfTwo(a.pt2px(this._height));F>255?F=255:F<=0&&(F=r.nextHighestPowerOfTwo(v-g));var M=r.nextHighestPowerOfTwo(a.pt2px(this._height/d*_||0));M>255?M=255:M<=0&&(M=r.nextHighestPowerOfTwo(x-m));var P=this._scaleX;this.tl=s.i1616to32(m,g),this.br=s.i1616to32(x,v),this.aux1=s.i8888to32(M,F,this._offsetX,this._offsetY),this.aux2=s.i1616to32(128*P,128),o.sdf=p.sdf,o.pattern=!0,o.textureBinding=p.textureBinding}else this.tl=0,this.br=0,this.aux1=0,this.aux2=0,o.sdf=!1,o.pattern=!1,o.textureBinding=0;this._materialKey=o.data},e}(c.default(u.default));e.default=p}));