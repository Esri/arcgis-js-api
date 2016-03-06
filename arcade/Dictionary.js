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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports"],function(){var t=function(){function t(r){this.attributes=null,this.plain=!1,this.attributes=r instanceof t?r.attributes:void 0===r?{}:null===r?{}:r}return t.prototype.field=function(t){var r=t.toLowerCase(),i=this.attributes[t];if(void 0!==i)return i;for(var e in this.attributes)if(e.toLowerCase()===r)return this.attributes[e];throw new Error("Field not Found")},t.prototype.hasField=function(t){var r=t.toLowerCase(),i=this.attributes[t];if(void 0!==i)return!0;for(var e in this.attributes)if(e.toLowerCase()===r)return!0;return!1},t.prototype.keys=function(){var t=[];for(var r in this.attributes)t.push(r);return t=t.sort()},t}();return t});