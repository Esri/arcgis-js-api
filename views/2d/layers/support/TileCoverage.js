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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","../../../../core/ArrayPool","./TileSpan"],function(e,o,r,n,t){var s=function(){function e(e){this.lodInfo=e,this.spans=n.acquire()}return e.prototype.release=function(){for(var e=0,o=this.spans;e<o.length;e++){var r=o[e];t.pool.release(r)}n.release(this.spans)},e}();return s.pool=new r(s,!0),s});