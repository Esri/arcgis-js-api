// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,i){return{invoke:function(n,o,t,u,_){n.__invokeTimeoutIDs||(n.__invokeTimeoutIDs={});var r=n.__invokeTimeoutIDs[o];if(r){if(null==t||!1===u)return r.dfd.promise;clearTimeout(r.handle)}return r||(r=n.__invokeTimeoutIDs[o]={dfd:new e}),r.handle=setTimeout((function(){delete n.__invokeTimeoutIDs[o],i(_?n[o].apply(n,_):n[o](),(function(e){r.dfd.resolve(e)}),(function(e){r.dfd.reject(e)}))}),t||0),r.dfd.promise},hasPendingInvoke:function(e,i){return!(!e.__invokeTimeoutIDs||!e.__invokeTimeoutIDs[i])},cancelInvoke:function(e,i){e.__invokeTimeoutIDs&&e.__invokeTimeoutIDs[i]&&(clearTimeout(e.__invokeTimeoutIDs[i].handle),delete e.__invokeTimeoutIDs[i])}}}));