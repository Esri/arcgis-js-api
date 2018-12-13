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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,n,p){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.name=null,r.field=null,r.currentRangeExtent=null,r.fullRangeExtent=null,r.type="rangeInfo",r}return t(r,e),o([p.property({type:String,json:{read:!0,write:!0}})],r.prototype,"name",void 0),o([p.property({type:String,json:{read:!0,write:!0}})],r.prototype,"field",void 0),o([p.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"currentRangeExtent",void 0),o([p.property({type:[Number],json:{read:!0,write:!0}})],r.prototype,"fullRangeExtent",void 0),o([p.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],r.prototype,"type",void 0),r=o([p.subclass("esri.layers.support.RangeInfo")],r)}(p.declared(n));r.RangeInfo=a,r.default=a});