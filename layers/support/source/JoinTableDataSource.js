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

define(["require","exports","tslib","../../../core/jsonMap","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/extensions/serializableProperty/reader","./DataLayerSource","./MapLayerSource"],(function(e,r,t,o,a,n,l,c,u,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.JoinTableDataSource=void 0;var p=o.strict()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"}),y=function(e){function r(r){var t=e.call(this,r)||this;return t.type="join-table",t}var o;return t.__extends(r,e),o=r,r.prototype.readLeftTableSource=function(e,r,t){return d()(e,r,t)},r.prototype.castLeftTableSource=function(e){return l.ensureOneOfType(T(),e)},r.prototype.readRightTableSource=function(e,r,t){return d()(e,r,t)},r.prototype.castRightTableSource=function(e){return l.ensureOneOfType(T(),e)},r.prototype.clone=function(){var e,r,t=this,a=t.leftTableKey,n=t.rightTableKey,l=t.leftTableSource,c=t.rightTableSource,u=t.joinType,i={leftTableKey:a,rightTableKey:n,leftTableSource:null!==(e=null==l?void 0:l.clone())&&void 0!==e?e:void 0,rightTableSource:null!==(r=null==c?void 0:c.clone())&&void 0!==r?r:void 0,joinType:u};return new o(i)},t.__decorate([n.enumeration({joinTable:"join-table"})],r.prototype,"type",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"leftTableKey",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"rightTableKey",void 0),t.__decorate([n.property({json:{write:!0}})],r.prototype,"leftTableSource",void 0),t.__decorate([n.reader("leftTableSource")],r.prototype,"readLeftTableSource",null),t.__decorate([n.cast("leftTableSource")],r.prototype,"castLeftTableSource",null),t.__decorate([n.property({json:{write:!0}})],r.prototype,"rightTableSource",void 0),t.__decorate([n.reader("rightTableSource")],r.prototype,"readRightTableSource",null),t.__decorate([n.cast("rightTableSource")],r.prototype,"castRightTableSource",null),t.__decorate([n.enumeration(p)],r.prototype,"joinType",void 0),r=o=t.__decorate([n.subclass("esri.layers.support.source.JoinTableDataSource")],r)}(a.JSONSupport);r.JoinTableDataSource=y;var s=null;function d(){return s||(s=c.createTypeReader({types:T()})),s}var b=null;function T(){return b||(b={key:"type",base:null,typeMap:{"data-layer":u.DataLayerSource,"map-layer":i.MapLayerSource}}),b}}));