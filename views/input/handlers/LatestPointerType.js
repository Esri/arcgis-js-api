// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../InputHandler"],function(e,t,n,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t){var n=e.call(this,!0)||this;return n._onChange=t,n._value="mouse",n.registerIncoming("pointer-down",function(e){var t="touch"===e.data.native.pointerType;n._setValue(t?"touch":"mouse")}),n._moveHandler=n.registerIncoming("pointer-move",function(e){var t="touch"===e.data.native.pointerType;n._setValue(t?"touch":"mouse")}),n._moveHandler.pause(),n}return n(t,e),t.prototype._setValue=function(e){e!==this._value&&("touch"===e?this._moveHandler.resume():this._moveHandler.pause(),this._value=e,this._onChange(e))},t}(o.InputHandler);t.LatestPointerType=r});