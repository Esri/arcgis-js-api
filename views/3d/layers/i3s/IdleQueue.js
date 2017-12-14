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

define(["require","exports","dojo/Deferred"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this._deferreds=[],this._values=[]}return e.prototype.push=function(e){var t=new r;return this._deferreds.push(t),this._values.push(e),t.promise},e.prototype.length=function(){return this._deferreds.length},e.prototype.process=function(){this._deferreds.shift().resolve(this._values.shift())},e.prototype.cancelAll=function(){for(var e=0,t=this._deferreds;e<t.length;e++){var r=t[e];r.cancel()}this._deferreds.length=0,this._values.length=0},e}();t.IdleQueue=s});