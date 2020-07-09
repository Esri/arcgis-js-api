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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,o,t,i,a){var n=new t.default({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),l=new t.default({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});return function(e){function r(r){var o=e.call(this,r)||this;return o.cardinality=null,o.composite=null,o.id=null,o.keyField=null,o.keyFieldInRelationshipTable=null,o.name=null,o.relatedTableId=null,o.relationshipTableId=null,o.role=null,o}return o.__extends(r,e),o.__decorate([a.property({json:{read:n.read,write:n.write}})],r.prototype,"cardinality",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"composite",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"id",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"keyField",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"keyFieldInRelationshipTable",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"name",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"relatedTableId",void 0),o.__decorate([a.property({json:{read:!0,write:!0}})],r.prototype,"relationshipTableId",void 0),o.__decorate([a.property({json:{read:l.read,write:l.write}})],r.prototype,"role",void 0),r=o.__decorate([a.subclass("esri.layers.support.Relationship")],r)}(i.JSONSupport)}));