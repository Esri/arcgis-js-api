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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(t,e,r,o,s,n,a){"use strict";var p=function(t){function e(e){var r=t.call(this,e)||this;return r.attachmentTypes=null,r.attachmentsWhere=null,r.keywords=null,r.globalIds=null,r.name=null,r.num=null,r.objectIds=null,r.returnMetadata=!1,r.size=null,r.start=null,r.where=null,r}var o;return r.__extends(e,t),o=e,e.prototype.writeStart=function(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10},e.prototype.clone=function(){return new o(s.clone({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))},r.__decorate([n.property({type:[String],json:{write:!0}})],e.prototype,"attachmentTypes",void 0),r.__decorate([n.property({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],e.prototype,"attachmentsWhere",void 0),r.__decorate([n.property({type:[String],json:{write:!0}})],e.prototype,"keywords",void 0),r.__decorate([n.property({type:[Number],json:{write:!0}})],e.prototype,"globalIds",void 0),r.__decorate([n.property({json:{write:!0}})],e.prototype,"name",void 0),r.__decorate([n.property({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),r.__decorate([n.property({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),r.__decorate([n.property({type:Boolean,json:{default:!1,write:!0}})],e.prototype,"returnMetadata",void 0),r.__decorate([n.property({type:[Number],json:{write:!0}})],e.prototype,"size",void 0),r.__decorate([n.property({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),r.__decorate([n.writer("start"),n.writer("num")],e.prototype,"writeStart",null),r.__decorate([n.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],e.prototype,"where",void 0),e=o=r.__decorate([n.subclass("esri.tasks.support.AttachmentQuery")],e)}(o.JSONSupport);return p.from=a.default(p),p}));