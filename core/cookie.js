// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,i){function o(e,i,o){void 0===o&&(o={});var r=o.expires;if("number"==typeof r){var t=new Date;t.setTime(t.getTime()+24*r*60*60*1e3),r=o.expires=t}"string"!=typeof r&&(o.expires=r.toUTCString());var n=e+"="+encodeURIComponent(i);for(var f in o){n+="; "+f;var p=o[f];!0!==p&&(n+="="+p)}document.cookie=n}Object.defineProperty(i,"__esModule",{value:!0}),i.writeCookie=o});