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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","./support/Symbol3DMaterial","./support/ElevationInfo","../core/accessorSupport/decorators"],function(e,t,r,o,p,n,i,l,a){var c=n({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text"}),d=function(e){function t(t){var r=e.call(this)||this;return r.enabled=!0,r.material=null,r.type=null,r}return r(t,e),t.prototype.writeEnabled=function(e,t){e||(t.enabled=e)},o([a.property()],t.prototype,"enabled",void 0),o([a.writer("enabled")],t.prototype,"writeEnabled",null),o([a.property({type:l,json:{read:!1,write:!1}})],t.prototype,"elevationInfo",void 0),o([a.property({type:i["default"],json:{write:!0}})],t.prototype,"material",void 0),o([a.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:c.write}}})],t.prototype,"type",void 0),t=o([a.subclass("esri.symbols.Symbol3DLayer")],t)}(a.declared(p));return function(e){e.typeJSONDictionary=c}(d||(d={})),d});