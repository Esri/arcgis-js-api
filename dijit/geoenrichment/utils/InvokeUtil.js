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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when"],function(e,n){return{invoke:function(o,i,t,u,_){o.__invokeTimeoutIDs||(o.__invokeTimeoutIDs={});var d=o.__invokeTimeoutIDs[i];if(d){if(null==t||u===!1)return d.dfd.promise;clearTimeout(d.handle)}return d||(d=o.__invokeTimeoutIDs[i]={dfd:new e}),d.handle=setTimeout(function(){delete o.__invokeTimeoutIDs[i],n(_?o[i].apply(o,_):o[i](),function(e){d.dfd.resolve(e)},function(e){d.dfd.reject(e)})},t||0),d.dfd.promise},hasPendingInvoke:function(e,n){return!(!e.__invokeTimeoutIDs||!e.__invokeTimeoutIDs[n])},cancelInvoke:function(e,n){e.__invokeTimeoutIDs&&e.__invokeTimeoutIDs[n]&&(clearTimeout(e.__invokeTimeoutIDs[n].handle),delete e.__invokeTimeoutIDs[n])}}});