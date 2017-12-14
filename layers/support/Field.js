// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary","./domains"],function(e,r,t,i,o,l,n,p){var a=n({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"}),s=function(e){function r(r){var t=e.call(this)||this;return t.alias=null,t.domain=null,t.editable=!1,t.length=-1,t.name=null,t.nullable=!0,t.type=null,t}return t(r,e),l=r,r.prototype.readDomain=function(e){var r=e&&e.type;return"range"===r?p.RangeDomain.fromJSON(e):"codedValue"===r?p.CodedValueDomain.fromJSON(e):null},r.prototype.clone=function(){return new l({alias:this.alias,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})},i([o.property({type:String,json:{write:!0}})],r.prototype,"alias",void 0),i([o.property({types:p.types,json:{write:!0}})],r.prototype,"domain",void 0),i([o.reader("domain")],r.prototype,"readDomain",null),i([o.property({type:Boolean,json:{write:!0}})],r.prototype,"editable",void 0),i([o.property({type:Number,json:{write:!0}})],r.prototype,"length",void 0),i([o.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),i([o.property({type:Boolean,json:{write:!0}})],r.prototype,"nullable",void 0),i([o.property({type:String,json:{read:a.read,write:a.write}})],r.prototype,"type",void 0),r=l=i([o.subclass("esri.layers.support.Field")],r);var l}(o.declared(l));return s});