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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,l,i,n){var p=l.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){var t=e.call(this)||this;return t.field=null,t.type=null,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([n.property({readOnly:!0,type:p.apiValues,nonNullable:!0,json:{read:!1,write:p.write}})],r.prototype,"type",void 0),r=o([n.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(n.declared(i.JSONSupport))});