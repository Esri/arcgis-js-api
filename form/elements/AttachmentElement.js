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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./Element","./inputs/AttachmentInput"],(function(t,e,r,i,o,n){"use strict";return function(t){function e(e){var r=t.call(this,e)||this;return r.attachmentKeyword=null,r.editable=!0,r.input=null,r.type="attachment",r}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){return new o({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})},r.__decorate([i.property({type:String,json:{write:!0}})],e.prototype,"attachmentKeyword",void 0),r.__decorate([i.property({type:Boolean,json:{default:!0,write:!0}})],e.prototype,"editable",void 0),r.__decorate([i.property({type:n,json:{read:{source:"inputType"},write:{target:"inputType"}}})],e.prototype,"input",void 0),r.__decorate([i.property({type:["attachment"],json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=o=r.__decorate([i.subclass("esri.form.elements.AttachmentElement")],e)}(o.Element)}));