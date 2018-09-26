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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./Programs","../../../webgl/programUtils"],function(e,t,r,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._cache=new Array(8);for(var e=0;e<8;e++)this._cache[e]={}}return e.prototype.dispose=function(){this._programRepo&&(this._programRepo.dispose(),this._programRepo=null)},e.prototype.getProgram=function(e,t,r){var a=this._cache[e];if(!a[t]){var i=this._programRepo.getProgram(this._getProgramTemplate(e),r);a[t]=i}return a[t]},e.prototype.getProgramAttributes=function(e){switch(e){case 0:return r.background.attributes;case 5:return r.circle.attributes;case 1:return r.fill.attributes;case 4:return r.icon.attributes;case 3:return r.line.attributes;case 2:return r.outline.attributes;case 6:return r.text.attributes;case 7:return r.tileInfo.attributes}},e.prototype.initialize=function(e){this._programRepo||(this._programRepo=new a.ProgramCache(e))},e.prototype._getProgramTemplate=function(e){switch(e){case 0:return r.background;case 5:return r.circle;case 1:return r.fill;case 4:return r.icon;case 3:return r.line;case 2:return r.outline;case 6:return r.text;case 7:return r.tileInfo}},e}();t.default=i});