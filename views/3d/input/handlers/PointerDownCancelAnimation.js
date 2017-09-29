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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(n,e,t,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(n){function e(e,t){var i=n.call(this,"esri.views.3d.input.handlers.PointerDownCancelAnimation",!0)||this;return i.view=e,i.registerIncoming("pointer-down",t,function(n){return i._handlePointerDown(n)}),i}return t(e,n),e.prototype._handlePointerDown=function(n){this.view.navigation.stop()},e}(i.InputHandler);e.PointerDownCancelAnimation=r});