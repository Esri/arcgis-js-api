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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],(function(e,n,t,r){Object.defineProperty(n,"__esModule",{value:!0});var o=function(e){function n(n,t){var r=e.call(this,!0)||this;return r.key=n,r.registerIncoming("key-down",t,(function(e){return r._handleKeyDown(e)})),r}return t(n,e),n.prototype._handleKeyDown=function(e){e.data.key===this.key&&(this.activate(),e.stopPropagation())},n}(r.InputHandler);n.SingleKey=o}));