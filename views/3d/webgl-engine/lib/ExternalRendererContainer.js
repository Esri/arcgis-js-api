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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./RenderSlot"],function(e,r,n){return function(){function e(){this.renderersChanged=!1,this.renderers=[],this.slots=[];for(var e=0;e<n.MAX_SLOTS;++e)this.slots[e]=[]}return e.prototype.addRenderer=function(e,r){this.renderers.push(r);for(var n=0;n<e.length;++n){var t=e[n];this.slots[t].push(r)}this.renderersChanged=!0},e.prototype.removeRenderer=function(e){this.renderers=this.renderers.filter(function(r){return r!==e});for(var r=0;r<this.slots.length;++r)this.slots[r]=this.slots[r].filter(function(r){return r!==e});this.renderersChanged=!0},e.prototype.render=function(e,r){r.slot=e;for(var n=this.slots[e],t=0,s=n;t<s.length;t++){var d=s[t];d.render(r)&&(d.didRender=!0)}},e.prototype.needsRender=function(){if(this.renderersChanged)return!0;for(var e=0,r=this.renderers;e<r.length;e++){if(r[e].needsRender)return!0}return!1},e.prototype.needsHighlight=function(){for(var e=0,r=this.renderers;e<r.length;e++){if(r[e].needsHighlight)return!0}return!1},e.prototype.needsLinearDepth=function(){for(var e=0,r=this.renderers;e<r.length;e++){if(r[e].needsLinearDepth)return!0}return!1},e.prototype.resetNeedsRender=function(){this.renderersChanged=!1;for(var e=0,r=this.renderers;e<r.length;e++){var n=r[e];n.resetNeedsRender?n.resetNeedsRender():n.didRender&&(n.needsRender=!1,n.didRender=!1)}},e}()});