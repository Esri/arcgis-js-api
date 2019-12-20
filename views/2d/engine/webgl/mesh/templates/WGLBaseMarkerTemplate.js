// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../enums","../../number","../../WGLDisplayRecord"],function(t,e,i,s,r,o,d){Object.defineProperty(e,"__esModule",{value:!0});var g=s.getLogger("esri.views.2d.engine.webgl.WGLMarkerTemplateBase");e.default=function(t){return function(s){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=s.apply(this,t)||this;return i.xOffset=0,i.yOffset=0,i.width=0,i.height=0,i.geometryType=r.WGLGeometryType.MARKER,i}return i(t,s),t.prototype.writeMesh=function(t,e,i,s,r){var o=e.indexVector,h=e.get("geometry"),u=new d(s,this.geometryType,this._materialKey),n=e.getVector("geometry").vertexCount;switch(t.push(u),u.vertexFrom=n,u.indexFrom=o.length,i){case"esriGeometryPoint":var p=r.geometry,l=p.x,_=p.y;return this._writeVertices(u,h,s,this._getPos(l,_)),void this._writeIndices(u,o,n);case"esriGeometryPolyline":var a=r.geometry.paths;return void this._writeMany(u,o,h,n,s,a[0]);case"esriGeometryPolygon":var f=r.centroid;return void(f?(l=f.x,_=f.y,this._writeVertices(u,h,s,this._getPos(l,_)),this._writeIndices(u,o,n)):g.error("Tried to render polygon geometries as markers, but found no centroid!"));case"esriGeometryMultipoint":var y=r.geometry.points;return void this._writeMany(u,o,h,n,s,y);case"esriGeometryEnvelope":default:g.error("Unable to handle geometryType: "+i)}},t.prototype._getPos=function(t,e){return o.i1616to32(t,e)},t.prototype._writeMany=function(t,e,i,s,r,o){for(var h=0,u=0,n=0,p=0,l=o;p<l.length;p++){var _=l[p],a=_[0],f=_[1],y=this._getPos(a+h,f+u);this._writeVertices(t,i,r,y),this._writeIndices(t,e,s+n),h+=a,u+=f,n+=4}},t.prototype._writeVertices=function(t,e,i,s){e.push(s),e.push(this._offsetUpperLeft),e.push(this._texUpperLeft),e.push(this._bitestAndDistRatio),e.push(i),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),e.push(s),e.push(this._offsetUpperRight),e.push(this._texUpperRight),e.push(this._bitestAndDistRatio),e.push(i),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),e.push(s),e.push(this._offsetBottomLeft),e.push(this._texBottomLeft),e.push(this._bitestAndDistRatio),e.push(i),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),e.push(s),e.push(this._offsetBottomRight),e.push(this._texBottomRight),e.push(this._bitestAndDistRatio),e.push(i),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),t.vertexCount+=4},t.prototype._writeIndices=function(t,e,i){var s=i;e.push(s+0),e.push(s+1),e.push(s+2),e.push(s+1),e.push(s+3),e.push(s+2),t.indexCount+=6},t}(t)}});