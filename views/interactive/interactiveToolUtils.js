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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/Collection","../../core/maybe","../DOMContainer"],function(e,t,o,a,i,n){function r(e,t){var o=e.view;o&&(t&&o.ready&&o.activeTool!==e?(o.activeTool=e,n.isDOMContainer(o)&&o.focus()):t||o.activeTool!==e||(o.activeTool=null))}function c(e,t,o){var a=e.activeTool;t!==a&&(i.isSome(a)&&a.deactivate&&a.deactivate(),o(t),i.isSome(t)&&t.activate&&t.activate())}function l(){var e=new a;return e.on("after-add",function(e){var t=e.item;t.view&&t.view.ready&&t.attach()}),e.on("after-remove",function(e){var t=e.item;r(t,!1),t.destroyed||t.detach()}),e}function u(e){return!1!==e.visible&&!1!==e.editable&&(null==e.hasEditableFlag||e.hasEditableFlag(1))}function v(e){return i.isNone(e)?{}:"function"==typeof e?e():e}Object.defineProperty(t,"__esModule",{value:!0}),t.setActive=r,t.swap=c,t.newToolCollection=l,t.areToolManipulatorsEditable=u,t.evaluateToolConstructorArguments=v});