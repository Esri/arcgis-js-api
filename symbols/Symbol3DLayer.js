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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(e,t,r,o,n){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.enabled=!0,r.type=null,r}return r.__extends(t,e),t.prototype.writeEnabled=function(e,t,r){e||(t[r]=e)},r.__decorate([n.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],t.prototype,"enabled",void 0),r.__decorate([n.writer("enabled")],t.prototype,"writeEnabled",null),r.__decorate([n.property({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],t.prototype,"type",void 0),t=r.__decorate([n.subclass("esri.symbols.Symbol3DLayer")],t)}(o.JSONSupport)}));