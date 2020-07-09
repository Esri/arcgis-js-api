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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,r,t,o,n,i,p){var s=function(e){function r(r){var t=e.call(this,r)||this;return t.deviationUnit=null,t.geometries=null,t.maxDeviation=null,t}return t.__extends(r,e),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"deviationUnit",void 0),t.__decorate([n.property({json:{read:{reader:function(e){return e?e.map((function(e){return p.fromJSON(e)})):null}},write:{writer:function(e,r){r.geometries=e.map((function(e){return e.toJSON()}))}}}})],r.prototype,"geometries",void 0),t.__decorate([n.property({type:Number,json:{write:!0}})],r.prototype,"maxDeviation",void 0),r=t.__decorate([n.subclass("esri.tasks.support.GeneralizeParameters")],r)}(o.JSONSupport);return s.from=i.default(s),s}));