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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors","./size"],function(e,o,n,r,a,i,t){function m(){var e,o,n,r,a,i,t,m;for(e in h){o=h[e],n=o.basemapGroups,a=u[e]={basemaps:[].concat(n.light).concat(n.dark),point:{},line:{},polygon:{}};for(r in n)for(i=n[r],t=0;t<i.length;t++)m=i[t],o.pointSchemes&&(a.point[m]=o.pointSchemes[r]),o.lineSchemes&&(a.line[m]=o.lineSchemes[r]),o.polygonSchemes&&(a.polygon[m]=o.polygonSchemes[r])}}function l(o,n){return e.map(o,function(e){var o=new a(e);return null!=n&&(o.a=n),o})}function p(e,o,n,r){var t,m=i[e];if(m)switch(t={},t.colors=l(m.stops),t.noDataColor=new a(o.noDataColor),t.opacity=o.fillOpacity||1,t.sizeInfo=r,n){case"point":t.outline={color:new a(o.outline.color),width:o.outline.width},t.size=o.size;break;case"line":t.width=o.width;break;case"polygon":t.outline={color:new a(o.outline.color),width:o.outline.width},r&&r.marker&&null!=o.markerSize&&(r.marker.size=o.markerSize)}return t}function c(e){var o=e;return"esriGeometryPoint"===o||"esriGeometryMultipoint"===o?o="point":"esriGeometryPolyline"===o?o="line":"esriGeometryPolygon"===o&&(o="polygon"),o}var s={light:{color:[153,153,153,1],width:1},dark:{color:[51,51,51,1],width:1},darker:{color:[26,26,26,1],width:1}},d="#aaaaaa",h={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:d,outline:s.light,size:8},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5"]},dark:{common:{noDataColor:d,outline:s.darker,size:8},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5"]}},lineSchemes:{light:{common:{noDataColor:d,width:2},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5"]},dark:{common:{noDataColor:d,width:2},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5"]}},polygonSchemes:{light:{common:{noDataColor:d,outline:s.light,fillOpacity:.8,markerSize:8},primary:"predominant-v1",secondary:["predominant-v2","predominant-v3","predominant-v4","predominant-v5"]},dark:{common:{noDataColor:d,outline:s.dark,fillOpacity:.8,markerSize:8},primary:"predominant-v2",secondary:["predominant-v1","predominant-v3","predominant-v4","predominant-v5"]}}}},u={};m();var y={getAvailableThemes:function(o){var n,r,a,i=[];for(n in h)r=h[n],a=u[n],o&&-1===e.indexOf(a.basemaps,o)||i.push({name:r.name,label:r.label,description:r.description,basemaps:a.basemaps.slice(0)});return i},getSchemes:function(o){var n,r,a=o.theme,i=o.basemap,m=c(o.geometryType),l=t.getSchemes({theme:"default",basemap:o.basemap,geometryType:o.geometryType}),s=l&&l.primaryScheme,d=u[a];return n=d&&d[m],n=n&&n[i],n&&(r={primaryScheme:p(n.primary,n.common,m,s),secondarySchemes:e.map(n.secondary,function(e){return p(e,n.common,m,s)})}),r},cloneScheme:function(e){var n;return e&&(n=o.mixin({},e),n.colors=l(n.colors),n.noDataColor&&(n.noDataColor=new a(n.noDataColor)),n.outline&&(n.outline={color:n.outline.color&&new a(n.outline.color),width:n.outline.width}),n.sizeInfo&&(n.sizeInfo=t.cloneScheme(n.sizeInfo))),n}};return n("extend-esri")&&o.setObject("styles.predominance",y,r),y});