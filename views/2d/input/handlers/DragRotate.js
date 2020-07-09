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

define(["require","exports","tslib","../../../input/DragEventSeparator","../../../input/InputHandler","../../../input/handlers/support"],(function(t,n,e,a,r,o){Object.defineProperty(n,"__esModule",{value:!0});var i=function(t){function n(n,e,r){var i=t.call(this,!0)||this;i.view=n,i.pointerAction=e;var p=i.view.mapViewNavigation;return i.dragEventSeparator=new a.DragEventSeparator({start:function(t,n){p.rotate.begin(i.view,n.data),n.stopPropagation()},update:function(t,n){p.rotate.update(i.view,n.data),n.stopPropagation()},end:function(t,n){p.rotate.end(),n.stopPropagation()},condition:function(t,n){return 1===t&&o.eventMatchesPointerAction(n.data,i.pointerAction)}}),i.registerIncoming("drag",r,(function(t){return i.dragEventSeparator.handle(t)})),i}return e.__extends(n,t),n}(r.InputHandler);n.DragRotate=i}));