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

define(["require","exports","tslib","../../../../../../core/screenUtils","../../alignmentUtils","../../color","../../materialKey/MaterialKey","./WGLBaseTextTemplate","./WGLMeshTemplate","../../util/BidiText"],(function(e,t,i,l,n,o,a,r,s,c){Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){function t(t,i,o,r,s,c,f,h,p,u,d,m,_,x,g,y,A,M,z){void 0===z&&(z=!1);var b=e.call(this)||this;b._xOffset=l.pt2px(m),b._yOffset=l.pt2px(_),b._decoration=p||"none",b._color=r,b._haloColor=s,b._haloSize=Math.min(Math.floor(5*l.pt2px(l.toPt(o))),127),b._size=Math.min(Math.round(l.pt2px(i)),127);var T=Math.min(Math.round(l.pt2px(i)),127);b._referenceSize=Math.round(Math.sqrt(256*T)),b._scale=b._size/24,b._angle=d,b._justify=n.getJustification(c||"center"),b._xAlignD=n.getXAnchorDirection(c||"center"),b._yAlignD=n.getYAnchorDirection(f||"baseline"),b._baseline="baseline"===(f||"baseline"),b._bitset=(1===h?1:0)|(u?1:0)<<1;var v=a.MaterialKeyBase.load(a.createMaterialKey(b.geometryType,t,!1));return v.sdf=!0,b._materialKey=v.data,b.symbolId=x,b._lineWidth=l.pt2px(g)||512,b._lineHeight=y||1,b._textPlacement=A,b.effects=M,b._isCIM=z,b}return i.__extends(t,e),t.fromText=function(e,i,l){var n=new t(e,i.font.size,i.haloSize||0,i.color&&o.premultiplyAlphaRGBA(i.color)||0,i.haloColor&&o.premultiplyAlphaRGBA(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,0,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.id,i.lineWidth,i.lineHeight,null,null,!1),a=c.bidiText(i.text)[1];return n.bindTextInfo(l,a),n},t.fromCIMText=function(e,i,l){var n=i.scaleFactor||1,a=new t(e,i.size*i.sizeRatio*n,i.outlineSize*i.sizeRatio,o.premultiplyAlphaRGBA(i.color),o.premultiplyAlphaRGBA(i.outlineColor),i.horizontalAlignment,i.verticalAlignment,i.alignment,i.decoration,i.colorLocked,i.angle,i.offsetX*i.sizeRatio*n,i.offsetY*i.sizeRatio*n,i.materialHash,512,1,i.markerPlacement,i.effects,!0),r=c.bidiText(i.text)[1];return a.bindTextInfo(l,r),a},t}(r.default(s.default));t.default=f}));