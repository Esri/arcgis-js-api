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

define(["require","exports","tslib","./SingleKey"],(function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SingleKeyResetTilt=void 0;var o=function(e){function t(t,i,n){var o=e.call(this,i,n)||this;return o.view=t,o.key=i,o}return i.__extends(t,e),t.prototype.activate=function(){this.view.goTo({tilt:0}).catch((function(){}))},t}(n.SingleKey);t.SingleKeyResetTilt=o}));