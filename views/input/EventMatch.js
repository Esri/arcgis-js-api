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

define(["require","exports"],function(e,t){var i=function(){function e(e,t){void 0===t&&(t=[]),this.eventType=e,this.keyModifiers=t}return e.prototype.matches=function(e,t){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;for(var i=0,r=this.keyModifiers;i<r.length;i++){var n=r[i];if(!t.has(n))return!1}return!0},e}();t.EventMatch=i});