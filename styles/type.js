// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors"],(function(e,o,a,t,r,n){var i={light:{color:[153,153,153,.25],width:1},dark:{color:[153,153,153,.25],width:1},darker:{color:[26,26,26,.25],width:1}},c=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],l=["predominant-v1","predominant-v2","predominant-v3","predominant-v4","predominant-v5","predominance-race","predominance-money","predominance-race-ethnic","predominance-rainbow","predominance-sequence"],s={default:{name:"default",label:"Default",description:"Default theme for visualizing features by their type.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:i.light,size:8},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",outline:i.darker,size:8},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:i.light,fillOpacity:.8},primary:"cat-dark",secondary:["cat-light"].concat(c,l)},dark:{common:{noDataColor:"#aaaaaa",outline:i.dark,fillOpacity:.8},primary:"cat-light",secondary:["cat-dark"].concat(c,l)}}}},m={};function d(o,a){return e.map(o,(function(e){var o=new r(e);return null!=a&&(o.a=a),o}))}function p(e,o,a){var t,i=n[e];if(i)switch((t={}).colors=d(i.stops),t.noDataColor=new r(o.noDataColor),t.opacity=o.fillOpacity||1,a){case"point":t.outline={color:new r(o.outline.color),width:o.outline.width},t.size=o.size;break;case"line":t.width=o.width;break;case"polygon":t.outline={color:new r(o.outline.color),width:o.outline.width}}return t}!function(){var e,o,a,t,r,n,i,c;for(e in s)for(t in a=(o=s[e]).basemapGroups,r=m[e]={basemaps:[].concat(a.light).concat(a.dark),point:{},line:{},polygon:{}},a)for(n=a[t],i=0;i<n.length;i++)c=n[i],o.pointSchemes&&(r.point[c]=o.pointSchemes[t]),o.lineSchemes&&(r.line[c]=o.lineSchemes[t]),o.polygonSchemes&&(r.polygon[c]=o.polygonSchemes[t])}();var h={getAvailableThemes:function(o){var a,t,r,n=[];for(a in s)t=s[a],r=m[a],o&&-1===e.indexOf(r.basemaps,o)||n.push({name:t.name,label:t.label,description:t.description,basemaps:r.basemaps.slice(0)});return n},getSchemes:function(o){var a,t,r=o.theme,n=o.basemap,i=function(e){var o=e;return"esriGeometryPoint"===o||"esriGeometryMultipoint"===o?o="point":"esriGeometryPolyline"===o?o="line":"esriGeometryPolygon"!==o&&"esriGeometryMultiPatch"!==o||(o="polygon"),o}(o.geometryType),c=m[r];return(a=(a=c&&c[i])&&a[n])&&(t={primaryScheme:p(a.primary,a.common,i),secondarySchemes:e.map(a.secondary,(function(e){return p(e,a.common,i)}))}),t},cloneScheme:function(e){var a;return e&&((a=o.mixin({},e)).colors=d(a.colors),a.noDataColor&&(a.noDataColor=new r(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new r(a.outline.color),width:a.outline.width})),a}};return a("extend-esri")&&o.setObject("styles.type",h,t),h}));