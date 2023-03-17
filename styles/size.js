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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],(function(o,a,e,i,r){var t=[128,128,128,1],n=[128,128,128,1],c={primary:{color:[227,139,79,1],noDataColor:t,outline:{color:[255,255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:t,outline:{color:[255,255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[255,255,255,1],noDataColor:t,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},l={primary:{color:[227,139,79,1],noDataColor:n,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[178,178,178,1],noDataColor:n,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[26,26,26,1],noDataColor:n,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},d={r:0,g:0,b:0,a:0},m={color:d,outline:{color:{r:166,g:166,b:166,a:.25},width:1}},s={color:d,outline:{color:{r:153,g:153,b:153,a:.25},width:1}},h={default:{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:c,dark:l},lineSchemes:{light:{primary:{color:[226,119,40,1],noDataColor:t,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[77,77,77,1],noDataColor:t,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:t,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]},dark:{primary:{color:[226,119,40,1],noDataColor:n,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[255,255,255,1],noDataColor:n,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:n,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]}},polygonSchemes:{light:{primary:{marker:c.primary,background:s,opacity:c.primary.opacity},secondary:[{marker:c.secondary[0],background:s,opacity:c.secondary[0].opacity},{marker:c.secondary[1],background:s,opacity:c.secondary[1].opacity}]},dark:{primary:{marker:l.primary,background:m,opacity:l.primary.opacity},secondary:[{marker:l.secondary[0],background:m,opacity:l.secondary[0].opacity},{marker:l.secondary[1],background:m,opacity:l.secondary[1].opacity}]}}}},y={};function p(o,a){var e,i,t;if(o)switch(e={},a){case"point":e.color=new r(o.color),e.noDataColor=new r(o.noDataColor),e.outline={color:new r(o.outline.color),width:o.outline.width},e.size=o.size,e.noDataSize=o.noDataSize,e.minSize=o.minSize,e.maxSize=o.maxSize,e.opacity=o.opacity||1;break;case"line":e.color=new r(o.color),e.noDataColor=new r(o.noDataColor),e.width=o.width,e.noDataWidth=o.noDataWidth,e.minWidth=o.minWidth,e.maxWidth=o.maxWidth,e.opacity=o.opacity||1;break;case"polygon":i=o.marker,t=o.background,e.marker={color:new r(i.color),noDataColor:new r(i.noDataColor),outline:{color:new r(i.outline.color),width:i.outline.width},size:i.size,noDataSize:i.noDataSize,minSize:i.minSize,maxSize:i.maxSize},e.background={color:new r(t.color),outline:{color:new r(t.outline.color),width:t.outline.width}},e.opacity=o.opacity||1,delete e.marker.opacity}return e}function u(o){var e;return o&&((e=a.mixin({},o)).color&&(e.color=new r(e.color)),e.noDataColor&&(e.noDataColor=new r(e.noDataColor)),e.outline&&(e.outline={color:e.outline.color&&new r(e.outline.color),width:e.outline.width})),e}!function(){var o,a,e,i,r,t,n,c;for(o in h)for(i in e=(a=h[o]).basemapGroups,r=y[o]={basemaps:[].concat(e.light).concat(e.dark),point:{},line:{},polygon:{}},e)for(t=e[i],n=0;n<t.length;n++)c=t[n],a.pointSchemes&&(r.point[c]=a.pointSchemes[i]),a.lineSchemes&&(r.line[c]=a.lineSchemes[i]),a.polygonSchemes&&(r.polygon[c]=a.polygonSchemes[i])}();var z={getAvailableThemes:function(a){var e,i,r,t=[];for(e in h)i=h[e],r=y[e],a&&-1===o.indexOf(r.basemaps,a)||t.push({name:i.name,label:i.label,description:i.description,basemaps:r.basemaps.slice(0)});return t},getSchemes:function(a){var e,i,r=a.theme,t=a.basemap,n=function(o){var a=o;return"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?a="point":"esriGeometryPolyline"===a?a="line":"esriGeometryPolygon"!==a&&"esriGeometryMultiPatch"!==a||(a="polygon"),a}(a.geometryType),c=y[r];return(e=(e=c&&c[n])&&e[t])&&(i={primaryScheme:p(e.primary,n),secondarySchemes:o.map(e.secondary,(function(o){return p(o,n)}))}),i},cloneScheme:function(o){var a;return o&&((a=u(o)).marker&&(a.marker=u(a.marker)),a.background&&(a.background=u(a.background))),a}};return e("extend-esri")&&a.setObject("styles.size",z,i),z}));