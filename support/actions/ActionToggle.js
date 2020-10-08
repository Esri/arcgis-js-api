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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./ActionBase"],(function(e,t,i,r,s){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i.image=null,i.type="toggle",i.value=!1,i}var s;return i.__extends(t,e),s=t,t.prototype.clone=function(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})},i.__decorate([r.property()],t.prototype,"image",void 0),i.__decorate([r.property()],t.prototype,"value",void 0),t=s=i.__decorate([r.subclass("esri.support.Action.ActionToggle")],t)}(s)}));