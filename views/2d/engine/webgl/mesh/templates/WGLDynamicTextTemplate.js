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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./util","./WGLBaseTextTemplate","./WGLDynamicMeshTemplate","../../../../layers/features/textUtils"],(function(t,e,i,n,o,r,a,l,s,c,h){Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(e,i){var o=t.call(this,i)||this;o._horizontalAlignment="center",o._verticalAlignment="middle",o._textToGlyphs=new Map;var s,c=i.scaleFactor||1;if(o._cimTextLayer=i,l.isFunction(i.color)){o._dynamicPropertyMap.set("_color",(function(t,e,n){return r.premultiplyAlphaRGBA(i.color(t,e,n))}))}else o._color=r.premultiplyAlphaRGBA(i.color);if(l.isFunction(i.color)){o._dynamicPropertyMap.set("_haloColor",(function(t,e,n){return r.premultiplyAlphaRGBA(i.outlineColor(t,e,n))}))}else o._haloColor=r.premultiplyAlphaRGBA(i.outlineColor);l.isFunction(i.size)||(s=Math.min(Math.round(n.pt2px(i.size*i.sizeRatio)),127));var h;if(o._dynamicPropertyMap.set("_size",(function(t,e,o){return l.isFunction(i.size)?Math.min(Math.round(n.pt2px(i.size(t,e,o)*i.sizeRatio)),127):s})),l.isFunction(i.outlineSize)){o._dynamicPropertyMap.set("_haloSize",(function(t,e,o){return Math.min(Math.floor(5*n.pt2px(i.outlineSize(t,e,o)*i.sizeRatio)),127)}))}else o._haloSize=Math.min(Math.floor(5*n.pt2px(i.outlineSize*i.sizeRatio)),127);l.isFunction(i.offsetX)||(h=Math.round(n.pt2px(i.offsetX*i.sizeRatio)));var u;o._dynamicPropertyMap.set("_xOffset",(function(t,e,o){return l.isFunction(i.offsetX)?Math.round(n.pt2px(i.offsetX(t,e,o)*i.sizeRatio)):h})),l.isFunction(i.offsetY)||(u=Math.round(n.pt2px(i.offsetY*i.sizeRatio)));o._dynamicPropertyMap.set("_yOffset",(function(t,e,o){return l.isFunction(i.offsetY)?Math.round(n.pt2px(i.offsetY(t,e,o)*i.sizeRatio)):u})),l.isFunction(i.angle)?o._dynamicPropertyMap.set("_angle",i.angle):o._angle=i.angle,l.isFunction(i.horizontalAlignment)?o._dynamicPropertyMap.set("_horizontalAlignment",i.horizontalAlignment):o._horizontalAlignment=i.horizontalAlignment,l.isFunction(i.verticalAlignment)?o._dynamicPropertyMap.set("_verticalAlignment",i.verticalAlignment):o._verticalAlignment=i.verticalAlignment,o._scaleFactor=c,l.isFunction(i.text)?o._dynamicPropertyMap.set("_text",i.text):o._text=i.text;var _=Math.min(Math.round(n.pt2px(i.referenceSize*i.sizeRatio)),127);o._referenceSize=Math.round(Math.sqrt(256*_)),o._materialKey=a.createMaterialKey(o.geometryType,e,!1);var p=a.TextMaterialKey.load(o._materialKey);return p.sdf=!0,o._bitset=(1===i.alignment?1:0)|(i.colorLocked?1:0)<<1,o._materialKey=p.data,o._decoration="none",o._lineHeight=1,o._lineWidth=512,o._textPlacement=i.markerPlacement,o.effects=i.effects,o._isCIM=!0,o}return i.__extends(e,t),e.fromCIMText=function(t,i){return new e(t,i)},e.prototype.analyze=function(t,e,n,o){return i.__awaiter(this,void 0,void 0,(function(){var r,a;return i.__generator(this,(function(i){switch(i.label){case 0:return r=function(t,e,i,n){return"string"==typeof t.text?t.text:"function"==typeof t.text?t.text(e,i,n):""}(this._cimTextLayer,e,n,o),[4,t.getMosaicItem(this._cimTextLayer.cim,!1,h.codepoints(r))];case 1:return a=i.sent(),this._textToGlyphs.set(r,a.glyphMosaicItems),[2,a]}}))}))},e.prototype.bindFeature=function(t,e,i){var n=this;if(this._dynamicPropertyMap.forEach((function(o,r){n[r]=o(t,e,i)})),this._text&&0!==this._text.length){this._size*=this._scaleFactor,this._scale=this._size/24,this._xOffset*=this._scaleFactor,this._yOffset*=this._scaleFactor,this._xAlignD=o.getXAnchorDirection(this._horizontalAlignment||"center"),this._yAlignD=o.getYAnchorDirection(this._verticalAlignment||"baseline");var r=this._textToGlyphs.get(this._text);this.bindTextInfo(r,!1)}else this._shapingInfo=null},e}(s.default(c.default));e.default=u}));