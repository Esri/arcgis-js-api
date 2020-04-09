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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/extendsHelper","../../../Color","./support/colors","./support/SymbologyBase"],(function(e,a,r,t,l,o,n){var u={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:{light:{primary:"neutral-white-blue",secondary:["heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"dark-white-blue",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","heatmap-v4","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}}};function m(e,a){var r,t=o[e];if(t)return{id:(r={id:a,name:t.name,tags:t.tags,colors:t.stops,opacity:.7}).id,name:r.name,tags:r.tags.slice(),colors:r.colors.map((function(e){return new l(e)})),opacity:r.opacity}}return new(function(e){function a(){return e.call(this,{themeDictionary:u})||this}return t(a,e),a.prototype.getSchemes=function(e){var a=this.getRawSchemes({theme:"default",basemap:e.basemap,basemapTheme:e.basemapTheme});if(a){var r=a.schemesInfo,t=a.basemapId,l=a.basemapTheme,o="default/"+t+"/";return{primaryScheme:m(r.primary,o+r.primary),secondarySchemes:r.secondary.map((function(e){return m(e,o+e)})).filter(Boolean),basemapId:t,basemapTheme:l}}},a.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},a.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},a.prototype.cloneScheme=function(e){if(e){var a=r({},e);return a.colors=a.colors.map((function(e){return new l(e)})),a}},a}(n))}));