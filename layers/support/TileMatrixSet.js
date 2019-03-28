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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(t,e,r,o,n,l,i){return function(t){function e(e){var r=t.call(this)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}r(e,t),n=e,e.prototype.clone=function(){var t=new n;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t};var n;return o([i.property({json:{read:{source:"fullExtent"}}})],e.prototype,"fullExtent",void 0),o([i.property({json:{read:{source:"id"}}})],e.prototype,"id",void 0),o([i.property({json:{read:{source:"tileInfo"}}})],e.prototype,"tileInfo",void 0),e=n=o([i.subclass("esri.layer.support.TileMatrixSet")],e)}(i.declared(l))});