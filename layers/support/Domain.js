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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,t,o,n,a){var i=new o.default({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.type=null,t}return t.__extends(r,e),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),t.__decorate([a.enumeration(i)],r.prototype,"type",void 0),r=t.__decorate([a.subclass("esri.layers.support.Domain")],r)}(n.JSONSupport)}));