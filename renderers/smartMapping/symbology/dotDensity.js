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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/assignHelper","../../../Color","../creators/support/utils","./support/colors","./support/SymbologyBase"],function(e,t,o,r,n,a,i,c){function l(e,t,o){var r=i[e];if(r){return s({name:r.name,tags:r.tags,colors:r[o]||a.createColors(r.stops,o),opacity:t.fillOpacity,outline:t.outline})}}function s(e){return{name:e.name,tags:e.tags.slice(),colors:e.colors.map(function(e){return new n(e)}),outline:{color:new n(e.outline.color),width:e.outline.width},opacity:e.opacity}}var p={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},u=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence"],m={light:{primary:"predominant-v5",secondary:u,common:{outline:p.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:u,common:{outline:p.dark,fillOpacity:.8}}},d={name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:m}},h={default:d};return new(function(e){function t(){return e.call(this,{themeDictionary:h})||this}return o(t,e),t.prototype.getSchemes=function(e){var t=this.getRawSchemes({theme:"default",basemap:e.basemap});if(t){var o=this.getBasemapId(e.basemap,"default"),r=t.common,n=e.numColors;return{primaryScheme:l(t.primary,r,n),secondarySchemes:t.secondary.map(function(e){return l(e,r,n)}).filter(Boolean),basemapId:o}}},t.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},t.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},t.prototype.cloneScheme=function(e){if(e){var t=r({},e);return t.colors&&(t.colors=t.colors.map(function(e){return new n(e)})),t.outline&&(t.outline={color:t.outline.color&&new n(t.outline.color),width:t.outline.width}),t}},t}(c))});