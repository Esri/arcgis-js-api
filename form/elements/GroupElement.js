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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/writer","./Element","../support/elements"],(function(e,t,r,o,n,s,i,p,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.elements=null,r.initialState="expanded",r.type="group",r}var p;return r.__extends(t,e),p=t,t.prototype.castElements=function(e){return l.ensureType(e,!1)},t.prototype.readElements=function(e,t){return l.fromJSON(t.formElements,!1)},t.prototype.writeElements=function(e,t){t.formElements=l.toJSON(e,!1)},t.prototype.clone=function(){return new p({description:this.description,elements:o.clone(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})},r.__decorate([n.property({json:{write:!0}})],t.prototype,"elements",void 0),r.__decorate([s.cast("elements")],t.prototype,"castElements",null),r.__decorate([n.reader("elements",["formElements"])],t.prototype,"readElements",null),r.__decorate([i.writer("elements")],t.prototype,"writeElements",null),r.__decorate([n.property({type:["collapsed","expanded"],json:{default:"expanded",write:!0}})],t.prototype,"initialState",void 0),r.__decorate([n.property({type:String,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=p=r.__decorate([n.subclass("esri.form.elements.GroupElement")],t)}(p.Element)}));