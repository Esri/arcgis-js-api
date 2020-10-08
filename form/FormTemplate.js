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

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../core/accessorSupport/decorators/reader","./ExpressionInfo","./elements/GroupElement","./support/elements"],(function(e,t,r,o,n,s,p,i,l,c){"use strict";var u=c.buildTypeMaps(l);return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.elements=null,r.expressionInfos=null,r.title=null,r}var o;return r.__extends(t,e),o=t,t.prototype.castElements=function(e){return c.ensureType(e,u)},t.prototype.readElements=function(e,t){return c.fromJSON(t.formElements,u)},t.prototype.writeElements=function(e,t){t.formElements=c.toJSON(e,u)},t.prototype.clone=function(){return new o({description:this.description,expressionInfos:n.clone(this.expressionInfos),elements:n.clone(this.elements),title:this.title})},r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),r.__decorate([s.property({json:{write:!0}})],t.prototype,"elements",void 0),r.__decorate([s.cast("elements")],t.prototype,"castElements",null),r.__decorate([p.reader("elements",["formElements"])],t.prototype,"readElements",null),r.__decorate([s.writer("elements")],t.prototype,"writeElements",null),r.__decorate([s.property({type:[i],json:{write:!0}})],t.prototype,"expressionInfos",void 0),r.__decorate([s.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),t=o=r.__decorate([s.subclass("esri.form.FormTemplate")],t)}(o.JSONSupport)}));