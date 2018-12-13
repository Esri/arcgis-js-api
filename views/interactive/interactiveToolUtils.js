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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function i(t,e){var i=t.view;e&&i.ready&&i.activeTool!==t?(i.activeTool=t,i.focus()):e||i.activeTool!==t||(i.activeTool=null)}function a(t,e){var i=t.activeTool;e!==i&&(i&&i.deactivate&&i.deactivate(),t._set("activeTool",e),e&&e.activate&&e.activate(),t.tools.forEach(function(t){var i=!e||e===t;"enableEditing"in t&&"disableEditing"in t?i?t.enableEditing():t.disableEditing():"editable"in t&&(t.editable=i)}))}function o(t,e){return[t.tools.on("after-add",function(i){t.ready&&n(i.item,e)}),t.tools.on("after-remove",function(t){c(t.item,e)})]}function n(t,e){t.attach&&t.attach(),e&&e()}function c(t,e){t.detach&&t.detach(),e&&e()}Object.defineProperty(e,"__esModule",{value:!0}),e.setActive=i,e.swap=a,e.setupCollectionHandlers=o,e.attachTool=n,e.detachTool=c});