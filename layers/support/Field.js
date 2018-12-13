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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","./domains","./fieldType"],function(e,t,r,o,l,p,i,a){return function(e){function t(t){var r=e.call(this)||this;return r.alias=null,r.defaultValue=void 0,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r}r(t,e),l=t,t.prototype.clone=function(){return new l({alias:this.alias,defaultValue:this.defaultValue,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})};var l;return o([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),o([p.property({json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),o([p.property({types:i.types,json:{read:{reader:i.fromJSON},write:!0}})],t.prototype,"domain",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),o([p.property({type:Number,json:{write:!0}})],t.prototype,"length",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),o([p.property({type:String,json:{read:a.kebabDict.read,write:a.kebabDict.write}})],t.prototype,"type",void 0),t=l=o([p.subclass("esri.layers.support.Field")],t)}(p.declared(l))});