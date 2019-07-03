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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./depthRange"],function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e){this.pluginContext=e,this.pluginsChanged=!1,this.renderPlugins=new Array,this.slots=[];for(var n=0;n<21;++n)this.slots[n]=[]}return e.prototype.add=function(e,n){this.renderPlugins.push(n);for(var r=0;r<e.length;++r){var t=e[r];this.slots[t].push(n)}n.initializeRenderContext(this.pluginContext),this.pluginsChanged=!0},e.prototype.remove=function(e){this.renderPlugins=this.renderPlugins.filter(function(n){return n!==e});for(var n=0;n<this.slots.length;++n)this.slots[n]=this.slots[n].filter(function(n){return n!==e});e.uninitializeRenderContext(this.pluginContext),this.pluginsChanged=!0},e.prototype.prepareRender=function(e){for(var n=0,r=this.renderPlugins;n<r.length;n++){var t=r[n];t.prepareRender&&t.prepareRender(e)}},e.prototype.render=function(e,n){this.pluginsChanged=!1,n.slot=e;for(var r=this.slots[e],t=!1,i=0,s=r;i<s.length;i++){s[i].render(n)&&(t=!0)}return t},e.prototype.queryDepthRange=function(e){var n=i;n.near=1/0,n.far=-1/0;for(var t=0,s=this.renderPlugins;t<s.length;t++){var o=s[t];if(o.queryDepthRange){var u=o.queryDepthRange(e);u&&r.union(n,u,n)}}return n},e.prototype.needsRender=function(){if(this.pluginsChanged)return!0;for(var e=0,n=this.renderPlugins;e<n.length;e++){if(n[e].needsRender)return!0}return!1},e.prototype.needsHighlight=function(){for(var e=0,n=this.renderPlugins;e<n.length;e++){if(n[e].needsHighlight)return!0}return!1},e.prototype.needsLinearDepth=function(){for(var e=0,n=this.renderPlugins;e<n.length;e++){if(n[e].needsLinearDepth)return!0}return!1},e}();n.RenderPluginManager=t;var i={near:0,far:0}});