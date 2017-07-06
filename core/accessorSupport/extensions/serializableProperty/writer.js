// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","./type"],function(t,e,n,r){function i(t,e,n,i){i.write&&!i.write.writer&&i.write.enabled!==!1&&(e||r.isCollection(t)?i.write.writer=f:i.write.writer=o)}function o(t,e,r,i){n.setObject(r,u(t,i),e)}function u(t,e){return t&&"function"==typeof t.write?t.write({},e):t&&"function"==typeof t.toJSON?t.toJSON():t}function f(t,e,r,i){var o;null===t?o=null:t&&"function"==typeof t.map?(o=t.map(function(t){return u(t,i)}),"function"==typeof o.toArray&&(o=o.toArray())):o=[u(t,i)],n.setObject(r,o,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.create=i});