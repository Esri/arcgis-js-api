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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,n,t,r){var i=function(e){function n(n,t,r){var i=e.call(this,n,!0)||this;return i.key=t,i.registerIncoming("key-down",r,function(e){return i._handleKeyDown(e)}),i}return t(n,e),n.prototype._handleKeyDown=function(e){var n=e.data;n.key===this.key&&(this.activate(),e.stopPropagation())},n}(r.InputHandler);n.SingleKey=i});