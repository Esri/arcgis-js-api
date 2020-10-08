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

define(["require","exports"],(function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var h=function(){function t(t,i,h,e){void 0===t&&(t=0),void 0===i&&(i=0),void 0===h&&(h=0),void 0===e&&(e=0),this.x=t,this.y=i,this.width=h,this.height=e}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this.width<=0||this.height<=0},enumerable:!1,configurable:!0}),t.prototype.union=function(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)},t}();i.default=h}));