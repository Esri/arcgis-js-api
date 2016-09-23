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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","../Color"],function(a,e,f){function r(){var a,e,f,r,c,n,t,i;for(a in o){e=o[a],f=e.basemapGroups,c=s[a]={basemaps:[].concat(f.light).concat(f.dark)};for(r in f)for(n=f[r],t=0;t<n.length;t++)i=n[t],e.schemes&&(c[i]=e.schemes[r])}}function c(e,r){return a.map(e,function(a){var e=new f(a);return null!=r&&(e.a=r),e})}var n={v1:["#85c1c8","#90a1be","#9c8184","#a761aa","#af4980","#b83055","#c0182a","#c80000","#d33300","#de6600","#e99900","#f4cc00","#ffff00"],v2:["#f3e4e5","#e4becb","#d498b2","#c57298","#b95685","#ae3972","#a21d5e","#96004b","#ab006f","#c00093","#d500b7","#ea00db","#ff00ff"],v3:["#d4e3f5","#b3c5f7","#93a6fa","#7288fc","#566ffd","#3955fe","#1d3bfe","#0022ff","#334ecc","#667a99","#99a766","#ccd333","#ffff00"],v4:["#0022c8","#2b1ca7","#551785","#801164","#aa0b43","#d50621","#ff0000","#ff3900","#ff7100","#ffaa00","#ffc655","#ffe3aa","#ffffff"]},o={"default":{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},schemes:{light:{primary:"v1",secondary:["v2","v3","v4"]},dark:{primary:"v4",secondary:["v1","v2","v3"]}}}},s={};r();var t={getAvailableThemes:function(e){var f,r,c,n=[];for(f in o)r=o[f],c=s[f],e&&-1===a.indexOf(c.basemaps,e)||n.push({name:r.name,label:r.label,description:r.description,basemaps:c.basemaps.slice(0)});return n},getSchemes:function(e){var f,r,o=e.theme,t=e.basemap,i=s[o],l=.7;return f=i&&i[t],f&&(r={primaryScheme:{colors:c(n[f.primary],l)},secondarySchemes:a.map(f.secondary,function(a){return{colors:c(n[a],l)}})}),r},cloneScheme:function(a){var f;return a&&(f=e.mixin({},a),f.colors=c(f.colors)),f}};return t});