// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./depthRange","./Util"],function(e,n,r,t){Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e){this.pluginContext=e,this.renderPlugins=new Array,this.slots=[];for(var n=0;n<20;++n)this.slots[n]=[]}return e.prototype.add=function(e,n){this.renderPlugins.push(n);for(var r=0;r<e.length;++r){var t=e[r];this.slots[t].push(n)}n.initializeRenderContext(this.pluginContext),this.pluginContext.requestRender()},e.prototype.remove=function(e){var n=this.renderPlugins.length;this.renderPlugins=this.renderPlugins.filter(function(n){return n!==e}),t.assert(this.renderPlugins.length<n,"Removing non-added render plugin");for(var r=0;r<this.slots.length;++r)this.slots[r]=this.slots[r].filter(function(n){return n!==e});e.uninitializeRenderContext(),this.pluginContext.requestRender()},e.prototype.prepareRender=function(e){for(var n=0,r=this.renderPlugins;n<r.length;n++){var t=r[n];t.prepareRender&&t.prepareRender(e)}},e.prototype.render=function(e,n){n.slot=e;for(var r=this.slots[e],t=!1,i=0,s=r;i<s.length;i++){var o=s[i];o.canRender&&o.render(n)&&(t=!0)}return t},e.prototype.queryDepthRange=function(e){var n=s;n.near=1/0,n.far=-1/0;for(var t=0,i=this.renderPlugins;t<i.length;t++){var o=i[t];if(o.queryDepthRange){var u=o.queryDepthRange(e);u&&r.union(n,u,n)}}return n},e.prototype.needsHighlight=function(){return this.renderPlugins.some(function(e){return e.needsHighlight})},e.prototype.needsLinearDepth=function(){return this.renderPlugins.some(function(e){return e.needsLinearDepth})},e}();n.RenderPluginManager=i;var s={near:0,far:0}});