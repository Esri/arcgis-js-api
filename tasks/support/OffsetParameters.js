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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,r,t,o,p,n,s,i){var u=function(e){function r(r){var t=e.call(this,r)||this;return t.bevelRatio=null,t.geometries=null,t.offsetDistance=null,t.offsetHow=null,t.offsetUnit=null,t}return t(r,e),o([n.property({type:Number,json:{write:!0}})],r.prototype,"bevelRatio",void 0),o([n.property({json:{read:{reader:function(e){return e?e.map((function(e){return i.fromJSON(e)})):null}},write:{writer:function(e,r){r.geometries=e.map((function(e){return e.toJSON()}))}}}})],r.prototype,"geometries",void 0),o([n.property({type:Number,json:{write:!0}})],r.prototype,"offsetDistance",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"offsetHow",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"offsetUnit",void 0),r=o([n.subclass("esri.tasks.support.OffsetParameters")],r)}(n.declared(p.JSONSupport));return u.from=s.default(u),u}));