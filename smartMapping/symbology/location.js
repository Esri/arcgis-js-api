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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","./support/SymbologyBase","./support/utils"],(function(o,e,i,r,t,l){var c={default:{name:"default",label:"Default",description:"Default theme for basic visualization of features.",schemes:{point:{light:{primary:{color:[77,77,77,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[255,255,255,1],outline:{color:[51,51,51,.25],width:"1px"},size:"8px"}]},dark:{primary:{color:[255,255,255,1],outline:{color:[92,92,92,.25],width:"1px"},size:"8px"},secondary:[{color:[226,119,40,1],outline:{color:[255,255,255,.25],width:"1px"},size:"8px"},{color:[26,26,26,1],outline:{color:[178,178,178,.25],width:"1px"},size:"8px"}]}},polyline:{light:{primary:{color:[77,77,77,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[255,255,255,1],width:"2px"}]},dark:{primary:{color:[255,255,255,1],width:"2px"},secondary:[{color:[226,119,40,1],width:"2px"},{color:[26,26,26,1],width:"2px"}]}},polygon:{light:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[128,128,128,1],outline:{color:[255,255,255,.25],width:"1px"},opacity:.8},{size:"12px",color:[255,255,255,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]},dark:{primary:{size:"12px",color:[227,139,79,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},secondary:[{size:"12px",color:[178,178,178,1],outline:{color:[92,92,92,.25],width:"1px"},opacity:.8},{size:"12px",color:[26,26,26,1],outline:{color:[128,128,128,.25],width:"1px"},opacity:.8}]}}}}};function n(o,e){var t="mesh"!==o.geometryType&&o.worldScale?o.view:null;switch(o.geometryType){case"point":case"multipoint":var c=e;return function(o,e){return{color:new r(o.color),outline:{color:new r(o.outline.color),width:o.outline.width},size:e?l.toWorldScale(o.size,e):o.size,opacity:1}}({color:c.color,outline:i.__assign({},c.outline),size:c.size},t);case"polyline":var n=e;return function(o,e){return{color:new r(o.color),width:e?l.toWorldScale(o.width,e):o.width,opacity:1}}({color:n.color,width:n.width},t);case"polygon":var a=e;return function(o,e){return{color:new r(o.color),outline:{color:new r(o.outline.color),width:o.outline.width},size:e?l.toWorldScale(o.size,e):o.size,opacity:o.opacity}}({size:a.size,color:a.color,outline:i.__assign({},a.outline),opacity:a.opacity},t);case"mesh":var p=e;return function(o){return{color:new r(o.color),opacity:o.opacity}}({color:p.color,opacity:p.opacity})}}return new(function(o){function e(){return o.call(this,{themeDictionary:c})||this}return i.__extends(e,o),e.prototype.getSchemes=function(o){var e=this.getRawSchemes({theme:"default",basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme});if(e){var i=e.schemesInfo,r=e.basemapId,t=e.basemapTheme;return{primaryScheme:n(o,i.primary),secondarySchemes:i.secondary.map((function(e){return n(o,e)})).filter(Boolean),basemapId:r,basemapTheme:t}}},e.prototype.cloneScheme=function(o){if(o){var e=i.__assign({},o);return e.color&&(e.color=new r(e.color)),"outline"in e&&e.outline&&(e.outline={color:e.outline.color&&new r(e.outline.color),width:e.outline.width}),e}},e}(t))}));