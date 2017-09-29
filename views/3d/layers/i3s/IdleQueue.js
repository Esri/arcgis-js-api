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

define(["require","exports","dojo/Deferred"],function(e,t,u){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._queue=[]}return e.prototype.push=function(){var e=new u;return this._queue.push(e),e.promise},e.prototype.length=function(){return this._queue.length},e.prototype.process=function(){this._queue.shift().resolve()},e.prototype.cancelAll=function(){for(var e=0,t=this._queue;e<t.length;e++){var u=t[e];u.cancel()}this._queue.length=0},e}();t.IdleQueue=n});