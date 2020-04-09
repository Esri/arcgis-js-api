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

define(["require","exports","../../../core/handleUtils","../../../core/maybe"],(function(n,e,r,a){function t(n,e,r){var t=null;return n.events.on("drag",(function(u){if("start"===u.action&&(t=e(n,u)),!a.isNone(t)){var o=t(u);a.isSome(o)&&r(o),"end"===u.action&&(t=null)}}))}function u(n,e,a){for(var u=[],o=0,l=n;o<l.length;o++){var i=l[o];u.push(t(i,e,a))}return r.handlesGroup(u)}Object.defineProperty(e,"__esModule",{value:!0}),e.createManipulatorDragHandler=t,e.createManipulatorDragHandlerOneOf=function(n,e,r){var t=null;return u(n,(function(n,r){return a.isSome(t)?null:t=e(n,r)}),(function(n){return"end"===n.action&&(t=null),r(n)}))},e.createManipulatorDragHandlerMany=u}));