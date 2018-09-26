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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","./domains","./fieldType"],function(e,t,o,r,p,l,i,n){return function(e){function t(t){var o=e.call(this)||this;return o.alias=null,o.defaultValue=void 0,o.domain=null,o.editable=!0,o.length=-1,o.name=null,o.nullable=!0,o.type=null,o}o(t,e),p=t,t.prototype.clone=function(){return new p({alias:this.alias,defaultValue:this.defaultValue,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})};var p;return r([l.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),r([l.property({json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),r([l.property({types:i.types,json:{read:{reader:i.fromJSON},write:!0}})],t.prototype,"domain",void 0),r([l.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),r([l.property({type:Number,json:{write:!0}})],t.prototype,"length",void 0),r([l.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r([l.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),r([l.property({type:String,json:{read:n.kebabDict.read,write:n.kebabDict.write}})],t.prototype,"type",void 0),t=p=r([l.subclass("esri.layers.support.Field")],t)}(l.declared(p))});