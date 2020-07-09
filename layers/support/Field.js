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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./domains","./fieldType"],(function(e,t,r,o,a,n,i,p,l){var d=new o.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}var o;return r.__extends(t,e),o=t,t.prototype.readDescription=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?d.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new o({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})},r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),r.__decorate([n.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),r.__decorate([n.property()],t.prototype,"description",void 0),r.__decorate([n.reader("description")],t.prototype,"readDescription",null),r.__decorate([n.property({types:p.types,json:{read:{reader:p.fromJSON},write:!0}})],t.prototype,"domain",void 0),r.__decorate([n.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),r.__decorate([n.property({type:i.Integer,json:{write:!0}})],t.prototype,"length",void 0),r.__decorate([n.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([n.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),r.__decorate([n.enumeration(l.kebabDict)],t.prototype,"type",void 0),r.__decorate([n.property()],t.prototype,"valueType",void 0),r.__decorate([n.reader("valueType",["description"])],t.prototype,"readValueType",null),t=o=r.__decorate([n.subclass("esri.layers.support.Field")],t)}(a.JSONSupport)}));