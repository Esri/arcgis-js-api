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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/jsonMap","../core/JSONSupport","../core/accessorSupport/decorators","./support/ElevationInfo"],function(e,r,t,o,n,p,i,a){var l=n.strict()({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text",Water:"water"}),c=function(e){function r(r){var t=e.call(this)||this;return t.enabled=!0,t.type=null,t}return t(r,e),r.prototype.writeEnabled=function(e,r,t){e||(r[t]=e)},o([i.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],r.prototype,"enabled",void 0),o([i.writer("enabled")],r.prototype,"writeEnabled",null),o([i.property({type:a,json:{read:!1,write:!1}})],r.prototype,"elevationInfo",void 0),o([i.property({type:l.apiValues,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:l.write}}})],r.prototype,"type",void 0),r=o([i.subclass("esri.symbols.Symbol3DLayer")],r)}(i.declared(p));return function(e){e.typeJSONDictionary=l}(c||(c={})),c});