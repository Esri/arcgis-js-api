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

define(["require","exports"],(function(t,e){"use strict";function a(){return{triangles:0,drawCalls:0}}Object.defineProperty(e,"__esModule",{value:!0}),e.RenderStatsAggregator=e.addToRenderStats=e.makeNewRenderStats=void 0,e.makeNewRenderStats=a,e.addToRenderStats=function(t,e,a){a&&(a.drawCalls+=t,a.triangles+=e)};var r=function(){function t(){this.materialRenderStats=new Map,this.reset()}return t.prototype.getMaterialRenderStatsObject=function(t){var e=this.materialRenderStats.get(t);return e||(e={triangles:0,drawCalls:0},this.materialRenderStats.set(t,e)),e},t.prototype.getAggregatedStats=function(){var t={materialRenderers:{},total:{triangles:0,drawCalls:0}};return this.materialRenderStats.forEach((function(e,a){t.materialRenderers[a]=e,t.total.drawCalls+=e.drawCalls,t.total.triangles+=e.triangles})),t},t.prototype.reset=function(){this.materialRenderStats.forEach((function(t){t.drawCalls=0,t.triangles=0}))},t}();e.RenderStatsAggregator=r}));