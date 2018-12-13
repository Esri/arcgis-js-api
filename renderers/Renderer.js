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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/accessorSupport/decorators","./support/AuthoringInfo"],function(e,r,t,o,n,p,i,s){var u=p({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap"},{ignoreUnknown:!0});return function(e){function r(r){var t=e.call(this,r)||this;return t.authoringInfo=null,t.type=null,t}return t(r,e),r.prototype.getSymbol=function(e,r){},r.prototype.getSymbols=function(){return[]},o([i.property({type:s,json:{write:!0}})],r.prototype,"authoringInfo",void 0),o([i.property({type:u.apiValues,readOnly:!0,json:{type:u.jsonValues,read:!1,write:{writer:u.write,ignoreOrigin:!0}}})],r.prototype,"type",void 0),r=o([i.subclass("esri.renderers.Renderer")],r)}(i.declared(n))});