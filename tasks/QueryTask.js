// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../geometry","../core/accessorSupport/decorators","./Task","./operations/query","./operations/queryAttachments","./operations/queryRelatedRecords","./support/AttachmentQuery","./support/FeatureSet","./support/Query","./support/RelationshipQuery"],function(e,t,r,o,u,n,s,c,i,p,a,h,l,y,d,x){return function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.source=null,r}return r(t,e),t.prototype.execute=function(e,t){return this.executeJSON(e,t).then(function(e){return y.fromJSON(e)})},t.prototype.executeJSON=function(e,t){return p.executeQuery(this.parsedUrl,this._normalizeQuery(e),n({},this.requestOptions,t)).then(function(e){return e.data})},t.prototype.executeForCount=function(e,t){return p.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),n({},this.requestOptions,t)).then(function(e){return e.data.count})},t.prototype.executeForExtent=function(e,t){return p.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),n({},this.requestOptions,t)).then(function(e){return{count:e.data.count,extent:s.Extent.fromJSON(e.data.extent)}})},t.prototype.executeForIds=function(e,t){return p.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),n({},this.requestOptions,t)).then(function(e){return e.data.objectIds})},t.prototype.executeRelationshipQuery=function(e,t){return(this.gdbVersion||this.source)&&(e=e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source})),h.executeRelationshipQuery(this.parsedUrl,e,n({},this.requestOptions,t)).then(function(e){var t=e.data,r={};return Object.keys(t).forEach(function(e){return r[e]=y.fromJSON(t[e])}),r})},t.prototype.executeAttachmentQuery=function(e,t){var r=this,o=t&&t.query&&t.query.token;return a.executeAttachmentQuery(this.parsedUrl,e,n({},this.requestOptions,t)).then(function(e){return a.processAttachmentQueryResult(e.data.attachmentGroups,r.parsedUrl.path,o)})},t.prototype._normalizeQuery=function(e){return this.gdbVersion||this.source?e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source}):e},o([c.property()],t.prototype,"gdbVersion",void 0),o([c.property()],t.prototype,"source",void 0),o([u(0,c.cast(d))],t.prototype,"execute",null),o([u(0,c.cast(d))],t.prototype,"executeJSON",null),o([u(0,c.cast(d))],t.prototype,"executeForCount",null),o([u(0,c.cast(d))],t.prototype,"executeForExtent",null),o([u(0,c.cast(d))],t.prototype,"executeForIds",null),o([u(0,c.cast(x))],t.prototype,"executeRelationshipQuery",null),o([u(0,c.cast(l))],t.prototype,"executeAttachmentQuery",null),t=o([c.subclass("esri.tasks.QueryTask")],t)}(c.declared(i))});