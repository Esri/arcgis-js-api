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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,t,r,o,n,p,s){var i=function(e){function t(t){var r=e.call(this,t)||this;return r.bevelRatio=null,r.geometries=null,r.offsetDistance=null,r.offsetHow=null,r.offsetUnit=null,r}return r.__extends(t,e),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"bevelRatio",void 0),r.__decorate([n.property({json:{read:{reader:function(e){return e?e.map((function(e){return s.fromJSON(e)})):null}},write:{writer:function(e,t){t.geometries=e.map((function(e){return e.toJSON()}))}}}})],t.prototype,"geometries",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],t.prototype,"offsetDistance",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"offsetHow",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"offsetUnit",void 0),t=r.__decorate([n.subclass("esri.tasks.support.OffsetParameters")],t)}(o.JSONSupport);return i.from=p.default(i),i}));