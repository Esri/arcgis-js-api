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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/ObjectPool","../tiling","./Bitmap","./Tiled"],function(e,t,r,o,i,n,p,l){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t){var r=e.call(this,t)||this;return r.key=new n.TileKey(0,0,0,0),r}return r(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0),this.source=null},t.pool=new i(t,!0),t}(l(p.Bitmap));t.BitmapTile=u});