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

define(["require","exports","../../core/Collection","../../core/maybe","../DOMContainer"],(function(e,t,o,a,i){"use strict";function n(e,t){var o=e.view;o&&(t&&o.ready&&o.activeTool!==e?(o.activeTool=e,i.isDOMContainer(o)&&o.focus()):t||o.activeTool!==e||(o.activeTool=null))}Object.defineProperty(t,"__esModule",{value:!0}),t.evaluateToolConstructorArguments=t.areToolManipulatorsEditable=t.newToolCollection=t.swap=t.setActive=void 0,t.setActive=n,t.swap=function(e,t,o){var i=e.activeTool;t!==i&&(a.isSome(i)&&i.deactivate&&i.deactivate(),o(t),a.isSome(t)&&t.activate&&t.activate())},t.newToolCollection=function(){var e=new o;return e.on("after-add",(function(e){var t=e.item;t.view&&t.view.ready&&t.attach()})),e.on("after-remove",(function(e){var t=e.item;n(t,!1),t.destroyed||t.detach()})),e},t.areToolManipulatorsEditable=function(e){return!1!==e.visible&&!1!==e.editable&&(null==e.hasEditableFlag||e.hasEditableFlag(1))},t.evaluateToolConstructorArguments=function(e){return a.isNone(e)?{}:"function"==typeof e?e():e}}));