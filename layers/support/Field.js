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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","./domains","./fieldType"],function(e,t,o,r,n,p,i,a){return function(e){function t(t){var o=e.call(this)||this;return o.alias=null,o.domain=null,o.editable=!1,o.length=-1,o.name=null,o.nullable=!0,o.type=null,o}return o(t,e),n=t,t.prototype.readDomain=function(e){var t=e&&e.type;return"range"===t?i.RangeDomain.fromJSON(e):"codedValue"===t?i.CodedValueDomain.fromJSON(e):null},t.prototype.clone=function(){return new n({alias:this.alias,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})},r([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),r([p.property({types:i.types,json:{write:!0}})],t.prototype,"domain",void 0),r([p.reader("domain")],t.prototype,"readDomain",null),r([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),r([p.property({type:Number,json:{write:!0}})],t.prototype,"length",void 0),r([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),r([p.property({type:String,json:{read:a.kebabDict.read,write:a.kebabDict.write}})],t.prototype,"type",void 0),t=n=r([p.subclass("esri.layers.support.Field")],t);var n}(p.declared(n))});