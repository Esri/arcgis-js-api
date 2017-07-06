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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["../../declare"],function(i){return i("esri.dijit.geoenrichment._Invoke",null,{_invokeTimeoutIDs:null,invoke:function(i,e){if(this._invokeTimeoutIDs){if(this._invokeTimeoutIDs[i]){if(void 0===e)return;clearTimeout(this._invokeTimeoutIDs[i])}}else this._invokeTimeoutIDs={};var o=this;this._invokeTimeoutIDs[i]=setTimeout(function(){o._invokeTimeoutIDs[i]=0,o[i]()},e||0)},pendingInvoke:function(i){return this._invokeTimeoutIDs?this._invokeTimeoutIDs[i]:!1},cancelInvoke:function(i){if(this._invokeTimeoutIDs){var e=this._invokeTimeoutIDs[i];e&&(clearTimeout(e),this._invokeTimeoutIDs[i]=0)}}})});