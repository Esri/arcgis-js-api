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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors"],function(o,e,a,t,n,r){function i(){var o,e,a,t,n,r,i,l;for(o in p){e=p[o],a=e.basemapGroups,n=u[o]={basemaps:[].concat(a.light).concat(a.dark),point:{},line:{},polygon:{}};for(t in a)for(r=a[t],i=0;i<r.length;i++)l=r[i],e.pointSchemes&&(n.point[l]=e.pointSchemes[t]),e.lineSchemes&&(n.line[l]=e.lineSchemes[t]),e.polygonSchemes&&(n.polygon[l]=e.polygonSchemes[t])}}function l(e,a){return o.map(e,function(o){var e=new n(o);return null!=a&&(e.a=a),e})}function c(o,e,a){var t,i=r[o];if(i)switch(t={},t.colors=l(i.stops),t.noDataColor=new n(e.noDataColor),t.opacity=e.fillOpacity||1,a){case"point":t.outline={color:new n(e.outline.color),width:e.outline.width},t.size=e.size;break;case"line":t.width=e.width;break;case"polygon":t.outline={color:new n(e.outline.color),width:e.outline.width}}return t}function s(o){var e=o;return"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?e="point":"esriGeometryPolyline"===e?e="line":"esriGeometryPolygon"===e&&(e="polygon"),e}var m={light:{color:[153,153,153,1],width:1},dark:{color:[51,51,51,1],width:1},darker:{color:[26,26,26,1],width:1}},h=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],d="#aaaaaa",p={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:d,outline:m.light,size:8},primary:"cat-dark",secondary:["cat-light"].concat(h)},dark:{common:{noDataColor:d,outline:m.darker,size:8},primary:"cat-light",secondary:["cat-dark"].concat(h)}},lineSchemes:{light:{common:{noDataColor:d,width:2},primary:"cat-dark",secondary:["cat-light"].concat(h)},dark:{common:{noDataColor:d,width:2},primary:"cat-light",secondary:["cat-dark"].concat(h)}},polygonSchemes:{light:{common:{noDataColor:d,outline:m.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(h)},dark:{common:{noDataColor:d,outline:m.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(h)}}}},u={};i();var y={getAvailableThemes:function(e){var a,t,n,r=[];for(a in p)t=p[a],n=u[a],e&&-1===o.indexOf(n.basemaps,e)||r.push({name:t.name,label:t.label,description:t.description,basemaps:n.basemaps.slice(0)});return r},getSchemes:function(e){var a,t,n=e.theme,r=e.basemap,i=s(e.geometryType),l=u[n];return a=l&&l[i],a=a&&a[r],a&&(t={primaryScheme:c(a.primary,a.common,i),secondarySchemes:o.map(a.secondary,function(o){return c(o,a.common,i)})}),t},cloneScheme:function(o){var a;return o&&(a=e.mixin({},o),a.colors=l(a.colors),a.noDataColor&&(a.noDataColor=new n(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new n(a.outline.color),width:a.outline.width})),a}};return a("extend-esri")&&e.setObject("styles.type",y,t),y});