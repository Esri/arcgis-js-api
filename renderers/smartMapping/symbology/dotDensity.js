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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/assignHelper","../../../Color","../creators/support/utils","./support/colors","./support/SymbologyBase"],function(e,o,t,n,r,a,i,c){function s(e,o,t){var n=i[e];if(n){return l({name:n.name,tags:n.tags,colors:n[t]||a.createColors(n.stops,t),opacity:o.fillOpacity,outline:o.outline})}}function l(e){return{name:e.name,tags:e.tags.slice(),colors:e.colors.map(function(e){return new r(e)}),outline:{color:new r(e.outline.color),width:e.outline.width},opacity:e.opacity}}var m={light:{color:[153,153,153,.25],width:"1px"},dark:{color:[153,153,153,.25],width:"1px"}},p=["vibrant-rainbow","cat-dark","predominant-v2","predominant-v1","predominance-race","desert-blooms","tropical-bliss","under-the-sea","ocean-bay","cat-light","predominant-v4","predominance-money","predominant-v3","predominance-race-ethnic","pastel-chalk","predominance-rainbow","predominance-sequence"],u={light:{primary:"predominant-v5",secondary:p,common:{outline:m.light,fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:p,common:{outline:m.dark,fillOpacity:.8}}},d={name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:u}},h={default:d};return new(function(e){function o(){return e.call(this,{themeDictionary:h})||this}return t(o,e),o.prototype.getSchemes=function(e){var o=this.getRawSchemes({theme:"default",basemap:e.basemap,basemapTheme:e.basemapTheme});if(o){var t=o.schemesInfo,n=o.basemapId,r=o.basemapTheme,a=t.common,i=e.numColors;return{primaryScheme:s(t.primary,a,i),secondarySchemes:t.secondary.map(function(e){return s(e,a,i)}).filter(Boolean),basemapId:n,basemapTheme:r}}},o.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},o.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},o.prototype.cloneScheme=function(e){if(e){var o=n({},e);return o.colors&&(o.colors=o.colors.map(function(e){return new r(e)})),o.outline&&(o.outline={color:o.outline.color&&new r(o.outline.color),width:o.outline.width}),o}},o}(c))});