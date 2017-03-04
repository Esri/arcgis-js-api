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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(o,e,i,r,t){function l(){var o,e,i,r,t,l,n,c;for(o in a){e=a[o],i=e.basemapGroups,t=s[o]={basemaps:[].concat(i.light).concat(i.dark),point:{},line:{},polygon:{}};for(r in i)for(l=i[r],n=0;n<l.length;n++)c=l[n],e.pointSchemes&&(t.point[c]=e.pointSchemes[r]),e.lineSchemes&&(t.line[c]=e.lineSchemes[r]),e.polygonSchemes&&(t.polygon[c]=e.polygonSchemes[r])}}function n(o,e){var i;if(o)switch(i={},i.color=new t(o.color),i.opacity=o.opacity||1,e){case"point":i.outline={color:new t(o.outline.color),width:o.outline.width},i.size=o.size;break;case"line":i.width=o.width;break;case"polygon":i.outline={color:new t(o.outline.color),width:o.outline.width}}return i}function c(o){var e=o;return"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?e="point":"esriGeometryPolyline"===e?e="line":"esriGeometryPolygon"===e&&(e="polygon"),e}var a={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:1},size:8}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[26,26,26,1],outline:{color:[178,178,178,1],width:1},size:8}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[255,255,255,1],width:2}]},dark:{primary:{color:[255,255,255,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[26,26,26,1],width:2}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,1],width:1},opacity:.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,1],width:1},opacity:.8},{color:[255,255,255,1],outline:{color:[128,128,128,1],width:1},opacity:.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[51,51,51,1],width:1},opacity:.8},secondary:[{color:[178,178,178,1],outline:{color:[51,51,51,1],width:1},opacity:.8},{color:[26,26,26,1],outline:{color:[128,128,128,1],width:1},opacity:.8}]}}}},s={};l();var h={getAvailableThemes:function(e){var i,r,t,l=[];for(i in a)r=a[i],t=s[i],e&&-1===o.indexOf(t.basemaps,e)||l.push({name:r.name,label:r.label,description:r.description,basemaps:t.basemaps.slice(0)});return l},getSchemes:function(e){var i,r,t=e.theme,l=e.basemap,a=c(e.geometryType),h=s[t];return i=h&&h[a],i=i&&i[l],i&&(r={primaryScheme:n(i.primary,a),secondarySchemes:o.map(i.secondary,function(o){return n(o,a)})}),r},cloneScheme:function(o){var i;return o&&(i=e.mixin({},o),i.color&&(i.color=new t(i.color)),i.outline&&(i.outline={color:i.outline.color&&new t(i.outline.color),width:i.outline.width})),i}};return i("extend-esri")&&e.setObject("styles.basic",h,r),h});