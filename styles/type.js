// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors"],function(a,o,e,n,t,r){function i(o,e){return a.map(o,function(a){var o=new t(a);return null!=e&&(o.a=e),o})}function c(a,o,e){var n,c=r[a];if(c)switch(n={},n.colors=i(c.stops),n.noDataColor=new t(o.noDataColor),n.opacity=o.fillOpacity||1,e){case"point":n.outline={color:new t(o.outline.color),width:o.outline.width},n.size=o.size;break;case"line":n.width=o.width;break;case"polygon":n.outline={color:new t(o.outline.color),width:o.outline.width}}return n}function l(a){var o=a;return"esriGeometryPoint"===o||"esriGeometryMultipoint"===o?o="point":"esriGeometryPolyline"===o?o="line":"esriGeometryPolygon"!==o&&"esriGeometryMultiPatch"!==o||(o="polygon"),o}var s={light:{color:[153,153,153,.25],width:1},dark:{color:[153,153,153,.25],width:1},darker:{color:[26,26,26,.25],width:1}},m=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],d=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],p={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:s.light,size:8},primary:"cat-dark",secondary:["cat-light"].concat(m,d)},dark:{common:{noDataColor:"#aaaaaa",outline:s.darker,size:8},primary:"cat-light",secondary:["cat-dark"].concat(m,d)}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-dark",secondary:["cat-light"].concat(m,d)},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-light",secondary:["cat-dark"].concat(m,d)}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:s.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(m,d)},dark:{common:{noDataColor:"#aaaaaa",outline:s.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(m,d)}}}},h={};!function(){var a,o,e,n,t,r,i,c;for(a in p){o=p[a],e=o.basemapGroups,t=h[a]={basemaps:[].concat(e.light).concat(e.dark),point:{},line:{},polygon:{}};for(n in e)for(r=e[n],i=0;i<r.length;i++)c=r[i],o.pointSchemes&&(t.point[c]=o.pointSchemes[n]),o.lineSchemes&&(t.line[c]=o.lineSchemes[n]),o.polygonSchemes&&(t.polygon[c]=o.polygonSchemes[n])}}();var u={getAvailableThemes:function(o){var e,n,t,r=[];for(e in p)n=p[e],t=h[e],o&&-1===a.indexOf(t.basemaps,o)||r.push({name:n.name,label:n.label,description:n.description,basemaps:t.basemaps.slice(0)});return r},getSchemes:function(o){var e,n,t=o.theme,r=o.basemap,i=l(o.geometryType),s=h[t];return e=s&&s[i],e=e&&e[r],e&&(n={primaryScheme:c(e.primary,e.common,i),secondarySchemes:a.map(e.secondary,function(a){return c(a,e.common,i)})}),n},cloneScheme:function(a){var e;return a&&(e=o.mixin({},a),e.colors=i(e.colors),e.noDataColor&&(e.noDataColor=new t(e.noDataColor)),e.outline&&(e.outline={color:e.outline.color&&new t(e.outline.color),width:e.outline.width})),e}};return e("extend-esri")&&o.setObject("styles.type",u,n),u});