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

define(["require","exports","dojo/Deferred"],function(e,r,n){function t(e,r){if(Array.isArray(r)){var i=new n;return e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];i.resolve(e)}),i.promise}return t(e,[r]).then(function(e){var r=e[0];return r})}function i(e,r,n){return r.toAbsMid?r.toAbsMid(e):n.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0}),r.when=t,r.getAbsMid=i});