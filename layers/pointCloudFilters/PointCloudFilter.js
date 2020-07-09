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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,i,l){var n=o.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function t(t){var r=e.call(this,t)||this;return r.field=null,r.type=null,r}return r.__extends(t,e),t.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.__decorate([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),r.__decorate([l.property({readOnly:!0,type:n.apiValues,nonNullable:!0,json:{read:!1,write:n.write}})],t.prototype,"type",void 0),t=r.__decorate([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],t)}(i.JSONSupport)}));