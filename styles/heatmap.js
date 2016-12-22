// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(e,a,f,r,c){function n(){var e,a,f,r,c,n,s,o;for(e in t){a=t[e],f=a.basemapGroups,c=i[e]={basemaps:[].concat(f.light).concat(f.dark)};for(r in f)for(n=f[r],s=0;s<n.length;s++)o=n[s],a.schemes&&(c[o]=a.schemes[r])}}function s(a,f){return e.map(a,function(e){var a=new c(e);return null!=f&&(a.a=f),a})}var o={v1:["#85c1c8","#90a1be","#9c8184","#a761aa","#af4980","#b83055","#c0182a","#c80000","#d33300","#de6600","#e99900","#f4cc00","#ffff00"],v2:["#f3e4e5","#e4becb","#d498b2","#c57298","#b95685","#ae3972","#a21d5e","#96004b","#ab006f","#c00093","#d500b7","#ea00db","#ff00ff"],v3:["#d4e3f5","#b3c5f7","#93a6fa","#7288fc","#566ffd","#3955fe","#1d3bfe","#0022ff","#334ecc","#667a99","#99a766","#ccd333","#ffff00"],v4:["#0022c8","#2b1ca7","#551785","#801164","#aa0b43","#d50621","#ff0000","#ff3900","#ff7100","#ffaa00","#ffc655","#ffe3aa","#ffffff"]},t={"default":{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},schemes:{light:{primary:"v1",secondary:["v2","v3","v4"]},dark:{primary:"v4",secondary:["v1","v2","v3"]}}}},i={};n();var l={getAvailableThemes:function(a){var f,r,c,n=[];for(f in t)r=t[f],c=i[f],a&&-1===e.indexOf(c.basemaps,a)||n.push({name:r.name,label:r.label,description:r.description,basemaps:c.basemaps.slice(0)});return n},getSchemes:function(a){var f,r,c=a.theme,n=a.basemap,t=i[c],l=.7;return f=t&&t[n],f&&(r={primaryScheme:{colors:s(o[f.primary]),opacity:l},secondarySchemes:e.map(f.secondary,function(e){return{colors:s(o[e]),opacity:l}})}),r},cloneScheme:function(e){var f;return e&&(f=a.mixin({},e),f.colors=s(f.colors)),f}};return f("extend-esri")&&a.setObject("styles.heatmap",l,r),l});