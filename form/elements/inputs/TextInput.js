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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./Input"],(function(t,e,r,n,o){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.maxLength=null,r.minLength=0,r.type=null,r}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){return new o({maxLength:this.maxLength,minLength:this.minLength,type:this.type})},r.__decorate([n.property({type:Number,json:{write:!0}})],e.prototype,"maxLength",void 0),r.__decorate([n.property({type:Number,json:{default:0,write:!0}})],e.prototype,"minLength",void 0),r.__decorate([n.property()],e.prototype,"type",void 0),e=o=r.__decorate([n.subclass("esri.form.elements.inputs.support.TextInput")],e)}(o)}));