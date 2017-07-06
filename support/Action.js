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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/Identifiable","../core/accessorSupport/decorators"],function(e,t,r,o,i,p,s){var a=c=function(e){function t(t){var r=e.call(this)||this;return r.className="",r.temporary=!1,r.image="",r.id="",r.title="",r.visible=!0,r}return r(t,e),t.prototype.clone=function(){return new c({className:this.className,image:this.image,id:this.id,title:this.title,visible:this.visible})},t}(s.declared(i,p));o([s.property()],a.prototype,"className",void 0),o([s.property()],a.prototype,"temporary",void 0),o([s.property()],a.prototype,"image",void 0),o([s.property()],a.prototype,"id",void 0),o([s.property()],a.prototype,"title",void 0),o([s.property()],a.prototype,"visible",void 0),a=c=o([s.subclass("esri.support.Action")],a);var c;return a});