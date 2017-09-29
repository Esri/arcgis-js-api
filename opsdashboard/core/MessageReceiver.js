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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/typescript","dojo/_base/lang","../../core/Evented","./messageHandler"],function(e,t,n,o,r,s,i,c){function u(){return i}var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.dojoConstructor=function(e){var t=this;this._setConfig(e),c.on("message-received",function(e){t.__messageReceived(e)})},t.prototype._setConfig=function(e){e&&s.mixin(this,e)},t.prototype.__messageReceived=function(e){this._messageReceived(e)},t.prototype._messageReceived=function(e){},t=o([r.subclass()],t)}(u());return p});