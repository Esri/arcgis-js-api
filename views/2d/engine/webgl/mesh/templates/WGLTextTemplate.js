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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../fontUtils","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],function(e,t,o,x,y,p,A,g,i,a,c){Object.defineProperty(t,"__esModule",{value:!0});var l=function(m){function s(e,t,o,i,a,l,n,r,s,p,c,f,h){var u=m.call(this)||this;u._xOffset=x.pt2px(c),u._yOffset=x.pt2px(f),u._decorationTop=A.getFontDecorationTop(r),u._color=i,u._haloColor=a,u._haloSize=Math.min(Math.floor(5*x.pt2px(x.toPt(o))),127),u._size=Math.min(Math.round(x.pt2px(t)),127);var d=Math.min(Math.round(x.pt2px(t)),127);u._referenceSize=Math.round(Math.sqrt(256*d)),u._scale=u._size/24,u._angle=p,u._justify=y.getJustification(l||"center"),u._xAlignD=y.getXAnchorDirection(l||"center"),u._yAlignD=-y.getYAnchorDirection(n||"baseline"),u._baseline="baseline"===(n||"baseline"),u._bitset=s?1:0;var _=g.MaterialKeyBase.load(g.createMaterialKey(u.geometryType,e,!1));return _.sdf=!0,u._materialKey=_.data,u.symbolId=h,u}return o(s,m),s.fromText=function(e,t,o){var i=new s(e,t.font.size,t.haloSize||0,t.color&&p.premultiplyAlphaRGBA(t.color)||0,t.haloColor&&p.premultiplyAlphaRGBA(t.haloColor)||0,t.horizontalAlignment,t.verticalAlignment,t.font.decoration,!1,t.angle||0,t.xoffset,t.yoffset,t.id),a=c.bidiText(t.text),l=a[0],n=a[1];return i.bindTextInfo(o,l,n),i._computeGlyphs(i._shapedGlyphs,i._shapedBox),i},s.fromCIMText=function(e,t,o,i){var a=new s(e,t.size*t.sizeRatio*o,t.outlineSize*t.sizeRatio,p.premultiplyAlphaRGBA(t.color),p.premultiplyAlphaRGBA(t.outlineColor),t.horizontalAlignment,t.verticalAlignment,t.decoration,t.colorLocked,t.angle,t.offsetX*t.sizeRatio*o,t.offsetY*t.sizeRatio*o,t.materialHash),l=c.bidiText(t.text),n=l[0],r=l[1];return a.bindTextInfo(i,n,r),a._computeGlyphs(a._shapedGlyphs,a._shapedBox),a},s}(i.default(a.default));t.default=l});