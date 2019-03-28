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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["../promiseUtils"],function(n){function t(t,e,c,u){function i(n){o&&o.cancel(n)}var o=null;return n.create(function(c,i){function r(n){try{f(u.next(n))}catch(n){i(n)}}function a(n){try{f(u.throw(n))}catch(n){i(n)}}function f(t){t.done?(o=n.when(t.value),o.then(c,i)):(o=n.when(t.value),o.then(r,a))}f((u=u.apply(t,e||[])).next())},i)}return t});