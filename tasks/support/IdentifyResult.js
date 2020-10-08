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

define(["require","exports","tslib","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators"],(function(e,t,r,o,a,p,i,u){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.feature=null,r.layerId=null,r.layerName=null,r}return r.__extends(t,e),t.prototype.readFeature=function(e,t){return a.fromJSON({attributes:r.__assign({},t.attributes),geometry:r.__assign({},t.geometry)})},t.prototype.writeFeature=function(e,t){if(e){var a=e.attributes,p=e.geometry;a&&(t.attributes=r.__assign({},a)),i.isSome(p)&&(t.geometry=p.toJSON(),t.geometryType=o.typeKebabDictionary.toJSON(p.type))}},r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r.__decorate([u.property({type:a})],t.prototype,"feature",void 0),r.__decorate([u.reader("feature",["attributes","geometry"])],t.prototype,"readFeature",null),r.__decorate([u.writer("feature")],t.prototype,"writeFeature",null),r.__decorate([u.property({type:Number,json:{write:!0}})],t.prototype,"layerId",void 0),r.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"layerName",void 0),t=r.__decorate([u.subclass("esri.tasks.support.IdentifyResult")],t)}(p.JSONSupport)}));