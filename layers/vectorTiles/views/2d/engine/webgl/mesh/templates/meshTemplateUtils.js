// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Logger","../../enums","../templates/WGLFillTemplate","../templates/WGLLineTemplate","../templates/WGLMarkerTemplate","../templates/WGLTextTemplate","../../util/vvFlagUtils"],(function(e,t,r,i,l,s,a,o,p){Object.defineProperty(t,"__esModule",{value:!0});var m=r.getLogger("esri.views.2d.engine.webgl.mesh.templates.meshTemplateUtils");t.createMeshTemplates=function(e,t,r,u,n,f,g){if(void 0===g&&(g=!1),-1!==r.type.indexOf("3d"))return m.error("3D symbols are not supported with MapView"),e;var b=u.get(r.id);switch(b||m.error("Couldn't find texture resources for symbol: "+r.id+"!"),r.type){case i.EsriSymbolTypeKebab.SIMPLE_MARKER:return e.push(a.default.fromSimpleMarker(t,p.getMarkerVVFlags(n),r,b.spriteMosaicItem,f)),e;case i.EsriSymbolTypeKebab.PICTURE_MARKER:return e.push(a.default.fromPictureMarker(t,p.getMarkerVVFlags(n),r,b.spriteMosaicItem,f)),e;case i.EsriSymbolTypeKebab.SIMPLE_FILL:var c=r;if(e.push(l.default.fromSimpleFill(t,p.getFillVVFlags(n),c,b.spriteMosaicItem,f,g)),c.outline){var d=u.get(c.outline.id);e.push(s.default.fromSimpleLine(t,p.getLineVVFlags(n,!0),c.outline,d&&d.spriteMosaicItem,f))}return e;case i.EsriSymbolTypeKebab.PICTURE_FILL:var y=r;if(e.push(l.default.fromPictureFill(t,p.getFillVVFlags(n),y,b.spriteMosaicItem,f,g)),y.outline){d=u.get(y.outline.id);e.push(s.default.fromSimpleLine(t,p.getLineVVFlags(n,!0),y.outline,d&&d.spriteMosaicItem,f))}return e;case i.EsriSymbolTypeKebab.SIMPLE_LINE:return e.push(s.default.fromSimpleLine(t,p.getLineVVFlags(n,!1),r,b.spriteMosaicItem,f)),e;case i.EsriSymbolTypeKebab.TEXT:return e.push(o.default.fromText(t,p.getTextVVFlags(n),r,f,b.glyphMosaicItems)),e;default:return m.error("Unable to create mesh template for unknown symbol type: "+r.type),e}}}));