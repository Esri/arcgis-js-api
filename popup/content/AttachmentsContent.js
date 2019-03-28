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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","../../layers/support/AttachmentInfo","./Content"],function(t,e,r,n,o,p,a,s){return function(t){function e(e){var r=t.call(this)||this;return r.attachmentInfos=null,r.displayType=null,r.type="attachments",r}r(e,t),s=e,e.prototype.clone=function(){return new s({displayType:this.displayType,attachmentInfos:this.attachmentInfos?o.clone(this.attachmentInfos):null})};var s;return n([p.property({type:[a]})],e.prototype,"attachmentInfos",void 0),n([p.property({type:String,json:{write:!0}})],e.prototype,"displayType",void 0),n([p.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=s=n([p.subclass("esri.popup.content.AttachmentsContent")],e)}(p.declared(s))});