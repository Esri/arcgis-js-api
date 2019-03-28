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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports"],function(e,t){return function(){function e(){this.items=[]}return e.prototype.addObject=function(e,t){this.items.push({type:"object",highlightId:t,object:e})},e.prototype.addRenderGeometry=function(e,t,i){this.items.push({type:"renderGeometry",highlightId:t,renderGeometry:e,owner:i})},e.prototype.addExternal=function(e,t){this.items.push({type:"external",highlightId:t,remove:e})},e.prototype.remove=function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];i.highlightId===e&&(this.removeHighlight(i),this.items.splice(t,1))}},e.prototype.removeObject=function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];"object"===i.type&&i.object===e&&(this.removeHighlight(i),this.items.splice(t,1))}},e.prototype.removeRenderGeometry=function(e){for(var t=this.items.length-1;t>=0;--t){var i=this.items[t];"renderGeometry"===i.type&&i.renderGeometry===e&&(this.removeHighlight(i),this.items.splice(t,1))}},e.prototype.removeAll=function(){var e=this;this.items.forEach(function(t){e.removeHighlight(t)}),this.items=[]},e.prototype.removeHighlight=function(e){switch(e.type){case"object":e.object.removeHighlights(e.highlightId);break;case"renderGeometry":e.owner.removeRenderGeometryHighlight(e.renderGeometry,e.highlightId);break;case"external":e.remove(e.highlightId)}},e}()});