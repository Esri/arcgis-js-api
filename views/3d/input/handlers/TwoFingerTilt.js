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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../navigation/NavigationConstants"],function(t,n,e,i,a){var r=function(t){function n(n,e){void 0===e&&(e=!1);var i=t.call(this,"esri.views.3d.input.handlers.TwoFingerTilt",!0)||this;return i.view=n,i._invert=e,i.registerIncoming("vertical-two-finger-drag",function(t){return i._handleTwoFinger(t)}),i}return e(n,t),n.prototype._handleTwoFinger=function(t){var n=this.view,e=this._invert?-1:1,i=[0,-t.data.delta*e];switch(t.data.action){case"begin":n.navigation.rotate.begin(i,a.Rotate.PivotPoint.POI);break;case"update":n.navigation.rotate.update(i,a.Rotate.PivotPoint.POI);break;case"end":n.navigation.rotate.end(i)}},n}(i.InputHandler);n.TwoFingerTilt=r});