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

define(["require","exports","tslib","../core/Logger","../core/accessorSupport/decorators","./actions/ActionButton"],(function(t,r,o,e,s,n){var i=e.getLogger("esri.support.Action");return function(t){function r(r){var o=t.call(this,r)||this;return i.warn("DEPRECATED: 'esri/support/Action' -- use 'esri/support/actions/ActionButton' instead."),o}return o.__extends(r,t),r=o.__decorate([s.subclass("esri.support.Action")],r)}(n)}));