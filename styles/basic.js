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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/lang","../Color"],function(o,e,r){function i(){var o,e,r,i,t,l,a,s;for(o in n){e=n[o],r=e.basemapGroups,t=c[o]={basemaps:[].concat(r.light).concat(r.dark),point:{},polyline:{},polygon:{}};for(i in r)for(l=r[i],a=0;a<l.length;a++)s=l[a],e.pointSchemes&&(t.point[s]=e.pointSchemes[i]),e.lineSchemes&&(t.polyline[s]=e.lineSchemes[i]),e.polygonSchemes&&(t.polygon[s]=e.polygonSchemes[i])}}function t(o,e){var i;if(o)switch(i={},i.color=new r(o.color),e){case"point":i.outline={color:new r(o.outline.color),width:o.outline.width},i.size=o.size;break;case"polyline":i.width=o.width;break;case"polygon":i.outline={color:new r(o.outline.color),width:o.outline.width}}return i}function l(o){return o}var n={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:1},size:8}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:1},size:8},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:1},size:8},{color:[26,26,26,1],outline:{color:[178,178,178,1],width:1},size:8}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[255,255,255,1],width:2}]},dark:{primary:{color:[255,255,255,1],width:2},secondary:[{color:[226,119,40,1],width:2},{color:[26,26,26,1],width:2}]}},polygonSchemes:{light:{primary:{color:[227,139,79,.8],outline:{color:[255,255,255,1],width:1}},secondary:[{color:[128,128,128,.8],outline:{color:[255,255,255,1],width:1}},{color:[255,255,255,.8],outline:{color:[128,128,128,1],width:1}}]},dark:{primary:{color:[227,139,79,.8],outline:{color:[51,51,51,1],width:1}},secondary:[{color:[178,178,178,.8],outline:{color:[51,51,51,1],width:1}},{color:[26,26,26,.8],outline:{color:[128,128,128,1],width:1}}]}}}},c={};i();var a={getAvailableThemes:function(e){var r,i,t,l=[];for(r in n)i=n[r],t=c[r],e&&-1===o.indexOf(t.basemaps,e)||l.push({name:i.name,label:i.label,description:i.description,basemaps:t.basemaps.slice(0)});return l},getSchemes:function(e){var r,i,n=e.theme,a=e.basemap,s=l(e.geometryType),h=c[n];return r=h&&h[s],r=r&&r[a],r&&(i={primaryScheme:t(r.primary,s),secondarySchemes:o.map(r.secondary,function(o){return t(o,s)})}),i},cloneScheme:function(o){var i;return o&&(i=e.mixin({},o),i.color&&(i.color=new r(i.color)),i.outline&&(i.outline={color:i.outline.color&&new r(i.outline.color),width:i.outline.width})),i}};return a});