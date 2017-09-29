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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(e,t){var r=function(){function e(e){this._graphics=e.graphics,this._objectIdField=e.objectIdField,this._graphicMap=new Map}return e.prototype.destroy=function(){this.removeAll()},Object.defineProperty(e.prototype,"graphics",{get:function(){return this._graphics},enumerable:!0,configurable:!0}),e.prototype.findGraphic=function(e){var t=this._graphicMap.get(e);return t?t.object:null},e.prototype.removeAll=function(){this._graphicMap.clear(),this._graphics.removeAll()},e.prototype.add=function(e,t){var r;for(var i in e){r=e[i];var o=this._graphicMap.get(r.attributes[this._objectIdField]);o?++o.references:(this._graphicMap.set(r.attributes[this._objectIdField],{object:r,references:1}),this._graphics.add(r))}},e.prototype.removeMany=function(e){var t;for(var r in e){t=e[r];var i=this._graphicMap.get(t);i&&(--i.references,0===i.references&&(this._graphicMap["delete"](t),this._graphics.remove(i.object)))}},e.prototype.removeIntent=function(e){},e.prototype.createIntentToAdd=function(e){},e}();return r});