/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as r}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{ensureType as s}from"../../core/accessorSupport/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{writer as n}from"../../core/accessorSupport/decorators/writer.js";var a;let p=a=class extends e{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new a(r({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};t([o({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),t([o({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),t([o({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),t([o({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),t([o({type:[Number],json:{write:!0}})],p.prototype,"globalIds",void 0),t([o({json:{write:!0}})],p.prototype,"name",void 0),t([o({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),t([o({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),t([o({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),t([o({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),t([o({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),t([n("start"),n("num")],p.prototype,"writeStart",null),t([o({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=t([i("esri.rest.support.AttachmentQuery")],p),p.from=s(p);const c=p;export{c as default};