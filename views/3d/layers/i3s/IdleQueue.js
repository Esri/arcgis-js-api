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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/errors/CancelError","../../../../core/promiseUtils"],function(e,r,t,s){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){this._deferreds=[],this._values=[]}return e.prototype.push=function(e){var r=this;return s.create(function(t,s){r._deferreds.push({resolve:t,reject:s}),r._values.push(e)})},e.prototype.unshift=function(e){var r=this;return s.create(function(t,s){r._deferreds.unshift({resolve:t,reject:s}),r._values.unshift(e)})},e.prototype.length=function(){return this._deferreds.length},e.prototype.process=function(){this._deferreds.shift().resolve(this._values.shift())},e.prototype.cancelAll=function(){for(var e=new t,r=0,s=this._deferreds;r<s.length;r++){s[r].reject(e)}this._deferreds.length=0,this._values.length=0},e}();r.IdleQueue=n});