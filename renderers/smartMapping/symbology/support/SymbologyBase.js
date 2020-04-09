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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/restHelper","./Theme"],(function(e,t,r,n,a){return function(){function e(e){this.themes=null;var t=e.themeDictionary,r=new Map;for(var n in t){var s=t[n];r.set(n,new a(s))}this.themes=r}return e.prototype.getThemes=function(e){var t=[];return this.themes.forEach((function(r){r.isBasemapSupported(e)&&t.push({name:r.name,label:r.label,description:r.description,basemaps:r.supportedBasemaps.slice()})})),t},e.prototype.filterSchemesByName=function(e){var t=e.name,r=n(e,["name"]);if(t){var a=this.getSchemes(r);if(a){for(var s=null,o=0,i=[a.primaryScheme].concat(a.secondarySchemes);o<i.length;o++){var m=i[o];if(m.name.toLowerCase()===t.toLowerCase()){s=m;break}}return s}}},e.prototype.filterSchemesByTag=function(e){var t=e.includedTags,r=e.excludedTags,a=n(e,["includedTags","excludedTags"]);if(!t&&!r)return[];var s=this.getSchemes(a);if(!s)return[];for(var o=!(t&&t.length),i=!(r&&r.length),m=[s.primaryScheme].concat(s.secondarySchemes),c=[],p=function(e){var n=!!o||t.some((function(t){return e.tags.indexOf(t)>-1})),a=!i&&r.some((function(t){return e.tags.indexOf(t)>-1}));n&&!a&&c.push(e)},u=0,h=m;u<h.length;u++){p(h[u])}return c},e.prototype.getRawSchemes=function(e){var t=this.themes.get(e.theme);if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType,basemapTheme:e.basemapTheme})},e}()}));