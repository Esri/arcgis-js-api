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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","./projectScreenToMap","../../../interactive/dragUtils/dragActions","../../../interactive/dragUtils/dragHandlers","../../../interactive/dragUtils/screenDragToMap"],(function(e,r,a,t,n,c,i){function o(e,r,a,t){void 0===t&&(t=e.spatialReference);var n=p(e,t);return c.createManipulatorDragHandler(r,(function(){return n}),a)}function p(e,r){return i.createXYConstrainedFromProject(t.createForView(e),r)}Object.defineProperty(r,"__esModule",{value:!0}),r.createManipulatorDragHandler2D=o,r.createGraphicManipulatorDragHandler2D=function(e,r,t){var c=n.createGraphicDragAction(r.graphic);return o(e,r,(function(e){c(e),t&&t()}),a.expect(r.graphic.geometry).spatialReference)},r.createScreenDragToMap2D=p}));