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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./depthRange"],function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e){this.pluginContext=e,this.renderPlugins=new Array,this.slots=[];for(var r=0;r<21;++r)this.slots[r]=[]}return e.prototype.add=function(e,r){this.renderPlugins.push(r);for(var n=0;n<e.length;++n){var t=e[n];this.slots[t].push(r)}r.initializeRenderContext(this.pluginContext),this.pluginContext.requestRender()},e.prototype.remove=function(e){this.renderPlugins=this.renderPlugins.filter(function(r){return r!==e});for(var r=0;r<this.slots.length;++r)this.slots[r]=this.slots[r].filter(function(r){return r!==e});e.uninitializeRenderContext(this.pluginContext),this.pluginContext.requestRender()},e.prototype.prepareRender=function(e){for(var r=0,n=this.renderPlugins;r<n.length;r++){var t=n[r];t.prepareRender&&t.prepareRender(e)}},e.prototype.render=function(e,r){r.slot=e;for(var n=this.slots[e],t=!1,i=0,o=n;i<o.length;i++){var s=o[i];s.canRender&&s.render(r)&&(t=!0)}return t},e.prototype.queryDepthRange=function(e){var r=i;r.near=1/0,r.far=-1/0;for(var t=0,o=this.renderPlugins;t<o.length;t++){var s=o[t];if(s.queryDepthRange){var u=s.queryDepthRange(e);u&&n.union(r,u,r)}}return r},e.prototype.needsHighlight=function(){return this.renderPlugins.some(function(e){return e.needsHighlight})},e.prototype.needsLinearDepth=function(){for(var e=0,r=this.renderPlugins;e<r.length;e++){if(r[e].needsLinearDepth)return!0}return!1},e}();r.RenderPluginManager=t;var i={near:0,far:0}});