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

define(["require","exports","dojo/Deferred"],function(r,e,n){function t(r,e){if(Array.isArray(e)){var i=new n;return r(e,function(){for(var r=[],e=0;e<arguments.length;e++)r[e-0]=arguments[e];i.resolve(r)}),i.promise}return t(r,[e]).then(function(r){var e=r[0];return e})}function i(r,e,n){return e.toAbsMid?e.toAbsMid(r):n.id.replace(/\/[^\/]*$/gi,"/")+r}e.when=t,e.getAbsMid=i});