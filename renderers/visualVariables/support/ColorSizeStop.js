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

define(["require","exports","tslib","../../../Color","../../../core/JSONSupport","../../../core/screenUtils","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,r,t,o,l,p,i,s){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.label=null,t.size=null,t.value=null,t}var l;return t.__extends(r,e),l=r,r.prototype.writeValue=function(e,r,t){r[t]=null==e?0:e},r.prototype.clone=function(){return new l({color:this.color,label:this.label,size:this.size,value:this.value})},t.__decorate([i.property({type:o,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t.__decorate([i.property({type:Number,cast:p.toPt,json:{write:!0}})],r.prototype,"size",void 0),t.__decorate([i.property({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"value",void 0),t.__decorate([i.writer("value")],r.prototype,"writeValue",null),r=l=t.__decorate([i.subclass("esri.renderers.visualVariables.support.ColorSizeStop")],r)}(l.JSONSupport)}));