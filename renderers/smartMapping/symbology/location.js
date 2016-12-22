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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../../Color","./support/utils"],function(o,e,i,r,t){function l(){for(var o in n){var e=n[o],i=e.basemapGroups,r=p[o]={basemaps:[].concat(i.light).concat(i.dark),point:{},polyline:{},polygon:{}};for(var t in i)for(var l=i[t],c=0;c<l.length;c++){var a=l[c];e.pointSchemes&&(r.point[a]=e.pointSchemes[t]),e.lineSchemes&&(r.polyline[a]=e.lineSchemes[t]),e.polygonSchemes&&(r.polygon[a]=e.polygonSchemes[t])}}}function c(o,e){var i;if(o)switch(e){case"point":case"multipoint":var t=o;i={color:new r(t.color),outline:{color:new r(t.outline.color),width:t.outline.width},size:t.size,opacity:t.opacity||1};break;case"polyline":var l=o;i={color:new r(l.color),width:l.width,opacity:l.opacity||1};break;case"polygon":var c=o;i={color:new r(c.color),outline:{color:new r(c.outline.color),width:c.outline.width},opacity:c.opacity||1}}return i}function a(o,e){var i="default",r=p[i],t=r&&r["multipoint"===e?"point":e];return t&&t[o]}var n={"default":{name:"default",label:"Default",description:"Default theme for basic visualization of features.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,1],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[26,26,26,1],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,1],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,1],width:"1px"},size:"8px"}]}},lineSchemes:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygonSchemes:{light:{primary:{color:[227,139,79,1],outline:{color:[255,255,255,1],width:"1px"},opacity:.8},secondary:[{color:[128,128,128,1],outline:{color:[255,255,255,1],width:"1px"},opacity:.8},{color:[255,255,255,1],outline:{color:[128,128,128,1],width:"1px"},opacity:.8}]},dark:{primary:{color:[227,139,79,1],outline:{color:[51,51,51,1],width:"1px"},opacity:.8},secondary:[{color:[178,178,178,1],outline:{color:[51,51,51,1],width:"1px"},opacity:.8},{color:[26,26,26,1],outline:{color:[128,128,128,1],width:"1px"},opacity:.8}]}}}},p={};l();var s={getThemes:function(o){var e=[],i=t.normalizedBasemapId(o);for(var r in n){var l=n[r],c=p[r];i&&-1===c.basemaps.indexOf(i)||e.push({name:l.name,label:l.label,description:l.description,basemaps:c.basemaps.slice(0)})}return e},getSchemes:function(o){var e,i=o.geometryType,r=o.worldScale,l=o.view,n=a(t.normalizedBasemapId(o.basemap),i);if(n){var p=c(n.primary,i);e={primaryScheme:r?s.toWorldScale({scheme:p,view:l}):p,secondarySchemes:n.secondary.map(function(o){var e=c(o,i);return r?s.toWorldScale({scheme:e,view:l}):e})}}return e},cloneScheme:function(o){var e;return o&&(e=i.mixin({},o),e.color&&(e.color=new r(e.color)),e.outline&&(e.outline={color:e.outline.color&&new r(e.outline.color),width:e.outline.width})),e},toWorldScale:function(o){if(o.scheme&&o.view){var e=o.scheme,i=o.scheme;return e.hasOwnProperty("size")?(e.size&&(e.size=t.toWorldScale(e.size,o.view)),e):i.hasOwnProperty("width")?(i.width&&(i.width=t.toWorldScale(i.width,o.view)),i):o.scheme}}};return s});