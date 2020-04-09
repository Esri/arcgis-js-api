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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,r,t,o,n,p,l,i,s){var u=function(e){function r(r){var t=e.call(this,r)||this;return t.calculationType=null,t.geodesic=null,t.lengthUnit=null,t.polylines=null,t}return t(r,e),o([l.property({type:String,json:{write:!0}})],r.prototype,"calculationType",void 0),o([l.property({type:Boolean,json:{write:!0}})],r.prototype,"geodesic",void 0),o([l.property({json:{write:!0}})],r.prototype,"lengthUnit",void 0),o([l.property({type:[n.Polyline],json:{read:{reader:function(e){return e?e.map((function(e){return s.fromJSON(e)})):null}},write:{writer:function(e,r){r.polylines=e.map((function(e){return e.toJSON()}))}}}})],r.prototype,"polylines",void 0),r=o([l.subclass("esri.tasks.support.LengthsParameters")],r)}(l.declared(p.JSONSupport));return u.from=i.default(u),u}));