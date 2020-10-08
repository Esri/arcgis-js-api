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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./exifUtils"],(function(e,t,r,o,n,i,p){"use strict";var d={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};return function(e){function t(t){var r=e.call(this,t)||this;return r.contentType=null,r.exifInfo=null,r.id=null,r.globalId=null,r.keywords=null,r.name=null,r.parentGlobalId=null,r.parentObjectId=null,r.size=null,r.url=null,r}var o;return r.__extends(t,e),o=t,Object.defineProperty(t.prototype,"orientationInfo",{get:function(){var e=this.exifInfo,t=p.getExifValue({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return d[t]||null},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new o({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})},r.__decorate([n.property({type:String})],t.prototype,"contentType",void 0),r.__decorate([n.property()],t.prototype,"exifInfo",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["exifInfo"]})],t.prototype,"orientationInfo",null),r.__decorate([n.property({type:i.Integer})],t.prototype,"id",void 0),r.__decorate([n.property({type:String})],t.prototype,"globalId",void 0),r.__decorate([n.property({type:String})],t.prototype,"keywords",void 0),r.__decorate([n.property({type:String})],t.prototype,"name",void 0),r.__decorate([n.property({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),r.__decorate([n.property({json:{read:!1}})],t.prototype,"parentObjectId",void 0),r.__decorate([n.property({type:i.Integer})],t.prototype,"size",void 0),r.__decorate([n.property({json:{read:!1}})],t.prototype,"url",void 0),t=o=r.__decorate([n.subclass("esri.layers.support.AttachmentInfo")],t)}(o.JSONSupport)}));