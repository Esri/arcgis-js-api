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

define(["require","exports","../../../../../core/promiseUtils"],function(e,i,r){Object.defineProperty(i,"__esModule",{value:!0});var t=function(){function e(e,i,r){this._relativePath=i,this._moduleRequire=r,this._module=e}return e.prototype.get=function(){return this._module},e.prototype.reload=function(){var e=this,i=this._moduleRequire.toUrl(this._relativePath);return i=i.slice(i.indexOf("esri/")),this._recursivelyInvalidateModuleCache(i),r.create(function(i){e._moduleRequire([e._relativePath],function(r){e._module=r,i()})})},e.prototype._recursivelyInvalidateModuleCache=function(e){if(-1!==e.search("shader")||-1!==e.search("shading")){var i=this._moduleRequire.modules,r=i[e];if(r){var t=r.deps;delete i[e];for(var o=0,u=t;o<u.length;o++){var a=u[o];"esri"===a.pid&&this._recursivelyInvalidateModuleCache(a.mid)}}}},e}();i.ReloadableShaderModule=t});