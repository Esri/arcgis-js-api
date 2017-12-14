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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Utils"],function(t,e,o){var i=function(){function t(){this._groupToItems=new Map,this._itemToGroups=new Map}return t.prototype.addItem=function(t,e){o.multimapAdd(this._groupToItems,t,e),o.multimapAdd(this._itemToGroups,e,t)},t.prototype.removeItem=function(t,e){o.multimapRemove(this._groupToItems,t,e),o.multimapRemove(this._itemToGroups,e,t)},t.prototype.groupCount=function(t){return this._itemToGroups.has(t)?this._itemToGroups.get(t).size:0},t.prototype.getItems=function(t){return this._groupToItems.has(t)?this._groupToItems.get(t):new Set},t.prototype.deleteGroup=function(t){var e=this;if(this._groupToItems.has(t)){var o=this._groupToItems.get(t);o.forEach(function(o){var i=e._itemToGroups.get(o);i["delete"](t),0===i.size&&e._itemToGroups["delete"](o)}),this._groupToItems["delete"](t)}},t}();return i});