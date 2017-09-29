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

define(["require","exports"],function(e,t){var r=function(){function e(){this.items=[]}return e.prototype.addObject=function(e,t){this.items.push({type:"object",highlightId:t,object:e})},e.prototype.addRenderGeometry=function(e,t,r){this.items.push({type:"renderGeometry",highlightId:r,renderGeometry:e,renderer:t})},e.prototype.removeObject=function(e){for(var t=this.items.length-1;t>=0;--t){var r=this.items[t];"object"===r.type&&r.object===e&&(r.object.removeHighlights(r.highlightId),this.items.splice(t,1))}},e.prototype.removeRenderGeometry=function(e){for(var t=this.items.length-1;t>=0;--t){var r=this.items[t];"renderGeometry"===r.type&&r.renderGeometry===e&&(r.renderer.removeRenderGeometryHighlight(r.renderGeometry,r.highlightId),this.items.splice(t,1))}},e.prototype.removeAll=function(){this.items.forEach(function(e){"object"===e.type?e.object.removeHighlights(e.highlightId):"renderGeometry"===e.type&&e.renderer.removeRenderGeometryHighlight(e.renderGeometry,e.highlightId)}),this.items=[]},e}();return r});