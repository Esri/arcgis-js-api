// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../Color","./support/colors","./support/utils"],function(o,e,a,t,r,n){function i(){for(var o in d){var e=d[o],a=e.basemapGroups,t=u[o]={basemaps:[].concat(a.light).concat(a.dark),point:{},polyline:{},polygon:{}};for(var r in a)for(var n=a[r],i=0;i<n.length;i++){var l=n[i];e.pointSchemes&&(t.point[l]=e.pointSchemes[r]),e.polylineSchemes&&(t.polyline[l]=e.polylineSchemes[r]),e.polygonSchemes&&(t.polygon[l]=e.polygonSchemes[r])}}}function l(o,e){return o.map(function(o){var a=new t(o);return null!=e&&(a.a=e),a})}function c(o,e,a){var n,i=r[o],c=l(i.stops);if(i)switch(a){case"point":case"multipoint":var s=e;n={colors:c,noDataColor:new t(s.noDataColor),opacity:1,outline:{color:new t(s.outline.color),width:s.outline.width},size:s.size};break;case"polyline":var p=e;n={colors:c,noDataColor:new t(p.noDataColor),opacity:1,width:p.width};break;case"polygon":var m=e;n={colors:c,noDataColor:new t(m.noDataColor),opacity:m.fillOpacity||1,outline:{color:new t(m.outline.color),width:m.outline.width}};break;case"mesh":var h=e;n={colors:c,noDataColor:new t(h.noDataColor),opacity:h.fillOpacity||1}}return n}function s(o,e){var a="default",t=u[a],r=n.getStorageType(e),i=t&&t[r];return i&&i[o]}var p={light:{color:[153,153,153,1],width:"1px"},dark:{color:[51,51,51,1],width:"1px"},darker:{color:[26,26,26,1],width:"1px"}},m=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],h="#aaaaaa",d={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{common:{noDataColor:h,outline:p.light,size:"8px"},primary:"cat-dark",secondary:["cat-light"].concat(m)},dark:{common:{noDataColor:h,outline:p.darker,size:"8px"},primary:"cat-light",secondary:["cat-dark"].concat(m)}},polylineSchemes:{light:{common:{noDataColor:h,width:"2px"},primary:"cat-dark",secondary:["cat-light"].concat(m)},dark:{common:{noDataColor:h,width:"2px"},primary:"cat-light",secondary:["cat-dark"].concat(m)}},polygonSchemes:{light:{common:{noDataColor:h,outline:p.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(m)},dark:{common:{noDataColor:h,outline:p.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(m)}}}},u={};i();var y={getThemes:function(o){var e=[];for(var a in d){var t=d[a],r=u[a],i=n.getBasemapId(o,r.basemaps);i&&-1===r.basemaps.indexOf(i)||e.push({name:t.name,label:t.label,description:t.description,basemaps:r.basemaps.slice(0)})}return e},getSchemes:function(o){var e,a=o.geometryType,t="mesh"!==a&&o.worldScale,r=o.view,i=n.getBasemapId(o.basemap,u["default"].basemaps),l=s(i,a);if(l){var p=c(l.primary,l.common,a);e={primaryScheme:t?y.toWorldScale({scheme:p,view:r}):p,secondarySchemes:l.secondary.map(function(o){var e=c(o,l.common,a);return t?y.toWorldScale({scheme:e,view:r}):e}),basemapId:i}}return e},cloneScheme:function(o){var e;return o&&(e=a.mixin({},o),e.colors=l(e.colors),e.noDataColor&&(e.noDataColor=new t(e.noDataColor)),e.outline&&(e.outline={color:e.outline.color&&new t(e.outline.color),width:e.outline.width})),e},toWorldScale:function(o){if(o.scheme&&o.view){var e=o.scheme,a=o.scheme;return e.hasOwnProperty("size")?(e.size&&(e.size=n.toWorldScale(e.size,o.view)),e):a.hasOwnProperty("width")?(a.width&&(a.width=n.toWorldScale(a.width,o.view)),a):o.scheme}}};return y});