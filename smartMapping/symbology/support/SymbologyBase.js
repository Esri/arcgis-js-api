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

define(["require","exports","tslib","./Theme"],(function(e,r,t,a){return function(){function e(e){this.themes=null;var r=e.themeDictionary,t=new Map;for(var s in r){var n=r[s];t.set(s,new a(n))}this.themes=t}return e.prototype.getThemes=function(e){var r=[];return this.themes.forEach((function(a){a.isBasemapSupported(e)&&r.push({name:a.name,label:a.label,description:a.description,basemaps:t.__spreadArrays(a.supportedBasemaps)})})),r},e.prototype.filterSchemesByName=function(e){var r=e.name,a=t.__rest(e,["name"]);if(r){var s=this.getSchemes(a);if(s){for(var n=null,i=0,m=t.__spreadArrays([s.primaryScheme],s.secondarySchemes);i<m.length;i++){var o=m[i];if(o.name.toLowerCase()===r.toLowerCase()){n=o;break}}return n}}},e.prototype.filterSchemesByTag=function(e){var r=e.includedTags,a=e.excludedTags,s=t.__rest(e,["includedTags","excludedTags"]);if(!r&&!a)return[];var n=this.getSchemes(s);if(!n)return[];for(var i=!(r&&r.length),m=!(a&&a.length),o=t.__spreadArrays([n.primaryScheme],n.secondarySchemes),h=[],p=function(e){var t=!!i||r.some((function(r){return e.tags.indexOf(r)>-1})),s=!m&&a.some((function(r){return e.tags.indexOf(r)>-1}));t&&!s&&h.push(e)},u=0,c=o;u<c.length;u++){p(c[u])}return h},e.prototype.getRawSchemes=function(e){var r=this.themes.get(e.theme);if(r)return r.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})},e}()}));