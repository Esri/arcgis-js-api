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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/JSONSupport","./support/Symbol3DMaterial","../core/accessorSupport/decorators"],function(e,o,r,t,n,p,l,i){var a=function(e){function o(o){var r=e.call(this)||this;return r.enabled=!0,r.material=null,r.type=null,r}return r(o,e),o.prototype.writeEnabled=function(e,o){e||(o.enabled=e)},o.prototype.readElevationInfo=function(e){return n.clone(e)},o.prototype.writeElevationInfo=function(e,o){o.elevationInfo=n.clone(e)},o}(i.declared(p));return t([i.property()],a.prototype,"enabled",void 0),t([i.writer("enabled")],a.prototype,"writeEnabled",null),t([i.property()],a.prototype,"elevationInfo",void 0),t([i.reader("elevationInfo")],a.prototype,"readElevationInfo",null),t([i.writer("elevationInfo")],a.prototype,"writeElevationInfo",null),t([i.property({type:l["default"],json:{write:!0}})],a.prototype,"material",void 0),t([i.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=t([i.subclass("esri.symbols.Symbol3DLayer")],a)});