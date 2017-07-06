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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary"],function(e,r,t,o,p,n,c){var i=c({codedValue:"coded-value"}),u=function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.type=null,t}return t(r,e),r.prototype.writeType=function(e,r){r.type=i.toJSON(e)},r}(p.declared(n));return o([p.property({json:{write:!0}})],u.prototype,"name",void 0),o([p.property({json:{read:i.fromJSON,write:!0}})],u.prototype,"type",void 0),o([p.writer("type")],u.prototype,"writeType",null),u=o([p.subclass("esri.layers.support.Domain")],u)});