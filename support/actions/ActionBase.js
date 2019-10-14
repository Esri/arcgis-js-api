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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Identifiable","../../core/accessorSupport/decorators"],function(e,t,i,r,o,p,s){return function(e){function t(t){var i=e.call(this)||this;return i.active=!1,i.className=null,i.disabled=!1,i.id=null,i.indicator=!1,i.title=null,i.type=null,i.visible=!0,i}i(t,e),o=t,t.prototype.clone=function(){return new o({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})};var o;return r([s.property()],t.prototype,"active",void 0),r([s.property()],t.prototype,"className",void 0),r([s.property()],t.prototype,"disabled",void 0),r([s.property()],t.prototype,"id",void 0),r([s.property()],t.prototype,"indicator",void 0),r([s.property()],t.prototype,"title",void 0),r([s.property()],t.prototype,"type",void 0),r([s.property()],t.prototype,"visible",void 0),t=o=r([s.subclass("esri.support.actions.ActionBase")],t)}(s.declared(p.IdentifiableMixin(o)))});