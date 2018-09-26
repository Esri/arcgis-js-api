// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","esri/request","dojo/_base/lang","dojo/Deferred"],function(e,a,t,r,s){return function(e,a){var n=r.mixin({},{url:e,failOk:!0},a);"array-buffer"===a.responseType?(n.handleAs="arraybuffer",delete n.responseType):a.responseType&&(n.handleAs=a.responseType,delete n.responseType),null!==a.query&&(n.content=n.query,delete n.query);var l;a.hasOwnProperty("allowImageDataAccess")&&(l={allowImageDataAccess:a.allowImageDataAccess},delete n.allowImageDataAccess);var o,c=new s(function(){o.isFulfilled()||o.cancel()});return o=t(n,l).then(function(e){c.resolve({data:e})}).catch(function(e){e&&null!=e.httpCode&&(e.details=e.details||{},e.details.httpStatus=e.httpCode),c.reject(e)}),c.promise}});