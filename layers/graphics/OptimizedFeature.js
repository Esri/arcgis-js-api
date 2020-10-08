// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,o,s){void 0===e&&(e=null),void 0===t&&(t={}),this.displayId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),o&&(this.centroid=o),null!=s&&(this.objectId=s)}return Object.defineProperty(e.prototype,"hasGeometry",{get:function(){return!(!this.geometry||!this.geometry.coords||!this.geometry.coords.length)},enumerable:!1,configurable:!0}),e.prototype.weakClone=function(){var t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashIndexed=this.geohashIndexed,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t},e}();t.default=o}));