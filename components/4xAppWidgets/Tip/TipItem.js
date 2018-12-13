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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","./TipSource"],function(e,t,r,o,i,p,c){"use strict";return function(e){function t(t){var r=e.call(this)||this;return r.id=null,r.image=null,r.title=null,r}r(t,e),i=t,t.prototype.clone=function(){return new i({content:this.content,id:this.id,image:this.image,source:this.source,title:this.title})};var i;return o([p.property()],t.prototype,"content",void 0),o([p.property()],t.prototype,"id",void 0),o([p.property()],t.prototype,"image",void 0),o([p.property({type:c})],t.prototype,"source",void 0),o([p.property()],t.prototype,"title",void 0),t=i=o([p.subclass("esri.widgets.Tip.TipItem")],t)}(p.declared(i))});