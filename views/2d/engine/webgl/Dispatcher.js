// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./enums"],function(e,n,r){var t=function(){function e(){}return e.prototype.replayList=function(e,n,r,t,o,i,a,l,c,d){var f=this,m=n.symbolLevels;if(!(m.length<=r)){var s=m[r];s&&(e.setStencilTestEnabled(!0),e.setStencilFunction(514,o.stencilRef,255),s.zLevels.forEach(function(n){var r=n.geometryDPInfo;r.fill&&f._draw(e,r.fill,t,o,l,c,i,a,d),r.line&&f._draw(e,r.line,t,o,l,c,i,a,d),r.marker&&f._draw(e,r.marker,t,o,l,c,i,a,d),r.text&&f._draw(e,r.text,t,o,l,c,i,a,d)}))}},e.prototype._draw=function(e,n,t,o,i,a,l,c,d){n.forEach(function(n){switch(n.geometryType){case r.WGLGeometryType.FILL:t.drawFill(e,n.materialInfo,o,l,c,i,a,d,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.LINE:t.drawLine(e,n.materialInfo,o,l,c,i,a,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.MARKER:t.drawIcon(e,n.materialInfo,o,l,c,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.TEXT:t.drawText(e,n.materialInfo,o,l,c,n.indexFrom,n.indexCount)}})},e}();return t});