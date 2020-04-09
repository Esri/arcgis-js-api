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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./Content"],(function(e,t,r,p,o,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.displayType=null,r.type="attachments",r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n({displayType:this.displayType})},p([o.property({type:["preview","list"],json:{write:!0}})],t.prototype,"displayType",void 0),p([o.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=n=p([o.subclass("esri.popup.content.AttachmentsContent")],t)}(o.declared(n))}));