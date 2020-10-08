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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./ActionBase"],(function(t,i,e,s,r){"use strict";return function(t){function i(i){var e=t.call(this,i)||this;return e.image=null,e.type="button",e}var r;return e.__extends(i,t),r=i,i.prototype.clone=function(){return new r({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})},e.__decorate([s.property()],i.prototype,"image",void 0),i=r=e.__decorate([s.subclass("esri.support.Action.ActionButton")],i)}(r)}));