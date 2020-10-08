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

define(["require","exports","tslib","../../Color","./support/colors","./support/SymbologyBase"],(function(e,a,r,t,l,n){"use strict";var o={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"neutral-white-blue",secondary:["heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"dark-white-blue",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","heatmap-v4","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}};function u(e,a){var n,o=l[e];if(o)return{id:(n={id:a,name:o.name,tags:o.tags,colors:o.stops,opacity:.7}).id,name:n.name,tags:r.__spreadArrays(n.tags),colors:n.colors.map((function(e){return new t(e)})),opacity:n.opacity}}return new(function(e){function a(){return e.call(this,{themeDictionary:o})||this}return r.__extends(a,e),a.prototype.getSchemes=function(e){var a=this.getRawSchemes({theme:"default",basemap:e.basemap,basemapTheme:e.basemapTheme});if(a){var r=a.schemesInfo,t=a.basemapId,l=a.basemapTheme,n="default/"+t+"/";return{primaryScheme:u(r.primary,n+r.primary),secondarySchemes:r.secondary.map((function(e){return u(e,n+e)})).filter(Boolean),basemapId:t,basemapTheme:l}}},a.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},a.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},a.prototype.cloneScheme=function(e){if(e){var a=r.__assign({},e);return a.colors=a.colors.map((function(e){return new t(e)})),a}},a}(n))}));