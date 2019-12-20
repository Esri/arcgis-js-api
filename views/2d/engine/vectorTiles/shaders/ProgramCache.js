// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../webgl","./Programs"],function(e,r,t,a){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e){this._cache=new Array(8);for(var r=0;r<8;r++)this._cache[r]={};this._programRepo=new t.ProgramCache(e)}return e.prototype.dispose=function(){this._programRepo&&(this._programRepo.dispose(),this._programRepo=null)},e.prototype.getProgram=function(e,r,t){var a=this._cache[e];if(!a[r]){var n=this._programRepo.getProgram(this._getProgramTemplate(e),t);a[r]=n}return a[r]},e.prototype.getProgramAttributes=function(e){switch(e){case 0:return a.background.attributes;case 5:return a.circle.attributes;case 1:return a.fill.attributes;case 4:return a.icon.attributes;case 3:return a.line.attributes;case 2:return a.outline.attributes;case 6:return a.text.attributes;default:return null}},e.prototype._getProgramTemplate=function(e){switch(e){case 0:return a.background;case 5:return a.circle;case 1:return a.fill;case 4:return a.icon;case 3:return a.line;case 2:return a.outline;case 6:return a.text;default:return null}},e}();r.default=n});