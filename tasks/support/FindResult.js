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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators"],function(e,t,r,o,p,a,i,u,y,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.feature=null,r.foundFieldName=null,r.layerId=null,r.layerName=null,r.value=void 0,r}return r(t,e),t.prototype.readFeature=function(e,t){var r={attributes:{}};return t.attributes&&(r.attributes=t.attributes),t.geometry&&(r.geometry=t.geometry),i.fromJSON(r)},t.prototype.writeFeature=function(e,t){if(e){var r=e.attributes,o=e.geometry;r&&(t.attributes=p({},r)),y.isSome(o)&&(t.geometry=o.toJSON(),t.geometryType=a.typeKebabDictionary.toJSON(o.type))}},o([n.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),o([n.property({type:i})],t.prototype,"feature",void 0),o([n.reader("feature",["attributes","geometry"])],t.prototype,"readFeature",null),o([n.writer("feature")],t.prototype,"writeFeature",null),o([n.property({type:String,json:{write:!0}})],t.prototype,"foundFieldName",void 0),o([n.property({type:Number,json:{write:!0}})],t.prototype,"layerId",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"layerName",void 0),o([n.property({json:{write:!0}})],t.prototype,"value",void 0),t=o([n.subclass("esri.tasks.support.FindResult")],t)}(n.declared(u.JSONSupport))});