// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/declare","../../geometry/Extent","../../core/Accessoire"],function(e,t,r){function n(){return"vec"+i++}var i=0,s=e([r],{declaredClass:"esri.views.2d.Vector",constructor:function(){this.id=n()},_graphicSetter:function(e,t){return e===t?t:(this.extent=e?this._getGraphicExtent(e):null,this.graphicChanged(),e)},_symbolSetter:function(e,t){return e===t?t:(this._symbolChangeHandle&&(this._symbolChangeHandle.remove(),this._symbolChangeHandle=null),this.symbolChanged(),e)},_colorSetter:function(e,t){return e===t?t:(this.symbolChanged(),e)},_sizeSetter:function(e,t){return e===t?t:(this.symbolChanged(),e)},_opacitySetter:function(e,t){return e===t?t:(this.symbolChanged(),e)},_rotationAngleSetter:function(e,t){return e===t?t:(this.symbolChanged(),e)},_outlineSizeSetter:function(e,t){return e===t?t:(this.symbolChanged(),e)},_geometrySetter:function(e,t){return e===t?t:(this.graphicChanged(),e)},_projectedGeometrySetter:function(e,t){return e===t?t:(this.graphicChanged(),e)},_parentSetter:function(e,t){return e===t?t:(e&&this._requestDrawFlag&&e.requestVectorDraw(this),e)},graphicChanged:function(){this._graphicChanged=!0,this.requestDraw()},symbolChanged:function(){this._symbolChanged=!0,this.requestDraw()},rendered:function(){this._graphicChanged=!1,this._symbolChanged=!1},requestDraw:function(){this._requestDrawFlag||(this._requestDrawFlag=!0,this.parent&&this.parent.requestVectorDraw(this))},_getGraphicExtent:function(e){var r=e.geometry,n=null;if(r&&(n=r.extent,!n)){var i,s;if("esri.geometry.Point"===r.declaredClass)i=r.x,s=r.y;else{if("esri.geometry.Multipoint"!==r.declaredClass)return null;i=r.points[0][0],s=r.points[0][1]}n=new t(i,s,i,s,r.spatialReference)}return n}});return s});