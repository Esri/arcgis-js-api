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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../enums","../../number","../../WGLDisplayRecord","../../materialKey/MaterialKey"],function(e,t,i,r,s,o,c,d){Object.defineProperty(t,"__esModule",{value:!0});var m=r.getLogger("esri.views.2d.engine.webgl.WGLMarkerTemplateBase");t.default=function(e){return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=r.apply(this,e)||this;return i.xOffset=0,i.yOffset=0,i.width=0,i.height=0,i.geometryType=s.WGLGeometryType.MARKER,i}return i(e,r),e.prototype.writeMesh=function(e,t,i,r,s){var o=d.MarkerMaterialKey.load(this._materialKey),h=t.indexVector,u=t.get("geometry"),n=new c(r,this.geometryType,this._materialKey),p=t.getVector("geometry").vertexCount;switch(e.push(n),n.vertexFrom=p,n.indexFrom=h.length,i){case"esriGeometryPoint":var l=s.geometry,a=l.x,y=l.y;return this._writeVertices(n,u,r,this._getPos(a,y),o),void this._writeIndices(n,h,p);case"esriGeometryPolyline":var _=s.geometry.paths;return void this._writeMany(n,h,u,p,r,_[0],o);case"esriGeometryPolygon":var f=s.centroid;return void(f?(a=f.x,y=f.y,this._writeVertices(n,u,r,this._getPos(a,y),o),this._writeIndices(n,h,p)):m.error("Tried to render polygon geometries as markers, but found no centroid!"));case"esriGeometryMultipoint":var g=s.geometry.points;return void this._writeMany(n,h,u,p,r,g,o);case"esriGeometryEnvelope":default:m.error("Unable to handle geometryType: "+i)}},e.prototype._getPos=function(e,t){return o.i1616to32(e,t)},e.prototype._writeMany=function(e,t,i,r,s,o,h){for(var u=0,n=0,p=0,l=0,a=o;l<a.length;l++){var y=a[l],_=y[0],f=y[1],g=this._getPos(_+u,f+n);this._writeVertices(e,i,s,g,h),this._writeIndices(e,t,r+p),u+=_,n+=f,p+=4}},e.prototype._writeVertices=function(e,t,i,r,s){t.push(r),t.push(this._offsetUpperLeft),t.push(this._texUpperLeft),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(r),t.push(this._offsetUpperRight),t.push(this._texUpperRight),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(r),t.push(this._offsetBottomLeft),t.push(this._texBottomLeft),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(r),t.push(this._offsetBottomRight),t.push(this._texBottomRight),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),e.vertexCount+=4},e.prototype._writeIndices=function(e,t,i){var r=i;t.push(r+0),t.push(r+1),t.push(r+2),t.push(r+1),t.push(r+3),t.push(r+2),e.indexCount+=6},e}(e)}});