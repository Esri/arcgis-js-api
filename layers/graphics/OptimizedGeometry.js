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

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r){void 0===t&&(t=[]),void 0===e&&(e=[]),void 0===r&&(r=!1),this.lengths=t,this.coords=e,this.hasIndeterminateRingOrder=r}return Object.defineProperty(t.prototype,"isPoint",{get:function(){return 0===this.lengths.length},enumerable:!1,configurable:!0}),t.prototype.forEachVertex=function(t){var e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(var r=0;r<this.lengths.length;r++){for(var n=this.lengths[r],i=0;i<n;i++){t(this.coords[2*(i+e)],this.coords[2*(i+e)+1])}e+=n}},t.prototype.clone=function(){return new t(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)},t}();e.default=r}));