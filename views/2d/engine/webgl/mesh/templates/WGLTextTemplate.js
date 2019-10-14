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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../fontUtils","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],function(e,t,o,y,z,s,A,g,i,a,p){Object.defineProperty(t,"__esModule",{value:!0});var l=function(x){function r(e,t,o,i,a,l,n,r,s,p,c,f,h,u){var d=x.call(this)||this;d._xOffset=y.pt2px(f),d._yOffset=y.pt2px(h),d._decorationTop=A.getFontDecorationTop(s),d._color=a,d._haloColor=l,d._haloSize=Math.min(Math.floor(5*y.pt2px(y.toPt(o))),127),d._size=Math.min(Math.round(y.pt2px(t)),127);var _=Math.min(Math.round(y.pt2px(t)),127);d._referenceSize=Math.round(Math.sqrt(256*_)),d._scale=d._size/24,d._angle=c,d._justify=z.getJustification(n||"center"),d._xAlignD=z.getXAnchorDirection(n||"center"),d._yAlignD=-z.getYAnchorDirection(r||"baseline"),d._baseline="baseline"===(r||"baseline"),d._bitset=p?1:0;var m=g.MaterialKeyBase.load(g.createMaterialKey(d.geometryType,e,!1));return m.sdf=!0,d._materialKey=m.data,d.symbolId=u,d}return o(r,x),r.fromText=function(e,t,o){var i=new r(e,t.font.size,t.haloSize||0,t.font.size,t.color&&s.premultiplyAlphaRGBA(t.color)||0,t.haloColor&&s.premultiplyAlphaRGBA(t.haloColor)||0,t.horizontalAlignment,t.verticalAlignment,t.font.decoration,!1,t.angle||0,t.xoffset,t.yoffset,t.id),a=p.bidiText(t.text),l=a[0],n=a[1];return i.bindTextInfo(o,l,n),i._computeGlyphs(i._shapedGlyphs,i._shapedBox),i},r.fromCIMText=function(e,t,o){var i=new r(e,t.size*t.sizeRatio,t.outlineSize*t.sizeRatio,t.referenceSize*t.sizeRatio,s.premultiplyAlphaRGBA(t.color),s.premultiplyAlphaRGBA(t.outlineColor),t.horizontalAlignment,t.verticalAlignment,t.decoration,t.colorLocked,t.angle,t.offsetX*t.sizeRatio,t.offsetY*t.sizeRatio,t.materialHash),a=p.bidiText(t.text),l=a[0],n=a[1];return i.bindTextInfo(o,l,n),i._computeGlyphs(i._shapedGlyphs,i._shapedBox),i},r}(i.default(a.default));t.default=l});