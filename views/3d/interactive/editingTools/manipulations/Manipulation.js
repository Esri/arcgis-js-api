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

define(["require","exports","../../Manipulator3D"],(function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Manipulation=void 0;var o=function(){function t(){this._available=!0}return Object.defineProperty(t.prototype,"location",{set:function(t){this.forEachManipulator3D((function(n){return n.location=t}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"elevationAlignedLocation",{set:function(t){this.forEachManipulator3D((function(n){return n.elevationAlignedLocation=t}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"elevationInfo",{set:function(t){this.forEachManipulator3D((function(n){return n.elevationInfo=t}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"available",{get:function(){return this._available},set:function(t){this._available=t,this.forEachManipulator3D((function(n){return n.available=t}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"grabbing",{get:function(){return this.someManipulator((function(t){return t.grabbing}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dragging",{get:function(){return this.someManipulator((function(t){return t.dragging}))},enumerable:!1,configurable:!0}),t.prototype.hasManipulator=function(t){return this.someManipulator((function(n){return n===t}))},t.prototype.someManipulator=function(t){var n=!1;return this.forEachManipulator((function(e){!n&&t(e)&&(n=!0)})),n},t.prototype.forEachManipulator3D=function(t){this.forEachManipulator((function(n,o){n instanceof e.Manipulator3D&&t(n,o)}))},t}();n.Manipulation=o}));