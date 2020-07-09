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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent","./TileInfo"],(function(t,e,r,o,n,i,l){return function(t){function e(e){var r=t.call(this,e)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){var t=new o;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t},r.__decorate([n.property({type:i,json:{read:{source:"fullExtent"}}})],e.prototype,"fullExtent",void 0),r.__decorate([n.property({type:String,json:{read:{source:"id"}}})],e.prototype,"id",void 0),r.__decorate([n.property({type:l,json:{read:{source:"tileInfo"}}})],e.prototype,"tileInfo",void 0),e=o=r.__decorate([n.subclass("esri.layer.support.TileMatrixSet")],e)}(o.JSONSupport)}));