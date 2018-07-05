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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/accessorSupport/decorators","./support/ElevationInfo","./support/Symbol3DMaterial"],function(e,t,r,o,n,p,i,a,l){var c=p({Icon:"icon",Object:"object",Line:"line",Path:"path",Fill:"fill",Extrude:"extrude",Text:"text"}),y=function(e){function t(t){var r=e.call(this)||this;return r.enabled=!0,r.material=null,r.type=null,r}return r(t,e),t.prototype.writeEnabled=function(e,t,r){e||(t[r]=e)},o([i.property({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],t.prototype,"enabled",void 0),o([i.writer("enabled")],t.prototype,"writeEnabled",null),o([i.property({type:a,json:{read:!1,write:!1}})],t.prototype,"elevationInfo",void 0),o([i.property({type:l.default,json:{write:!0}})],t.prototype,"material",void 0),o([i.property({type:String,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:c.write}}})],t.prototype,"type",void 0),t=o([i.subclass("esri.symbols.Symbol3DLayer")],t)}(i.declared(n));return function(e){e.typeJSONDictionary=c}(y||(y={})),y});