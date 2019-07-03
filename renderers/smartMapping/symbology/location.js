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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/assignHelper","../../../Color","./support/SymbologyBase","./support/utils"],function(o,e,r,t,i,l,c){function n(o,e){var r="mesh"!==o.geometryType&&o.worldScale,i=r?o.view:null;switch(o.geometryType){case"point":case"multipoint":var l=e;return p({color:l.color,outline:t({},l.outline),size:l.size},i);case"polyline":var c=e;return a({color:c.color,width:c.width},i);case"polygon":var n=e;return u({size:n.size,color:n.color,outline:t({},n.outline),opacity:n.opacity},i);case"mesh":var d=e;return s({color:d.color,opacity:d.opacity})}}function p(o,e){return{color:new i(o.color),outline:{color:new i(o.outline.color),width:o.outline.width},size:e?c.toWorldScale(o.size,e):o.size,opacity:1}}function a(o,e){return{color:new i(o.color),width:e?c.toWorldScale(o.width,e):o.width,opacity:1}}function u(o,e){return{color:new i(o.color),outline:{color:new i(o.outline.color),width:o.outline.width},size:e?c.toWorldScale(o.size,e):o.size,opacity:o.opacity}}function s(o){return{color:new i(o.color),opacity:o.opacity}}var d={light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},y={light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},h={light:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{size:"12px",color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{size:"12px",color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}},w={name:"default",label:"Default",description:"Default theme for basic visualization of features.",schemes:{point:d,polyline:y,polygon:h}},m={default:w};return new(function(o){function e(){return o.call(this,{themeDictionary:m})||this}return r(e,o),e.prototype.getSchemes=function(o){var e=this.getRawSchemes({theme:"default",basemap:o.basemap,geometryType:o.geometryType});if(e){var r=this.getBasemapId(o.basemap,"default");return{primaryScheme:n(o,e.primary),secondarySchemes:e.secondary.map(function(e){return n(o,e)}).filter(Boolean),basemapId:r}}},e.prototype.cloneScheme=function(o){if(o){var e=t({},o);return e.color&&(e.color=new i(e.color)),"outline"in e&&e.outline&&(e.outline={color:e.outline.color&&new i(e.outline.color),width:e.outline.width}),e}},e}(l))});