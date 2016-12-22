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

define(["require","exports"],function(e,t){var r=function(){function e(e,t,r,o){this.level=e,this.row=t,this.col=r,this.world=o}return e.from=function(t,r,o,n){var i=typeof t;return"object"===i?t:"string"===i?e.fromId(t):new e(t,r,o,n)},e.fromId=function(t){var r=t.split("/"),o=r[0],n=r[1],i=r[2],u=r[3];return new e(parseFloat(o),parseFloat(n),parseFloat(i),parseFloat(u))},e.getId=function(e,t,r,o){return"object"==typeof e?e.level+"/"+e.row+"/"+e.col+"/"+e.world:e+"/"+t+"/"+r+"/"+o},Object.defineProperty(e.prototype,"id",{get:function(){return e.getId(this)},enumerable:!0,configurable:!0}),e}();return r});