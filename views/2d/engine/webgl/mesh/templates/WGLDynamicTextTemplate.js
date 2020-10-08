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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./util","./WGLBaseTextTemplate","./WGLDynamicMeshTemplate","../../../../layers/features/textUtils"],(function(t,e,i,n,o,a,r,s,l,c,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var h=function(t){function e(e){var i=t.call(this,e)||this;i._horizontalAlignment="center",i._verticalAlignment="middle",i._textToGlyphs=new Map;var o,l=e.scaleFactor||1;if(i._cimTextLayer=e,s.isFunction(e.color)){i._dynamicPropertyMap.set("_color",(function(t,i,n){return a.premultiplyAlphaRGBA(e.color(t,i,n))}))}else i._color=a.premultiplyAlphaRGBA(e.color);if(s.isFunction(e.color)){i._dynamicPropertyMap.set("_haloColor",(function(t,i,n){return a.premultiplyAlphaRGBA(e.outlineColor(t,i,n))}))}else i._haloColor=a.premultiplyAlphaRGBA(e.outlineColor);s.isFunction(e.size)||(o=Math.min(Math.round(n.pt2px(e.size*e.sizeRatio)),127));var c;if(i._dynamicPropertyMap.set("_size",(function(t,i,a){return s.isFunction(e.size)?Math.min(Math.round(n.pt2px(e.size(t,i,a)*e.sizeRatio)),127):o})),s.isFunction(e.outlineSize)){i._dynamicPropertyMap.set("_haloSize",(function(t,i,o){return Math.min(Math.floor(5*n.pt2px(e.outlineSize(t,i,o)*e.sizeRatio)),127)}))}else i._haloSize=Math.min(Math.floor(5*n.pt2px(e.outlineSize*e.sizeRatio)),127);s.isFunction(e.offsetX)||(c=Math.round(n.pt2px(e.offsetX*e.sizeRatio)));var u;i._dynamicPropertyMap.set("_xOffset",(function(t,i,o){return s.isFunction(e.offsetX)?Math.round(n.pt2px(e.offsetX(t,i,o)*e.sizeRatio)):c})),s.isFunction(e.offsetY)||(u=Math.round(n.pt2px(e.offsetY*e.sizeRatio)));i._dynamicPropertyMap.set("_yOffset",(function(t,i,o){return s.isFunction(e.offsetY)?Math.round(n.pt2px(e.offsetY(t,i,o)*e.sizeRatio)):u})),s.isFunction(e.angle)?i._dynamicPropertyMap.set("_angle",e.angle):i._angle=e.angle,s.isFunction(e.horizontalAlignment)?i._dynamicPropertyMap.set("_horizontalAlignment",e.horizontalAlignment):i._horizontalAlignment=e.horizontalAlignment,s.isFunction(e.verticalAlignment)?i._dynamicPropertyMap.set("_verticalAlignment",e.verticalAlignment):i._verticalAlignment=e.verticalAlignment,i._scaleFactor=l,s.isFunction(e.text)?i._dynamicPropertyMap.set("_text",e.text):i._text=e.text;var h=Math.min(Math.round(n.pt2px(e.referenceSize*e.sizeRatio)),127);i._referenceSize=Math.round(Math.sqrt(256*h)),i._materialKey=e.materialKey;var _=r.TextMaterialKey.load(i._materialKey);return _.sdf=!0,i._bitset=(1===e.alignment?1:0)|(e.colorLocked?1:0)<<1,i._materialKey=_.data,i._decoration="none",i._lineHeight=1,i._lineWidth=512,i._textPlacement=e.markerPlacement,i.effects=e.effects,i._isCIM=!0,i}return i.__extends(e,t),e.fromCIMText=function(t){return new e(t)},e.prototype.analyze=function(t,e,n,o){return i.__awaiter(this,void 0,void 0,(function(){var a,r,s;return i.__generator(this,(function(i){switch(i.label){case 0:return a=e.readLegacyFeature(),r=function(t,e,i,n){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,n):""}(this._cimTextLayer,a,n,o),[4,t.getMosaicItem(this._cimTextLayer.cim,u.codepoints(r))];case 1:return s=i.sent(),this._textToGlyphs.set(r,s.glyphMosaicItems),[2,s]}}))}))},e.prototype.bindFeature=function(t,e,i){var n=this,a=t.readLegacyFeature();if(this._dynamicPropertyMap.forEach((function(t,o){n[o]=t(a,e,i)})),this._text&&0!==this._text.length){this._size*=this._scaleFactor,this._scale=this._size/24,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=o.getXAnchorDirection(this._horizontalAlignment||"center"),this._yAlignD=o.getYAnchorDirection(this._verticalAlignment||"baseline");var r=this._textToGlyphs.get(this._text);this.bindTextInfo(r,!1)}else this._shapingInfo=null},e}(l.default(c.default));e.default=h}));