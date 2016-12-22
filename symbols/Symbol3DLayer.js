// COPYRIGHT © 2016 Esri
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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/JSONSupport","./support/Symbol3DMaterial","../core/accessorSupport/decorators"],function(e,t,o,r,n,l,p,a){var i=function(e){function t(t){e.call(this),this.enabled=!0,this.material=null,this.type=null}return o(t,e),t.prototype.writeEnabled=function(e,t){e||(t.enabled=e)},t.prototype.readElevationInfo=function(e){return n.clone(e)},t.prototype.writeElevationInfo=function(e,t){t.elevationInfo=n.clone(e)},r([a.property()],t.prototype,"enabled",void 0),r([a.write("enabled")],t.prototype,"writeEnabled",null),r([a.property()],t.prototype,"elevationInfo",void 0),r([a.read("elevationInfo")],t.prototype,"readElevationInfo",null),r([a.write("elevationInfo")],t.prototype,"writeElevationInfo",null),r([a.property({type:p["default"],json:{writable:!0}})],t.prototype,"material",void 0),r([a.property({type:String,readOnly:!0,json:{readable:!1,writeAlways:!0}})],t.prototype,"type",void 0),t=r([a.subclass("esri.symbols.Symbol3DLayer")],t)}(a.declared(l));return i});