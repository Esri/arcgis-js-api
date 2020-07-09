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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,r,t,o,n,p,i,s){var l=function(e){function r(r){var t=e.call(this,r)||this;return t.calculationType=null,t.geodesic=null,t.lengthUnit=null,t.polylines=null,t}return t.__extends(r,e),t.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"calculationType",void 0),t.__decorate([p.property({type:Boolean,json:{write:!0}})],r.prototype,"geodesic",void 0),t.__decorate([p.property({json:{write:!0}})],r.prototype,"lengthUnit",void 0),t.__decorate([p.property({type:[o.Polyline],json:{read:{reader:function(e){return e?e.map((function(e){return s.fromJSON(e)})):null}},write:{writer:function(e,r){r.polylines=e.map((function(e){return e.toJSON()}))}}}})],r.prototype,"polylines",void 0),r=t.__decorate([p.subclass("esri.tasks.support.LengthsParameters")],r)}(n.JSONSupport);return l.from=i.default(l),l}));