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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,r,t,o,n,i,p,u){"use strict";var s=function(e){function r(r){var t=e.call(this,r)||this;return t.extendHow="default-curve-extension",t.polylines=null,t.trimExtendTo=null,t}return t.__extends(r,e),t.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"extendHow",void 0),t.__decorate([i.property({type:[o.Polyline],json:{read:{reader:function(e){return e?e.map((function(e){return u.fromJSON(e)})):null}},write:{writer:function(e,r){r.polylines=e.map((function(e){return e.toJSON()}))}}}})],r.prototype,"polylines",void 0),t.__decorate([i.property({json:{read:{reader:function(e){return e?u.fromJSON(e):null}},write:{writer:function(e,r){r.trimExtendTo=e.toJSON()}}}})],r.prototype,"trimExtendTo",void 0),r=t.__decorate([i.subclass("esri.tasks.support.TrimExtendParameters")],r)}(n.JSONSupport);return s.from=p.default(s),s}));