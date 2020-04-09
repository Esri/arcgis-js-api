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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(r,e,t,o,n,p,i,u){var s=function(r){function e(e){var t=r.call(this,e)||this;return t.geometries1=null,t.geometries2=null,t.relation=null,t.relationParameter=null,t}return t(e,r),o([p.property({json:{read:{reader:function(r){return r?r.map((function(r){return u.fromJSON(r)})):null}},write:{writer:function(r,e){e.geometries1=r.map((function(r){return r.toJSON()}))}}}})],e.prototype,"geometries1",void 0),o([p.property({json:{read:{reader:function(r){return r?r.map((function(r){return u.fromJSON(r)})):null}},write:{writer:function(r,e){e.geometries2=r.map((function(r){return r.toJSON()}))}}}})],e.prototype,"geometries2",void 0),o([p.property({type:String,json:{write:!0}})],e.prototype,"relation",void 0),o([p.property({type:String,json:{write:!0}})],e.prototype,"relationParameter",void 0),e=o([p.subclass("esri.tasks.support.RelationParameters")],e)}(p.declared(n.JSONSupport));return s.from=i.default(s),s}));