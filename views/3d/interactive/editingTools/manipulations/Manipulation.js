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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../Manipulator3D"],(function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(){this._available=!0}return Object.defineProperty(n.prototype,"location",{set:function(n){this.forEachManipulator3D((function(t){return t.location=n}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"elevationAlignedLocation",{set:function(n){this.forEachManipulator3D((function(t){return t.elevationAlignedLocation=n}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"elevationInfo",{set:function(n){this.forEachManipulator3D((function(t){return t.elevationInfo=n}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"available",{get:function(){return this._available},set:function(n){this._available=n,this.forEachManipulator3D((function(t){return t.available=n}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"grabbing",{get:function(){return this.someManipulator((function(n){return n.grabbing}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dragging",{get:function(){return this.someManipulator((function(n){return n.dragging}))},enumerable:!0,configurable:!0}),n.prototype.hasManipulator=function(n){return this.someManipulator((function(t){return t===n}))},n.prototype.someManipulator=function(n){var t=!1;return this.forEachManipulator((function(e){!t&&n(e)&&(t=!0)})),t},n.prototype.forEachManipulator3D=function(n){this.forEachManipulator((function(t,o){t instanceof e.Manipulator3D&&n(t,o)}))},n}();t.Manipulation=o}));