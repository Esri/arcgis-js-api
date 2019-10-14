// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../geometry","../core/accessorSupport/decorators","./Task","./operations/query","./operations/queryAttachments","./operations/queryRelatedRecords","./support/AttachmentQuery","./support/FeatureSet","./support/Query","./support/RelationshipQuery"],function(e,t,r,o,n,u,s,i,c,p,a,h,d,y,l,f){return function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.source=null,r}return r(t,e),t.prototype.execute=function(e,t){return this.executeJSON(e,t).then(function(e){return y.fromJSON(e)})},t.prototype.executeJSON=function(e,t){return p.executeQuery(this.parsedUrl,this._normalizeQuery(e),u({},this.requestOptions,t)).then(function(e){return e.data})},t.prototype.executeForCount=function(e,t){return p.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),u({},this.requestOptions,t)).then(function(e){return e.data.count})},t.prototype.executeForExtent=function(e,t){return p.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),u({},this.requestOptions,t)).then(function(e){return{count:e.data.count,extent:s.Extent.fromJSON(e.data.extent)}})},t.prototype.executeForIds=function(e,t){return p.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),u({},this.requestOptions,t)).then(function(e){return e.data.objectIds})},t.prototype.executeRelationshipQuery=function(e,t){return e=f.from(e),(this.gdbVersion||this.source)&&(e=e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source})),h.executeRelationshipQuery(this.parsedUrl,e,u({},this.requestOptions,t)).then(function(e){var t=e.data,r={};return Object.keys(t).forEach(function(e){return r[e]=y.fromJSON(t[e])}),r})},t.prototype.executeAttachmentQuery=function(e,t){var r=this;return a.executeAttachmentQuery(this.parsedUrl,d.from(e),u({},this.requestOptions,t)).then(function(e){return a.processAttachmentQueryResult(e.data.attachmentGroups,r.parsedUrl.path)})},t.prototype._normalizeQuery=function(e){var t=l.from(e);return this.gdbVersion||this.source?(t===e?t.clone():t).set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source}):t},o([i.property()],t.prototype,"gdbVersion",void 0),o([i.property()],t.prototype,"source",void 0),t=o([i.subclass("esri.tasks.QueryTask")],t)}(i.declared(c))});