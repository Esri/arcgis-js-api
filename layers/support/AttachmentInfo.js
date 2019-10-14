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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./exifUtils"],function(e,r,t,o,n,i,p,d){var a={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};return function(e){function r(r){var t=e.call(this)||this;return t.contentType=null,t.exifInfo=null,t.id=null,t.keywords=null,t.name=null,t.parentObjectId=null,t.size=null,t.url=null,t}t(r,e),n=r,Object.defineProperty(r.prototype,"orientationInfo",{get:function(){var e=this.exifInfo,r=d.getExifValue({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:e});return a[r]||null},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new n({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,keywords:this.keywords,name:this.name,parentObjectId:this.parentObjectId,size:this.size,url:this.url})};var n;return o([i.property({type:String})],r.prototype,"contentType",void 0),o([i.property()],r.prototype,"exifInfo",void 0),o([i.property({readOnly:!0,dependsOn:["exifInfo"]})],r.prototype,"orientationInfo",null),o([i.property({type:p.Integer})],r.prototype,"id",void 0),o([i.property({type:String})],r.prototype,"keywords",void 0),o([i.property({type:String})],r.prototype,"name",void 0),o([i.property({json:{read:!1}})],r.prototype,"parentObjectId",void 0),o([i.property({type:p.Integer})],r.prototype,"size",void 0),o([i.property({json:{read:!1}})],r.prototype,"url",void 0),r=n=o([i.subclass("esri.layers.support.AttachmentInfo")],r)}(i.declared(n.JSONSupport))});