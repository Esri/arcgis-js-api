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

define(["require","exports","tslib","../../../core/screenUtils","../engine","../engine/webgl/alignmentUtils","../engine/webgl/definitions","../engine/webgl/util/BidiText"],(function(e,t,n,i,r,o,a,s){Object.defineProperty(t,"__esModule",{value:!0}),t.getTextBounds=function(e,t,l){return n.__awaiter(this,void 0,void 0,(function(){var g,c,h,d,f,u;return n.__generator(this,(function(n){switch(n.label){case 0:return g=o.getXAnchorDirection("center"),c=o.getYAnchorDirection("middle"),h=t.textureManager.rasterizeItem(e.toJSON(),null,l),d=s.bidiText(e.text),f=d[1],[4,h];case 1:return u=n.sent().glyphMosaicItems,[2,r.shapeGlyphs(u,f,{angle:e.angle||0,xOffset:i.pt2px(e.xoffset||0),yOffset:i.pt2px(e.yoffset||0),lineHeight:a.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(e.lineHeight,4)),maxLineWidth:Math.max(32,Math.min(i.pt2px(e.lineWidth),512)),decoration:e.font.decoration,scale:Math.min(Math.round(i.pt2px(e.font.size)),127)/a.GLYPH_SIZE,hAlign:g,vAlign:c,isCIM:!1}).boundsT]}}))}))}}));