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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../renderers/support/utils","./support/colors","./support/SymbologyBase"],(function(e,o,t,n,r,a,i){var c={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},s=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence"],l={default:{name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:{light:{primary:"predominant-v5",secondary:s,common:{outline:c.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:s,common:{outline:c.dark,fillOpacity:.8}}}}}};function m(e,o,i){var c=a[e];if(c)return function(e){return{name:e.name,tags:t.__spreadArrays(e.tags),colors:e.colors.map((function(e){return new n(e)})),outline:{color:new n(e.outline.color),width:e.outline.width},opacity:e.opacity}}({name:c.name,tags:c.tags,colors:c[i]||r.createColors(c.stops,i),opacity:o.fillOpacity,outline:o.outline})}return new(function(e){function o(){return e.call(this,{themeDictionary:l})||this}return t.__extends(o,e),o.prototype.getSchemes=function(e){var o=this.getRawSchemes({theme:"default",basemap:e.basemap,basemapTheme:e.basemapTheme});if(o){var t=o.schemesInfo,n=o.basemapId,r=o.basemapTheme,a=t.common,i=e.numColors;return{primaryScheme:m(t.primary,a,i),secondarySchemes:t.secondary.map((function(e){return m(e,a,i)})).filter(Boolean),basemapId:n,basemapTheme:r}}},o.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},o.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},o.prototype.cloneScheme=function(e){if(e){var o=t.__assign({},e);return o.colors&&(o.colors=o.colors.map((function(e){return new n(e)}))),o.outline&&(o.outline={color:o.outline.color&&new n(o.outline.color),width:o.outline.width}),o}},o}(i))}));