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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./enums"],function(e,n,r){var t=function(){function e(){}return e.prototype.replayList=function(e,n,r,t,o,i,a,l,c,d,f){var m=this,s=n.symbolLevels;if(!(s.length<=r)){var u=s[r];u&&(e.setStencilTestEnabled(!0),e.setStencilFunction(514,o.stencilRef,255),u.zLevels.forEach(function(n){var r=n.geometryDPInfo;r.fill&&m._draw(e,r.fill,t,o,i,a,c,d,l,f),r.line&&m._draw(e,r.line,t,o,i,a,c,d,l,f),r.marker&&m._draw(e,r.marker,t,o,i,a,c,d,l,f),r.text&&m._draw(e,r.text,t,o,i,a,c,d,l,f)}))}},e.prototype._draw=function(e,n,t,o,i,a,l,c,d,f){n.forEach(function(n){switch(n.geometryType){case r.WGLGeometryType.FILL:t.drawFill(e,n.materialInfo,o,i,a,d,l,c,f,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.LINE:t.drawLine(e,n.materialInfo,o,i,a,d,l,c,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.MARKER:t.drawIcon(e,n.materialInfo,o,i,a,d,n.indexFrom,n.indexCount);break;case r.WGLGeometryType.TEXT:t.drawText(e,n.materialInfo,o,i,a,d,n.indexFrom,n.indexCount)}})},e}();return t});