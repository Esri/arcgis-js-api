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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(r,e,t,o,p,i){return function(r){function e(e){var t=r.call(this)||this;return t.itemId=null,t.url=null,t}return t(e,r),o([i.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),o([i.property({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=o([i.subclass("esri.tasks.support.DataFile")],e)}(i.declared(p))});