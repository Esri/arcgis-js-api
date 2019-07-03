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

define(["require","exports","./programUtils"],function(r,t,e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function r(r){this._programCacheByTemplate=new Map,this._rctx=r}return r.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(r){r.programs.forEach(function(r){r.dispose()})}),this._programCacheByTemplate=null},r.prototype.getProgram=function(r,t){var a=this;return this._programCacheByTemplate.has(r)||this.addProgramTemplate(r,function(t){return e.createProgram(a._rctx,r,t)}),this.getProgramTemplateInstance(r,t)},r.prototype.addProgramTemplate=function(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})},r.prototype.getProgramTemplateInstance=function(r,t){var e=this._programCacheByTemplate.get(r);if(e){var a=t?JSON.stringify(t):"default";if(!e.programs.has(a)){var o=e.constructor(t);e.programs.set(a,o)}return e.programs.get(a)}return null},r}();t.ProgramCache=a});