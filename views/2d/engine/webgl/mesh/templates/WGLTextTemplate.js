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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],(function(e,t,i,l,n,a,o,r,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(t,i,a,r,s,c,f,u,h,p,d,_,m,x,A,y,g,z){void 0===z&&(z=!1);var M=e.call(this)||this;M._xOffset=l.pt2px(_),M._yOffset=l.pt2px(m),M._decoration=h||"none",M._color=r,M._haloColor=s,M._haloSize=Math.min(Math.floor(5*l.pt2px(l.toPt(a))),127),M._size=Math.min(Math.round(l.pt2px(i)),127);var b=Math.min(Math.round(l.pt2px(i)),127);M._referenceSize=Math.round(Math.sqrt(256*b)),M._scale=M._size/24,M._angle=d,M._justify=n.getJustification(c||"center"),M._xAlignD=n.getXAnchorDirection(c||"center"),M._yAlignD=n.getYAnchorDirection(f||"baseline"),M._baseline="baseline"===(f||"baseline"),M._bitset=(1===u?1:0)|(p?1:0)<<1;var v=o.MaterialKeyBase.load(t);return v.sdf=!0,M._materialKey=v.data,M._lineWidth=l.pt2px(x)||512,M._lineHeight=A||1,M._textPlacement=y,M.effects=g,M._isCIM=z,M}return i.__extends(t,e),t.fromText=function(e,i){var l=new t(e.materialKey,e.font.size,e.haloSize||0,e.color&&a.premultiplyAlphaRGBAArray(e.color)||0,e.haloColor&&a.premultiplyAlphaRGBAArray(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,0,e.font.decoration,!1,e.angle||0,e.xoffset,e.yoffset,e.lineWidth,e.lineHeight,null,null,!1),n=c.bidiText(e.text)[1];return l.bindTextInfo(i,n),l},t.fromCIMText=function(e,i){var l=e.scaleFactor||1,n=new t(e.materialKey,e.size*e.sizeRatio*l,e.outlineSize*e.sizeRatio,a.premultiplyAlphaRGBA(e.color),a.premultiplyAlphaRGBA(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,e.colorLocked,e.angle,e.offsetX*e.sizeRatio*l,e.offsetY*e.sizeRatio*l,512,1,e.markerPlacement,e.effects,!0),o=c.bidiText(e.text)[1];return n.bindTextInfo(i,o),n},t}(r.default(s.default));t.default=f}));