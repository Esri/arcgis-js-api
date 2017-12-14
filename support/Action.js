// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Identifiable","../core/accessorSupport/decorators"],function(e,t,r,o,i,p,s){var a=function(e){function t(t){var r=e.call(this)||this;return r.className="",r.temporary=!1,r.image="",r.id="",r.title="",r.visible=!0,r}return r(t,e),i=t,t.prototype.clone=function(){return new i({className:this.className,image:this.image,id:this.id,title:this.title,visible:this.visible})},o([s.property()],t.prototype,"className",void 0),o([s.property()],t.prototype,"temporary",void 0),o([s.property()],t.prototype,"image",void 0),o([s.property()],t.prototype,"id",void 0),o([s.property()],t.prototype,"title",void 0),o([s.property()],t.prototype,"visible",void 0),t=i=o([s.subclass("esri.support.Action")],t);var i}(s.declared(i,p));return a});