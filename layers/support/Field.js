// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","./domains","./fieldType"],function(e,t,r,o,n,i,p,a,l,d){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}r(t,e),n=t,t.prototype.readDescription=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})};var n;return o([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),o([p.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),o([p.property()],t.prototype,"description",void 0),o([p.reader("description")],t.prototype,"readDescription",null),o([p.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],t.prototype,"domain",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),o([p.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),o([p.enumeration.serializable()(d.kebabDict)],t.prototype,"type",void 0),o([p.property()],t.prototype,"valueType",void 0),o([p.reader("valueType",["description"])],t.prototype,"readValueType",null),t=n=o([p.subclass("esri.layers.support.Field")],t)}(p.declared(i.JSONSupport))});