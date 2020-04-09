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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/tsSupport/generatorHelper","../../../../../../core/tsSupport/awaiterHelper","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./util","./WGLBaseTextTemplate","./WGLDynamicMeshTemplate","../../../../layers/features/textUtils"],(function(t,e,i,n,o,r,a,s,l,c,p,u,h){Object.defineProperty(e,"__esModule",{value:!0});var _=function(t){function e(e,i){var n=t.call(this,i)||this;n._horizontalAlignment="center",n._verticalAlignment="middle",n._textToGlyphs=new Map;var o,a=i.scaleFactor||1;if(n._cimTextLayer=i,c.isFunction(i.color)){n._dynamicPropertyMap.set("_color",(function(t,e,n){return s.premultiplyAlphaRGBA(i.color(t,e,n))}))}else n._color=s.premultiplyAlphaRGBA(i.color);if(c.isFunction(i.color)){n._dynamicPropertyMap.set("_haloColor",(function(t,e,n){return s.premultiplyAlphaRGBA(i.outlineColor(t,e,n))}))}else n._haloColor=s.premultiplyAlphaRGBA(i.outlineColor);c.isFunction(i.size)||(o=Math.min(Math.round(r.pt2px(i.size*i.sizeRatio)),127));var p;if(n._dynamicPropertyMap.set("_size",(function(t,e,n){return c.isFunction(i.size)?Math.min(Math.round(r.pt2px(i.size(t,e,n)*i.sizeRatio)),127):o})),c.isFunction(i.outlineSize)){n._dynamicPropertyMap.set("_haloSize",(function(t,e,n){return Math.min(Math.floor(5*r.pt2px(i.outlineSize(t,e,n)*i.sizeRatio)),127)}))}else n._haloSize=Math.min(Math.floor(5*r.pt2px(i.outlineSize*i.sizeRatio)),127);c.isFunction(i.offsetX)||(p=Math.round(r.pt2px(i.offsetX*i.sizeRatio)));var u;n._dynamicPropertyMap.set("_xOffset",(function(t,e,n){return c.isFunction(i.offsetX)?Math.round(r.pt2px(i.offsetX(t,e,n)*i.sizeRatio)):p})),c.isFunction(i.offsetY)||(u=Math.round(r.pt2px(i.offsetY*i.sizeRatio)));n._dynamicPropertyMap.set("_yOffset",(function(t,e,n){return c.isFunction(i.offsetY)?Math.round(r.pt2px(i.offsetY(t,e,n)*i.sizeRatio)):u})),c.isFunction(i.angle)?n._dynamicPropertyMap.set("_angle",i.angle):n._angle=i.angle,c.isFunction(i.horizontalAlignment)?n._dynamicPropertyMap.set("_horizontalAlignment",i.horizontalAlignment):n._horizontalAlignment=i.horizontalAlignment,c.isFunction(i.verticalAlignment)?n._dynamicPropertyMap.set("_verticalAlignment",i.verticalAlignment):n._verticalAlignment=i.verticalAlignment,n._scaleFactor=a,c.isFunction(i.text)?n._dynamicPropertyMap.set("_text",i.text):n._text=i.text;var h=Math.min(Math.round(r.pt2px(i.referenceSize*i.sizeRatio)),127);n._referenceSize=Math.round(Math.sqrt(256*h)),n._materialKey=l.createMaterialKey(n.geometryType,e,!1);var _=l.TextMaterialKey.load(n._materialKey);return _.sdf=!0,n._bitset=i.colorLocked?1:0,n._materialKey=_.data,n._decoration="none",n._lineHeight=1,n._lineWidth=512,n._isCIM=!0,n}return i(e,t),e.fromCIMText=function(t,i){return new e(t,i)},e.prototype.analyze=function(t,e,i,r){return o(this,void 0,void 0,(function(){var o,a;return n(this,(function(n){switch(n.label){case 0:return o=function(t,e,i,n){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,n):""}(this._cimTextLayer,e,i,r),[4,t.getMosaicItem(this._cimTextLayer.cim,!1,h.codepoints(o))];case 1:return a=n.sent(),this._textToGlyphs.set(o,a.glyphMosaicItems),[2,a]}}))}))},e.prototype.bindFeature=function(t,e,i){var n=this;if(this._dynamicPropertyMap.forEach((function(o,r){n[r]=o(t,e,i)})),this._text&&0!==this._text.length){this._size*=this._scaleFactor,this._scale=this._size/24,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=a.getXAnchorDirection(this._horizontalAlignment||"center"),this._yAlignD=a.getYAnchorDirection(this._verticalAlignment||"baseline");var o=this._textToGlyphs.get(this._text);this.bindTextInfo(o,!1)}else this._shapingInfo=null},e}(p.default(u.default));e.default=_}));