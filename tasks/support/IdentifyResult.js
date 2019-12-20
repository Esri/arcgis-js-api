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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/assignHelper","../../geometry","../../Graphic","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators"],function(e,t,r,o,p,a,u,i,y,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.feature=null,r.layerId=null,r.layerName=null,r}return o(t,e),t.prototype.readFeature=function(e,t){return u.fromJSON({attributes:p({},t.attributes),geometry:p({},t.geometry)})},t.prototype.writeFeature=function(e,t){if(e){var r=e.attributes,o=e.geometry;r&&(t.attributes=p({},r)),y.isSome(o)&&(t.geometry=o.toJSON(),t.geometryType=a.typeKebabDictionary.toJSON(o.type))}},r([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([s.property({type:u})],t.prototype,"feature",void 0),r([s.reader("feature",["attributes","geometry"])],t.prototype,"readFeature",null),r([s.writer("feature")],t.prototype,"writeFeature",null),r([s.property({type:Number,json:{write:!0}})],t.prototype,"layerId",void 0),r([s.property({type:String,json:{write:!0}})],t.prototype,"layerName",void 0),t=r([s.subclass("esri.tasks.support.IdentifyResult")],t)}(s.declared(i.JSONSupport))});