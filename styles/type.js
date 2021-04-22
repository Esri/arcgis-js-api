// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors"],(function(a,o,e,n,t,r){var i={light:{color:[153,153,153,.25],width:1},dark:{color:[153,153,153,.25],width:1},darker:{color:[26,26,26,.25],width:1}},c=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],l=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],s={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:i.light,size:8},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",outline:i.darker,size:8},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:i.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",outline:i.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}}}},m={};function d(o,e){return a.map(o,(function(a){var o=new t(a);return null!=e&&(o.a=e),o}))}function p(a,o,e){var n,i=r[a];if(i)switch((n={}).colors=d(i.stops),n.noDataColor=new t(o.noDataColor),n.opacity=o.fillOpacity||1,e){case"point":n.outline={color:new t(o.outline.color),width:o.outline.width},n.size=o.size;break;case"line":n.width=o.width;break;case"polygon":n.outline={color:new t(o.outline.color),width:o.outline.width}}return n}!function(){var a,o,e,n,t,r,i,c;for(a in s)for(n in e=(o=s[a]).basemapGroups,t=m[a]={basemaps:[].concat(e.light).concat(e.dark),point:{},line:{},polygon:{}},e)for(r=e[n],i=0;i<r.length;i++)c=r[i],o.pointSchemes&&(t.point[c]=o.pointSchemes[n]),o.lineSchemes&&(t.line[c]=o.lineSchemes[n]),o.polygonSchemes&&(t.polygon[c]=o.polygonSchemes[n])}();var h={getAvailableThemes:function(o){var e,n,t,r=[];for(e in s)n=s[e],t=m[e],o&&-1===a.indexOf(t.basemaps,o)||r.push({name:n.name,label:n.label,description:n.description,basemaps:t.basemaps.slice(0)});return r},getSchemes:function(o){var e,n,t=o.theme,r=o.basemap,i=function(a){var o=a;return"esriGeometryPoint"===o||"esriGeometryMultipoint"===o?o="point":"esriGeometryPolyline"===o?o="line":"esriGeometryPolygon"!==o&&"esriGeometryMultiPatch"!==o||(o="polygon"),o}(o.geometryType),c=m[t];return(e=(e=c&&c[i])&&e[r])&&(n={primaryScheme:p(e.primary,e.common,i),secondarySchemes:a.map(e.secondary,(function(a){return p(a,e.common,i)}))}),n},cloneScheme:function(a){var e;return a&&((e=o.mixin({},a)).colors=d(e.colors),e.noDataColor&&(e.noDataColor=new t(e.noDataColor)),e.outline&&(e.outline={color:e.outline.color&&new t(e.outline.color),width:e.outline.width})),e}};return e("extend-esri")&&o.setObject("styles.type",h,n),h}));