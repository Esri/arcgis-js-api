// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","./polyfill/tsSupport/awaiter","./polyfill/tsSupport/generator"],(function(e,n,r,t){"use strict";return function(){function e(){this._username="",this._password="",this._token=null}return e.fromUserName=function(n,r){var t=new e;return t._username=n,t._password=r,t._token=null,t},e.fromArcadeDictionary=function(n){var r=new e;return n.hasField("username")&&(r._username=n.field("username")),n.hasField("password")&&(r._password=n.field("password")),n.hasField("token")&&(r._token=n.field("token")),r},e.fromToken=function(n){var r=new e;return r._token=n,r},Object.defineProperty(e.prototype,"username",{get:function(){return this._username},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"password",{get:function(){return this._password},enumerable:!1,configurable:!0}),e.prototype.getToken=function(){return r(this,void 0,void 0,(function(){return t(this,(function(e){return null===this._token?[2,"No Token Provided"]:[2,this._token]}))}))},e}()}));