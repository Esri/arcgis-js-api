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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(t,r,e,o,i){return function(t){function r(r){var e=t.call(this,r)||this;return e.itemId=null,e.url=null,e}return e.__extends(r,t),e.__decorate([i.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],r.prototype,"itemId",void 0),e.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"url",void 0),r=e.__decorate([i.subclass("esri.tasks.support.DataFile")],r)}(o.JSONSupport)}));