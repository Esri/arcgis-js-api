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

define(["dojo/_base/array","dojo/_base/lang","../Color","./colors"],function(o,a,e,t){function n(){var o,a,e,t,n,r,i,l;for(o in h){a=h[o],e=a.basemapGroups,n=p[o]={basemaps:[].concat(e.light).concat(e.dark),point:{},polyline:{},polygon:{}};for(t in e)for(r=e[t],i=0;i<r.length;i++)l=r[i],a.pointSchemes&&(n.point[l]=a.pointSchemes[t]),a.lineSchemes&&(n.polyline[l]=a.lineSchemes[t]),a.polygonSchemes&&(n.polygon[l]=a.polygonSchemes[t])}}function r(a,t){return o.map(a,function(o){var a=new e(o);return null!=t&&(a.a=t),a})}function i(o,a,n){var i,l=t[o];if(l)switch(i={},i.colors=r(l.stops,a.fillOpacity),i.noDataColor=new e(a.noDataColor),null!=a.fillOpacity&&(i.noDataColor.a=a.fillOpacity||1),n){case"point":i.outline={color:new e(a.outline.color),width:a.outline.width},i.size=a.size;break;case"polyline":i.width=a.width;break;case"polygon":i.outline={color:new e(a.outline.color),width:a.outline.width}}return i}function l(o){return o}var c={light:{color:[153,153,153,1],width:1},dark:{color:[51,51,51,1],width:1},darker:{color:[26,26,26,1],width:1}},s=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],m="#aaaaaa",h={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:m,outline:c.light,size:8},primary:"cat-dark",secondary:["cat-light"].concat(s)},dark:{common:{noDataColor:m,outline:c.darker,size:8},primary:"cat-light",secondary:["cat-dark"].concat(s)}},lineSchemes:{light:{common:{noDataColor:m,width:2},primary:"cat-dark",secondary:["cat-light"].concat(s)},dark:{common:{noDataColor:m,width:2},primary:"cat-light",secondary:["cat-dark"].concat(s)}},polygonSchemes:{light:{common:{noDataColor:m,outline:c.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(s)},dark:{common:{noDataColor:m,outline:c.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(s)}}}},p={};n();var d={getAvailableThemes:function(a){var e,t,n,r=[];for(e in h)t=h[e],n=p[e],a&&-1===o.indexOf(n.basemaps,a)||r.push({name:t.name,label:t.label,description:t.description,basemaps:n.basemaps.slice(0)});return r},getSchemes:function(a){var e,t,n=a.theme,r=a.basemap,c=l(a.geometryType),s=p[n];return e=s&&s[c],e=e&&e[r],e&&(t={primaryScheme:i(e.primary,e.common,c),secondarySchemes:o.map(e.secondary,function(o){return i(o,e.common,c)})}),t},cloneScheme:function(o){var t;return o&&(t=a.mixin({},o),t.colors=r(t.colors),t.noDataColor&&(t.noDataColor=new e(t.noDataColor)),t.outline&&(t.outline={color:t.outline.color&&new e(t.outline.color),width:t.outline.width})),t}};return d});