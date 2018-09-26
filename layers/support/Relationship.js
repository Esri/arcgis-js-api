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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/accessorSupport/decorators"],function(e,r,o,t,n,a,i){var p=a({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"});return function(e){function r(r){var o=e.call(this,r)||this;return o.cardinality=null,o.id=null,o.keyField=null,o.name=null,o.relatedTableId=null,o}return o(r,e),t([i.property({json:{read:p.read,write:p.write}})],r.prototype,"cardinality",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"id",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"keyField",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"name",void 0),t([i.property({json:{read:!0,write:!0}})],r.prototype,"relatedTableId",void 0),r=t([i.subclass("esri.layers.support.Relationship")],r)}(i.declared(n))});