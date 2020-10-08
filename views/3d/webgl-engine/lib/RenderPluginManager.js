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

define(["require","exports","./depthRange","./Util"],(function(e,r,n,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.RenderPluginManager=void 0;var i=function(){function e(e){this.pluginContext=e,this.renderPlugins=new Array,this.slots=[];for(var r=0;r<23;++r)this.slots[r]=[]}return e.prototype.add=function(e,r){this.renderPlugins.push(r);for(var n=0;n<e.length;++n){var t=e[n];this.slots[t].push(r)}r.initializeRenderContext(this.pluginContext),this.pluginContext.requestRender()},e.prototype.remove=function(e){var r=this.renderPlugins.length;this.renderPlugins=this.renderPlugins.filter((function(r){return r!==e})),t.assert(this.renderPlugins.length<r,"Removing non-added render plugin");for(var n=0;n<this.slots.length;++n)this.slots[n]=this.slots[n].filter((function(r){return r!==e}));e.uninitializeRenderContext(),this.pluginContext.requestRender()},e.prototype.prepareRender=function(e){for(var r=0,n=this.renderPlugins;r<n.length;r++){var t=n[r];t.prepareRender&&t.prepareRender(e)}},e.prototype.render=function(e,r){r.slot=e;for(var n=!1,t=0,i=this.slots[e];t<i.length;t++){var o=i[t];o.canRender&&o.render(r)&&(n=!0)}return n},e.prototype.queryDepthRange=function(e){var r=o;r.near=1/0,r.far=-1/0;for(var t=0,i=this.renderPlugins;t<i.length;t++){var s=i[t];if(s.queryDepthRange){var u=s.queryDepthRange(e);u&&n.union(r,u,r)}}return r},Object.defineProperty(e.prototype,"needsHighlight",{get:function(){return this.renderPlugins.some((function(e){return e.needsHighlight}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"needsLinearDepth",{get:function(){return this.renderPlugins.some((function(e){return e.needsLinearDepth}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"needsLaserlineWithContrastControl",{get:function(){var e=this.slots[17];return!!e&&e.length>0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"renderOccludedFlags",{get:function(){var e=0;return this.renderPlugins.forEach((function(r){r.renderOccludedFlags&&(e|=r.renderOccludedFlags)})),e},enumerable:!1,configurable:!0}),e}();r.RenderPluginManager=i;var o={near:0,far:0}}));