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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../layers/graphics/featureConversionUtils","../../enums","../../number","../../materialKey/MaterialKey","./templateUtils"],(function(e,t,r,a,i,s,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var a=e.apply(this,t)||this;return a.forceLibtess=!1,a.geometryType=i.WGLGeometryType.FILL,a}return r.__extends(t,e),t.prototype.writeMeshWithGeometry=function(e,t,r,i,s,u){var l=o.FillMaterialKey.load(this._materialKey),h=t.indexVector,d=t.getVector("geometry"),y=d.vertexCount,p=h.length,c=u?a.deltaDecodeGeometry(a.convertFromGeometry(u),2):r.readUnquantizedGeometry();if(c&&(c=n.clipMarshall(c))){var f=c.coords;!this.forceLibtess&&n.triangulate(h,c,y)||(f=[],n.triangulateLibtess(f,h,c,y)),this._write(d,r,s,f,l);var m=d.vertexCount-y,v=h.length-p;e.writeDisplayRecord(this.geometryType,this._materialKey,y,m,p,v)}},t.prototype._write=function(e,t,r,a,i){for(var o=0;o<a.length;o+=2){var n=s.i1616to32(1*a[o],1*a[o+1]);e.data.push(n),e.data.push(r),i.dotDensity?e.data.writeF32(1/Math.abs(t.readGeometryArea())):(e.data.push(this.fillColor),e.data.push(this.tl),e.data.push(this.br),e.data.push(this.aux1),e.data.push(this.aux2),e.data.push(this.aux3))}},t}(e)}}));