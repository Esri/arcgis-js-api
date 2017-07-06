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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../navigation/NavigationConstants"],function(t,e,n,i,a){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,n){void 0===n&&(n=!1);var i=t.call(this,"esri.views.3d.input.handlers.TwoFingerTilt",!0)||this;return i.view=e,i._invert=n,i.registerIncoming("vertical-two-finger-drag",function(t){return i._handleTwoFinger(t)}),i}return n(e,t),e.prototype._handleTwoFinger=function(t){var e=this.view,n=this._invert?-1:1,i=[0,-t.data.delta*n];switch(t.data.action){case"begin":e.navigation.rotate.begin(i,a.Rotate.PivotPoint.POI);break;case"update":e.navigation.rotate.update(i,a.Rotate.PivotPoint.POI);break;case"end":e.navigation.rotate.end(i)}},e}(i.InputHandler);e.TwoFingerTilt=r});