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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],function(e,t,r,o,p,n,i){return function(e){function t(t){var r=e.call(this)||this;return r.contentType=null,r.exifInfo=null,r.id=null,r.keywords=null,r.name=null,r.parentObjectId=null,r.size=null,r.url=null,r}r(t,e),p=t,t.prototype.clone=function(){return new p({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,keywords:this.keywords,name:this.name,parentObjectId:this.parentObjectId,size:this.size,url:this.url})};var p;return o([n.property({type:String})],t.prototype,"contentType",void 0),o([n.property()],t.prototype,"exifInfo",void 0),o([n.property({type:i.Integer})],t.prototype,"id",void 0),o([n.property({type:String})],t.prototype,"keywords",void 0),o([n.property({type:String})],t.prototype,"name",void 0),o([n.property({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([n.property({type:i.Integer})],t.prototype,"size",void 0),o([n.property({json:{read:!1}})],t.prototype,"url",void 0),t=p=o([n.subclass("esri.layers.support.AttachmentInfo")],t)}(n.declared(p))});