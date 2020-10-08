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

define(["require","exports","tslib","../../../input/InputHandler"],(function(n,e,t,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PointerDownCancelAnimation=void 0;var r=function(n){function e(e,t){var i=n.call(this,!0)||this;return i.view=e,i.registerIncoming("pointer-down",t,(function(){return i.view.state.stopActiveCameraController()})),i}return t.__extends(e,n),e}(i.InputHandler);e.PointerDownCancelAnimation=r}));