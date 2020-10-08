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

define(["require","exports","tslib","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,n,a,r,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DragRotate=void 0;var i=function(t){function e(e,n,r){var i=t.call(this,!0)||this;i.view=e,i.pointerAction=n;var p=i.view.mapViewNavigation;return i.dragEventSeparator=new a.DragEventSeparator({start:function(t,e){p.rotate.begin(i.view,e.data),e.stopPropagation()},update:function(t,e){p.rotate.update(i.view,e.data),e.stopPropagation()},end:function(t,e){p.rotate.end(),e.stopPropagation()},condition:function(t,e){return 1===t&&o.eventMatchesPointerAction(e.data,i.pointerAction)}}),i.registerIncoming("drag",r,(function(t){return i.dragEventSeparator.handle(t)})),i}return n.__extends(e,t),e}(r.InputHandler);e.DragRotate=i}));