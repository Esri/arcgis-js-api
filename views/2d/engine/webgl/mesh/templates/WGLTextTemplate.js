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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],(function(e,t,i,o,l,a,n,r,s,c){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(t,i,a,r,s,c,f,p,h,u,d,_,m,x,y,g){void 0===g&&(g=!1);var A=e.call(this)||this;A._xOffset=o.pt2px(d),A._yOffset=o.pt2px(_),A._decoration=p||"none",A._color=r,A._haloColor=s,A._haloSize=Math.min(Math.floor(5*o.pt2px(o.toPt(a))),127),A._size=Math.min(Math.round(o.pt2px(i)),127);var M=Math.min(Math.round(o.pt2px(i)),127);A._referenceSize=Math.round(Math.sqrt(256*M)),A._scale=A._size/24,A._angle=u,A._justify=l.getJustification(c||"center"),A._xAlignD=l.getXAnchorDirection(c||"center"),A._yAlignD=l.getYAnchorDirection(f||"baseline"),A._baseline="baseline"===(f||"baseline"),A._bitset=h?1:0;var z=n.MaterialKeyBase.load(n.createMaterialKey(A.geometryType,t,!1));return z.sdf=!0,A._materialKey=z.data,A.symbolId=m,A._lineWidth=o.pt2px(x)||512,A._lineHeight=y||1,A._isCIM=g,A}return i(t,e),t.fromText=function(e,i,o){var l=new t(e,i.font.size,i.haloSize||0,i.color&&a.premultiplyAlphaRGBA(i.color)||0,i.haloColor&&a.premultiplyAlphaRGBA(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.id,i.lineWidth,i.lineHeight,!1),n=c.bidiText(i.text)[1];return l.bindTextInfo(o,n),l},t.fromCIMText=function(e,i,o){var l=i.scaleFactor||1,n=new t(e,i.size*i.sizeRatio*l,i.outlineSize*i.sizeRatio,a.premultiplyAlphaRGBA(i.color),a.premultiplyAlphaRGBA(i.outlineColor),i.horizontalAlignment,i.verticalAlignment,i.decoration,i.colorLocked,i.angle,i.offsetX*i.sizeRatio*l,i.offsetY*i.sizeRatio*l,i.materialHash,512,1,!0),r=c.bidiText(i.text)[1];return n.bindTextInfo(o,r),n},t}(r.default(s.default));t.default=f}));