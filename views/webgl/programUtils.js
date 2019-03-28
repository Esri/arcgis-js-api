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

define(["require","exports","./Program"],function(e,r,t){function a(e){var r="";for(var t in e){var a=e[t];if("boolean"==typeof a)a&&(r+="#define "+t+"\n");else if("number"==typeof a)r+="#define "+t+" "+a.toFixed()+"\n";else if("object"==typeof a){var o=a.options,n=0;for(var i in o)r+="#define "+o[i]+" "+(n++).toFixed()+"\n";r+="#define "+t+" "+o[a.value]+"\n"}}return r}function o(e,r,a,o){a=a||{},o=o||"";var n="function"==typeof r.shaders?r.shaders(a):r.shaders;return new t(e,o+n.vertexShader,o+n.fragmentShader,r.attributes)}Object.defineProperty(r,"__esModule",{value:!0}),r.glslifyDefineMap=a;var n=function(){function e(e){this._programCacheByTemplate=new Map,this._rctx=e}return e.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(e){e.programs.forEach(function(e){e.dispose()})}),this._programCacheByTemplate=null},e.prototype.getProgram=function(e,r){var t=this;return this._programCacheByTemplate.has(e)||this.addProgramTemplate(e,function(r){return o(t._rctx,e,r)}),this.getProgramTemplateInstance(e,r)},e.prototype.addProgramTemplate=function(e,r){this._programCacheByTemplate.set(e,{constructor:r,programs:new Map})},e.prototype.getProgramTemplateInstance=function(e,r){var t=this._programCacheByTemplate.get(e);if(t){var a=r?JSON.stringify(r):"default";if(!t.programs.has(a)){var o=t.constructor(r);t.programs.set(a,o)}return t.programs.get(a)}return null},e}();r.ProgramCache=n,r.createProgram=o});