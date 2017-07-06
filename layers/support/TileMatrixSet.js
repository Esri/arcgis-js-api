// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/accessorSupport/decorators","../../core/JSONSupport"],function(t,e,r,o,n,l,i){var p=s=function(t){function e(e){var r=t.call(this)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}return r(e,t),e.prototype.clone=function(){var t=new s;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t},e}(l.declared(i));o([l.property({json:{read:{source:"fullExtent"}}})],p.prototype,"fullExtent",void 0),o([l.property({json:{read:{source:"id"}}})],p.prototype,"id",void 0),o([l.property({json:{read:{source:"tileInfo"}}})],p.prototype,"tileInfo",void 0),p=s=o([l.subclass("esri.layer.support.TileMatrixSet")],p);var s;return p});