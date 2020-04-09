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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(r,e,t,o,n,p,u,i,s){var l=function(r){function e(e){var t=r.call(this,e)||this;return t.extendHow="default-curve-extension",t.polylines=null,t.trimExtendTo=null,t}return t(e,r),o([u.property({type:String,json:{write:!0}})],e.prototype,"extendHow",void 0),o([u.property({type:[n.Polyline],json:{read:{reader:function(r){return r?r.map((function(r){return s.fromJSON(r)})):null}},write:{writer:function(r,e){e.polylines=r.map((function(r){return r.toJSON()}))}}}})],e.prototype,"polylines",void 0),o([u.property({json:{read:{reader:function(r){return r?s.fromJSON(r):null}},write:{writer:function(r,e){e.trimExtendTo=r.toJSON()}}}})],e.prototype,"trimExtendTo",void 0),e=o([u.subclass("esri.tasks.support.TrimExtendParameters")],e)}(u.declared(p.JSONSupport));return l.from=i.default(l),l}));