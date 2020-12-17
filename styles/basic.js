// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],(function(o,e,r,i,t){var l={default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:1},size:8},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:1},size:8}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:1},size:8},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:1},size:8}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[255,255,255,1],width:2}]},dark:{primary:{color:[255,255,255,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[26,26,26,1],width:2}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,.25],width:1},opacity:.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,.25],width:1},opacity:.8},{color:[255,255,255,1],outline:{color:[128,128,128,.25],width:1},opacity:.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[92,92,92,.25],width:1},opacity:.8},secondary:[{color:[178,178,178,1],outline:{color:[92,92,92,.25],width:1},opacity:.8},{color:[26,26,26,1],outline:{color:[128,128,128,.25],width:1},opacity:.8}]}}}},n={};function c(o,e){var r;if(o)switch((r={}).color=new t(o.color),r.opacity=o.opacity||1,e){case"point":r.outline={color:new t(o.outline.color),width:o.outline.width},r.size=o.size;break;case"line":r.width=o.width;break;case"polygon":r.outline={color:new t(o.outline.color),width:o.outline.width}}return r}!function(){var o,e,r,i,t,c,a,s;for(o in l)for(i in r=(e=l[o]).basemapGroups,t=n[o]={basemaps:[].concat(r.light).concat(r.dark),point:{},line:{},polygon:{}},r)for(c=r[i],a=0;a<c.length;a++)s=c[a],e.pointSchemes&&(t.point[s]=e.pointSchemes[i]),e.lineSchemes&&(t.line[s]=e.lineSchemes[i]),e.polygonSchemes&&(t.polygon[s]=e.polygonSchemes[i])}();var a={getAvailableThemes:function(e){var r,i,t,c=[];for(r in l)i=l[r],t=n[r],e&&-1===o.indexOf(t.basemaps,e)||c.push({name:i.name,label:i.label,description:i.description,basemaps:t.basemaps.slice(0)});return c},getSchemes:function(e){var r,i,t=e.theme,l=e.basemap,a=function(o){var e=o;return"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?e="point":"esriGeometryPolyline"===e?e="line":"esriGeometryPolygon"!==e&&"esriGeometryMultiPatch"!==e||(e="polygon"),e}(e.geometryType),s=n[t];return(r=(r=s&&s[a])&&r[l])&&(i={primaryScheme:c(r.primary,a),secondarySchemes:o.map(r.secondary,(function(o){return c(o,a)}))}),i},cloneScheme:function(o){var r;return o&&((r=e.mixin({},o)).color&&(r.color=new t(r.color)),r.outline&&(r.outline={color:r.outline.color&&new t(r.outline.color),width:r.outline.width})),r}};return r("extend-esri")&&e.setObject("styles.basic",a,i),a}));