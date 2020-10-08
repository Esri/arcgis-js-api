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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./Element","./support/inputs","../../layers/support/domains"],(function(e,t,r,i,o,p,n){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.domain=null,r.editable=!0,r.fieldName=null,r.hint=null,r.input=null,r.requiredExpression=null,r.type="field",r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({description:this.description,domain:this.domain,editable:this.editable,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,visibilityExpression:this.visibilityExpression})},r.__decorate([i.property({types:n.types,json:{read:{reader:n.fromJSON},write:!0}})],t.prototype,"domain",void 0),r.__decorate([i.property({type:Boolean,json:{default:!0,write:!0}})],t.prototype,"editable",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"fieldName",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"hint",void 0),r.__decorate([i.property({types:p.types,json:{read:{source:"inputType"},write:{target:"inputType"}}})],t.prototype,"input",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"requiredExpression",void 0),r.__decorate([i.property({type:String,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=o=r.__decorate([i.subclass("esri.form.elements.FieldElement")],t)}(o.Element)}));