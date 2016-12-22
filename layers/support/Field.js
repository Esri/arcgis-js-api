// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/kebabDictionary","../../core/JSONSupporter","./CodedValueDomain","./RangeDomain"],function(e,i,l,n){var r=e({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"}),t=i.createSubclass({declaredClass:"esri.layers.support.Field",alias:null,domain:null,_domainReader:function(e,i){var r=e&&e.type;return"range"===r?new n(e):"codedValue"===r?new l(e):null},editable:!1,length:-1,name:null,nullable:!0,type:null,_typeReader:r.fromJSON,clone:function(){return t.fromJSON(this.toJSON())},toJSON:function(){return{alias:this.alias,domain:this.domain&&this.domain.toJSON(),editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:r.toJSON(this.type)}}});return t});