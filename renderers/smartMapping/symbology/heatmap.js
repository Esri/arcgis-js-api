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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/extendsHelper","../../../Color","./support/colors","./support/SymbologyBase"],function(e,a,t,r,l,n,o){function u(e,a){var t=n[e];if(t)return i({id:a,name:t.name,tags:t.tags,colors:t.stops,opacity:.7})}function i(e){return{id:e.id,name:e.name,tags:e.tags.slice(),colors:e.colors.map(function(e){return new l(e)}),opacity:e.opacity}}var p={light:{primary:"heatmap-v1",secondary:["heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"heatmap-v4",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}},m={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",schemes:{default:p}}};return new(function(e){function a(){return e.call(this,{themeDictionary:m})||this}return r(a,e),a.prototype.getSchemes=function(e){var a=this.getRawSchemes({theme:"default",basemap:e.basemap});if(a){var t=this.getBasemapId(e.basemap,"default"),r="default/"+t+"/";return{primaryScheme:u(a.primary,r+a.primary),secondarySchemes:a.secondary.map(function(e){return u(e,r+e)}).filter(Boolean),basemapId:t}}},a.prototype.getSchemeByName=function(e){return this.filterSchemesByName(e)},a.prototype.getSchemesByTag=function(e){return this.filterSchemesByTag(e)},a.prototype.cloneScheme=function(e){if(e){var a=t({},e);return a.colors=a.colors.map(function(e){return new l(e)}),a}},a}(o))});