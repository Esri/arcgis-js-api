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

define(["require","exports","tslib","../../../core/screenUtils","../engine/webgl/alignmentUtils","../engine/webgl/definitions","../engine/webgl/mesh/templates/shapingUtils","../engine/webgl/util/BidiText"],(function(e,t,i,n,s,o,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTextBounds=void 0,t.getTextBounds=function(e,t,l){return i.__awaiter(this,void 0,void 0,(function(){var g,c,d,h,u,f;return i.__generator(this,(function(i){switch(i.label){case 0:return g=s.getXAnchorDirection("center"),c=s.getYAnchorDirection("middle"),d=t.textureManager.rasterizeItem(e.toJSON(),window.devicePixelRatio||1,null,l),h=a.bidiText(e.text),u=h[1],[4,d];case 1:return f=i.sent().glyphMosaicItems,[2,r.shapeGlyphs(f,u,{angle:e.angle||0,xOffset:n.pt2px(e.xoffset||0),yOffset:n.pt2px(e.yoffset||0),lineHeight:o.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(e.lineHeight,4)),maxLineWidth:Math.max(32,Math.min(n.pt2px(e.lineWidth),512)),decoration:e.font.decoration,scale:Math.min(Math.round(n.pt2px(e.font.size)),127)/o.GLYPH_SIZE,hAlign:g,vAlign:c,isCIM:!1}).boundsT]}}))}))}}));