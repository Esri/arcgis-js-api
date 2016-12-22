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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/typescript","dojo/_base/lang","../../core/Evented","./messageHandler"],function(e,t,o,n,r,s,i,c){function p(){return i}var u=function(e){function t(){e.apply(this,arguments)}return o(t,e),t.prototype.dojoConstructor=function(e){var t=this;this._setConfig(e),c.on("message-received",function(e){t.__messageReceived(e)})},t.prototype._setConfig=function(e){e&&s.mixin(this,e)},t.prototype.__messageReceived=function(e){this._messageReceived(e)},t.prototype._messageReceived=function(e){},t=n([r.subclass()],t)}(p());return u});