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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/restHelper","./Theme","./utils"],function(e,t,r,a,n,s){return function(){function e(e){this.themes=null;var t=e.themeDictionary,r=new Map;for(var a in t){var s=t[a];r.set(a,new n(s))}this.themes=r}return e.prototype.getThemes=function(e){var t=[];return this.themes.forEach(function(r){r.isBasemapSupported(e)&&t.push({name:r.name,label:r.label,description:r.description,basemaps:r.supportedBasemaps.slice()})}),t},e.prototype.filterSchemesByName=function(e){var t=e.name,r=a(e,["name"]);if(t){var n=this.getSchemes(r);if(n){for(var s=null,o=[n.primaryScheme].concat(n.secondarySchemes),i=0,p=o;i<p.length;i++){var c=p[i];if(c.name.toLowerCase()===t.toLowerCase()){s=c;break}}return s}}},e.prototype.filterSchemesByTag=function(e){var t=e.includedTags,r=e.excludedTags,n=a(e,["includedTags","excludedTags"]);if(!t&&!r)return[];var s=this.getSchemes(n);if(!s)return[];for(var o=[s.primaryScheme].concat(s.secondarySchemes),i=[],p=0,c=o;p<c.length;p++){var m=c[p];!function(e){var a=!t||t.some(function(t){return e.tags.indexOf(t)>-1}),n=r&&r.some(function(t){return e.tags.indexOf(t)>-1});a&&!n&&i.push(e)}(m)}return i},e.prototype.getRawSchemes=function(e){var t=this.themes.get(e.theme);if(t)return t.getRawSchemes({basemap:e.basemap,geometryType:e.geometryType})},e.prototype.getBasemapId=function(e,t){var r=this.themes.get(t);if(r)return s.getBasemapId(e,r.supportedBasemaps)},e}()});