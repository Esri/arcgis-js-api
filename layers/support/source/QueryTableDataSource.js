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

define(["require","exports","tslib","../../../geometry","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],(function(e,r,t,o,p,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.QueryTableDataSource=void 0;var i=function(e){function r(r){var t=e.call(this,r)||this;return t.type="query-table",t}var p;return t.__extends(r,e),p=r,r.prototype.clone=function(){var e,r=this,t=r.workspaceId,o=r.query,a=r.oidFields,i=r.spatialReference,y=r.geometryType,n={workspaceId:t,query:o,oidFields:a,spatialReference:null!==(e=null==i?void 0:i.clone())&&void 0!==e?e:void 0,geometryType:y};return new p(n)},t.__decorate([a.enumeration({queryTable:"query-table"})],r.prototype,"type",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"workspaceId",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"query",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"oidFields",void 0),t.__decorate([a.property({type:o.SpatialReference,json:{write:!0}})],r.prototype,"spatialReference",void 0),t.__decorate([a.enumeration(o.featureGeometryTypeKebabDictionary)],r.prototype,"geometryType",void 0),r=p=t.__decorate([a.subclass("esri.layers.support.source.QueryTableDataSource")],r)}(p.JSONSupport);r.QueryTableDataSource=i}));