// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/Collection","../../core/maybe"],function(e,t,o,a){function n(e,t){var o=e.view;t&&o.ready&&o.activeTool!==e?(o.activeTool=e,l(o)&&o.focus()):t||o.activeTool!==e||(o.activeTool=null)}function i(e,t,o){var n=e.activeTool;t!==n&&(a.isSome(n)&&n.deactivate&&n.deactivate(),o(t),a.isSome(t)&&t.activate&&t.activate(),e.tools.forEach(function(e){var o=a.isNone(t)||t===e;"enableEditing"in e&&"disableEditing"in e?o?e.enableEditing():e.disableEditing():"editable"in e&&(e.editable=o)}))}function r(e){var t=new o;return t.on("after-add",function(t){var o=t.item;o.view&&o.view.ready&&o.attach&&o.attach(c(e,o))}),t.on("after-remove",function(t){var o=t.item;n(o,!1),o.detach&&o.detach(),e.removeToolManipulators(o)}),t}function c(e,t){return{addManipulator:function(o){return e.addToolManipulator(t,o)},removeManipulator:function(o){return e.removeToolManipulator(t,o)},removeManipulators:function(){return e.removeToolManipulators(t)},attemptManipulatorDragTo:function(o,a){var n={screenPoint:a};return e.attemptManipulatorDragTo(t,o,n)}}}function l(e){return!(!e||!e.focus)}Object.defineProperty(t,"__esModule",{value:!0}),t.setActive=n,t.swap=i,t.newToolCollection=r,t.wrapToolViewManager=c});