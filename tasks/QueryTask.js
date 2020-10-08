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

define(["require","exports","tslib","../geometry","../core/accessorSupport/decorators","../layers/support/source/DataLayerSource","./Task","./operations/pbfJSONFeatureSet","./operations/query","./operations/queryAttachments","./operations/queryRelatedRecords","./support/AttachmentQuery","./support/FeatureSet","./support/Query","./support/RelationshipQuery"],(function(e,t,r,n,o,a,s,i,u,c,p,d,y,h,_){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.dynamicDataSource=null,r.format="json",r.gdbVersion=null,r.sourceSpatialReference=null,r}return r.__extends(t,e),t.prototype.execute=function(e,t){return this.executeJSON(e,t).then((function(e){return y.fromJSON(e)}))},t.prototype.executeJSON=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var n,o,a;return r.__generator(this,(function(s){switch(s.label){case 0:return n=r.__assign(r.__assign({},this.requestOptions),t),o=this._normalizeQuery(e),"pbf"!==this.format?[3,2]:(a=!o.quantizationParameters,[4,u.executeQueryPBF(this.parsedUrl,o,new i.JSONFeatureSetParserContext({sourceSpatialReference:this.sourceSpatialReference,applyTransform:a}),n)]);case 1:return[2,s.sent().data];case 2:return[4,u.executeQuery(this.parsedUrl,o,this.sourceSpatialReference,n)];case 3:return[2,s.sent().data]}}))}))},t.prototype.executeForCount=function(e,t){return u.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){return e.data.count}))},t.prototype.executeForExtent=function(e,t){return u.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){return{count:e.data.count,extent:n.Extent.fromJSON(e.data.extent)}}))},t.prototype.executeForIds=function(e,t){return u.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){return e.data.objectIds}))},t.prototype.executeRelationshipQuery=function(e,t){return e=_.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),p.executeRelationshipQuery(this.parsedUrl,e,r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){var t=e.data,r={};return Object.keys(t).forEach((function(e){return r[e]=y.fromJSON(t[e])})),r}))},t.prototype.executeRelationshipQueryForCount=function(e,t){return e=_.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),p.executeRelationshipQueryForCount(this.parsedUrl,e,r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){return e.data}))},t.prototype.executeAttachmentQuery=function(e,t){var n=this;return c.executeAttachmentQuery(this.parsedUrl,d.from(e),r.__assign(r.__assign({},this.requestOptions),t)).then((function(e){return c.processAttachmentQueryResult(e.data.attachmentGroups,n.parsedUrl.path)}))},t.prototype._normalizeQuery=function(e){var t=h.from(e);if(!this.gdbVersion&&!this.dynamicDataSource)return t;var r=t===e?t.clone():t;return r.gdbVersion=e.gdbVersion||this.gdbVersion,r.dynamicDataSource=e.dynamicDataSource?a.DataLayerSource.from(e.dynamicDataSource):this.dynamicDataSource,r},r.__decorate([o.property({type:a.DataLayerSource})],t.prototype,"dynamicDataSource",void 0),r.__decorate([o.property()],t.prototype,"format",void 0),r.__decorate([o.property()],t.prototype,"gdbVersion",void 0),r.__decorate([o.property()],t.prototype,"sourceSpatialReference",void 0),t=r.__decorate([o.subclass("esri.tasks.QueryTask")],t)}(s)}));