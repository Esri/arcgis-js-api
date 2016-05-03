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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./Accessoire"],function(r){return r.createSubclass({constructor:function(){this._groups={}},destroy:function(){this.removeAll(),this._groups=null},_groups:null,_sizeGetter:function(){var r,e=0,t=this._groups;for(r in t)e+=t[r].length;return e},add:function(r,e){if(!r||!r.remove&&!r.length)return this;var t=this._getOrCreateGroup(e);if("function"==typeof r.remove)t.push(r);else for(var n=0,i=r.length;i>n;n++)t.push(r[n]);return this.notifyChange("size"),this},has:function(r){var e=this._groups[r];return!!e&&e.length>0},remove:function(r){if(Array.isArray(r))return r.forEach(this.remove.bind(this)),this;var e=this._getGroup(r);if(!e)return this;for(var t=0,n=e.length;n>t;t++)e[t].remove();return e.length=0,this.notifyChange("size"),this},removeAll:function(){var r,e=this._groups;for(r in e)this.remove(r),delete e[r];return this},_getOrCreateGroup:function(r){return this._getGroup(r)||(this._groups[this._ensureGroupName(r)]=[])},_getGroup:function(r){return this._groups[this._ensureGroupName(r)]},_ensureGroupName:function(r){return r||"_default_"}})});