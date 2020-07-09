// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","./BoundingBox"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,i,n,r){void 0===n&&(n=255),void 0===r&&(r=0),this.bounds=e,this.range=t,this.index=i,this.minZoom=n,this.maxZoom=r}return e.prototype.serialize=function(e){return this.bounds.serialize(e),e.writeInt32(this.range.from),e.writeInt32(this.range.count),e.writeInt32(this.index),e},e.deserialize=function(t){return new e(i.default.deserialize(t),{from:t.readInt32(),count:t.readInt32()},t.readInt32())},e}();t.default=n}));