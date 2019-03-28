// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../Color","./support/utils"],function(o,e,r,t,i){function a(o,e){var r;if(o)switch(e){case"point":case"multipoint":var i=o;r={color:new t(i.color),outline:{color:new t(i.outline.color),width:i.outline.width},size:i.size,opacity:i.opacity||1};break;case"polyline":var a=o;r={color:new t(a.color),width:a.width,opacity:a.opacity||1};break;case"polygon":var c=o;r={color:new t(c.color),outline:{color:new t(c.outline.color),width:c.outline.width},opacity:c.opacity||1};break;case"mesh":var l=o;r={color:new t(l.color),opacity:l.opacity||1}}return r}function c(o,e){var r=n.default,t=i.getStorageType(e),a=r&&r[t];return a&&a[o]}var l={default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}}}},n={};!function(){for(var o in l){var e=l[o],r=e.basemapGroups,t=n[o]={basemaps:[].concat(r.light).concat(r.dark),point:{},polyline:{},polygon:{}};for(var i in r)for(var a=r[i],c=0;c<a.length;c++){var s=a[c];e.pointSchemes&&(t.point[s]=e.pointSchemes[i]),e.lineSchemes&&(t.polyline[s]=e.lineSchemes[i]),e.polygonSchemes&&(t.polygon[s]=e.polygonSchemes[i])}}}();var s={getThemes:function(o){var e=[];for(var r in l){var t=l[r],a=n[r],c=i.getBasemapId(o,a.basemaps);c&&-1===a.basemaps.indexOf(c)||e.push({name:t.name,label:t.label,description:t.description,basemaps:a.basemaps.slice(0)})}return e},getSchemes:function(o){var e,r=o.geometryType,t="mesh"!==r&&o.worldScale,l=o.view,p=i.getBasemapId(o.basemap,n.default.basemaps),h=c(p,r);if(h){var d=a(h.primary,r);e={primaryScheme:t?s.toWorldScale({scheme:d,view:l}):d,secondarySchemes:h.secondary.map(function(o){var e=a(o,r);return t?s.toWorldScale({scheme:e,view:l}):e}),basemapId:p}}return e},cloneScheme:function(o){var e;return o&&(e=r({},o),e.color&&(e.color=new t(e.color)),e.outline&&(e.outline={color:e.outline.color&&new t(e.outline.color),width:e.outline.width})),e},toWorldScale:function(o){if(o.scheme&&o.view){var e=o.scheme,r=o.scheme;if(e.hasOwnProperty("size"))return e.size&&(e.size=i.toWorldScale(e.size,o.view)),e;if(r.hasOwnProperty("width"))return r.width&&(r.width=i.toWorldScale(r.width,o.view)),r}return o.scheme}};return s});