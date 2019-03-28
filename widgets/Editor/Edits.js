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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/HandleOwner","../../core/accessorSupport/decorators"],function(e,t,r,o,i,n,s){return function(e){function t(t){var r=e.call(this,t)||this;return r._baselineJSON=null,r}return r(t,e),Object.defineProperty(t.prototype,"modified",{get:function(){var e=this,t=e._baselineJSON,r=e.feature;return!(!t||!r)&&t!==JSON.stringify(r)},enumerable:!0,configurable:!0}),t.prototype.trackChanges=function(){this.feature&&(this._baselineJSON=JSON.stringify(this.feature))},t.prototype.updateAttributes=function(e){this.feature.attributes=e,this.notifyChange("modified")},t.prototype.updateGeometry=function(e){this.feature.geometry=e,this.notifyChange("modified")},o([s.property()],t.prototype,"feature",void 0),o([s.property()],t.prototype,"modified",null),t=o([s.subclass("esri.widgets.Editor.Edits")],t)}(s.declared(i,n))});