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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../Color","./support/colors","./support/utils"],function(e,a,r,t,l,o){function n(e,a){return e.map(function(e){var r=new t(e);return null!=a&&(r.a=a),r})}var s={default:{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},schemes:{light:{primary:"heatmap-v1",secondary:["heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze","heatmap-v4","dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze"]},dark:{primary:"heatmap-v4",secondary:["dark-yellow-orange","dark-yellow-green","dark-yellow-purple","dark-yellow-magenta","dark-white-blue","dark-white-blue-metal","dark-white-gold","dark-yellow-bronze","heatmap-v1","heatmap-v2","heatmap-v3","neutral-yellow-orange","neutral-yellow-green","neutral-yellow-purple","neutral-yellow-magenta","neutral-white-blue","neutral-white-blue-metal","neutral-white-gold","neutral-yellow-bronze"]}}}},u={};return function(){for(var e in s){var a=s[e],r=a.basemapGroups,t=u[e]={basemaps:[].concat(r.light).concat(r.dark)};for(var l in r)for(var o=r[l],n=0;n<o.length;n++){var i=o[n];a.schemes&&(t[i]=a.schemes[l])}}}(),{getThemes:function(e){var a=[];for(var r in s){var t=s[r],l=u[r],n=o.getBasemapId(e,l.basemaps);n&&-1===l.basemaps.indexOf(n)||a.push({name:t.name,label:t.label,description:t.description,basemaps:l.basemaps.slice(0)})}return a},getSchemes:function(e){var a=o.getBasemapId(e.basemap,u.default.basemaps),r=u.default,t=r&&r[a];if(t)return{primaryScheme:{id:"default/"+a+"/"+t.primary,colors:n(l[t.primary]),opacity:.7},secondarySchemes:t.secondary.map(function(e){return{id:"default/"+a+"/"+e,colors:n(l[e]),opacity:.7}}),basemapId:a}},cloneScheme:function(e){var a;return e&&(a=r({},e),a.colors=n(a.colors)),a}}});