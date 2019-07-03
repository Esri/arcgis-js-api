// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../fontUtils","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],function(e,t,o,_,m,s,x,y,i,l,p){Object.defineProperty(t,"__esModule",{value:!0});var a=function(d){function r(e,t,o,i,l,a,n,r,s,p,f,c){var h=d.call(this)||this;h._xOffset=_.pt2px(p),h._yOffset=_.pt2px(f),h._decorationTop=x.getFontDecorationTop(r),h._color=i,h._haloColor=l,h._haloSize=Math.min(Math.floor(5*_.pt2px(_.toPt(o))),127),h._size=Math.min(Math.round(_.pt2px(t)),127),h._scale=h._size/24,h._angle=s,h._justify=m.getJustification(a||"center"),h._xAlignD=m.getXAnchorDirection(a||"center"),h._yAlignD=-m.getYAnchorDirection(n||"baseline"),h._baseline="baseline"===(n||"baseline"),h._bitset=0;var u=y.MaterialKeyBase.load(y.createMaterialKey(h.geometryType,e,!1));return u.sdf=!0,h._materialKey=u.data,h.symbolId=c,h}return o(r,d),r.fromText=function(e,t,o){var i=new r(e,t.font.size,t.haloSize||0,t.color&&s.premultiplyAlphaRGBA(t.color)||0,t.haloColor&&s.premultiplyAlphaRGBA(t.haloColor)||0,t.horizontalAlignment,t.verticalAlignment,t.font.decoration,t.angle||0,t.xoffset,t.yoffset,t.id),l=p.bidiText(t.text),a=l[0],n=l[1];return i.bindTextInfo(o,a,n),i._computeGlyphs(i._shapedGlyphs,i._shapedBox),i},r.fromCIMText=function(e,t,o){var i=new r(e,t.size*t.sizeRatio,t.outlineSize*t.sizeRatio,s.premultiplyAlphaRGBA(t.color),s.premultiplyAlphaRGBA(t.outlineColor),t.horizontalAlignment,t.verticalAlignment,t.decoration,t.angle,t.offsetX*t.sizeRatio,t.offsetY*t.sizeRatio,t.materialHash),l=p.bidiText(t.text),a=l[0],n=l[1];return i.bindTextInfo(o,a,n),i._computeGlyphs(i._shapedGlyphs,i._shapedBox),i},r}(i.default(l.default));t.default=a});