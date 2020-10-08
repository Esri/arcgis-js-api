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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","../Field","./JoinTableDataSource","./QueryTableDataSource","./RasterDataSource","./TableDataSource"],(function(e,r,a,t,o,u,c,s,p,i,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.DataLayerSource=void 0;var n={key:"type",base:null,typeMap:{"join-table":s.JoinTableDataSource,"query-table":p.QueryTableDataSource,raster:i.RasterDataSource,table:l.TableDataSource}},y=function(e){function r(r){var a=e.call(this,r)||this;return a.type="data-layer",a}var t;return a.__extends(r,e),t=r,r.prototype.clone=function(){var e=this.fields,r=this.dataSource;return new t({fields:e,dataSource:r})},a.__decorate([o.enumeration({dataLayer:"data-layer"})],r.prototype,"type",void 0),a.__decorate([o.property({type:[c],json:{write:!0}})],r.prototype,"fields",void 0),a.__decorate([o.property({types:n,json:{write:!0}})],r.prototype,"dataSource",void 0),r=t=a.__decorate([o.subclass("esri.layers.support.source.DataLayerSource")],r)}(t.JSONSupport);r.DataLayerSource=y,y.from=u.default(y)}));