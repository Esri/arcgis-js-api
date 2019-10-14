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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/promiseUtils"],function(e,n,r){return function(){function e(){this._username="",this._password="",this._token=null}return e.fromUserName=function(n,r,t){var o=new e;return o._username=n,o._password=r,o._token=null,o},e.fromArcadeDictionary=function(n){var r=new e;return n.hasField("username")&&(r._username=n.field("username")),n.hasField("password")&&(r._password=n.field("password")),n.hasField("token")&&(r._token=n.field("token")),r},e.fromToken=function(n){var r=new e;return r._token=n,r},Object.defineProperty(e.prototype,"username",{get:function(){return this._username},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this._password},enumerable:!0,configurable:!0}),e.prototype.getToken=function(){var e=this;return r.create(function(n,r){null===e._token?r("No Token Provided"):n(e._token)})},e}()});