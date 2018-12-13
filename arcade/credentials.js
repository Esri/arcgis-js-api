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

define(["require","exports","dojo/Deferred"],function(e,r,n){return function(){function e(){this._username="",this._password="",this._token=null}return e.fromUserName=function(r,n,o){var t=new e;return t._username=r,t._password=n,t._token=null,t},e.fromArcadeDictionary=function(r){var n=new e;return r.hasField("username")&&(n._username=r.field("username")),r.hasField("password")&&(n._password=r.field("password")),r.hasField("token")&&(n._token=r.field("token")),n},e.fromToken=function(r){var n=new e;return n._token=r,n},Object.defineProperty(e.prototype,"username",{get:function(){return this._username},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this._password},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){var e=new n;return null===this._token?e.reject("No Token Provided"):e.resolve(this._token),e.promise},e}()});