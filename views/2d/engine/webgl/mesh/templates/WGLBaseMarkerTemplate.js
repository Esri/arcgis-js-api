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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../enums","../../number","../../WGLDisplayRecord"],(function(e,t,i,s,r,o,h){Object.defineProperty(t,"__esModule",{value:!0});var u=s.getLogger("esri.views.2d.engine.webgl.WGLMarkerTemplateBase");t.default=function(e){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var s=e.apply(this,t)||this;return s.xOffset=0,s.yOffset=0,s.width=0,s.height=0,s.boundsType="square",s.geometryType=r.WGLGeometryType.MARKER,s}return i(t,e),t.prototype.writeMesh=function(e,t,i,s,r){var o=t.indexVector,n=t.get("geometry"),p=new h(s,this.geometryType,this._materialKey),l=t.getVector("geometry").vertexCount;switch(e.push(p),p.vertexFrom=l,p.indexFrom=o.length,i){case"esriGeometryPoint":var _=r.geometry,a=_.x,f=_.y;return this._writeVertices(p,n,s,this._getPos(a,f)),void this._writeIndices(p,o,l);case"esriGeometryPolyline":var y=r.geometry.paths;return void this._writeMany(p,o,n,l,s,y[0]);case"esriGeometryPolygon":var d=r.centroid;if(d){a=d.x,f=d.y;this._writeVertices(p,n,s,this._getPos(a,f)),this._writeIndices(p,o,l)}else u.error("Tried to render polygon geometries as markers, but found no centroid!");return;case"esriGeometryMultipoint":var g=r.geometry.points;return void this._writeMany(p,o,n,l,s,g);case"esriGeometryEnvelope":default:u.error("Unable to handle geometryType: "+i)}},t.prototype._getPos=function(e,t){return o.i1616to32(e,t)},t.prototype._writeMany=function(e,t,i,s,r,o){for(var h=0,u=0,n=0,p=0,l=o;p<l.length;p++){var _=l[p],a=_[0],f=_[1],y=this._getPos(a+h,f+u);this._writeVertices(e,i,r,y),this._writeIndices(e,t,s+n),h+=a,u+=f,n+=4}},t.prototype._writeVertices=function(e,t,i,s){t.push(s),t.push(this._offsetUpperLeft),t.push(this._texUpperLeft),t.push(this._bitestAndDistRatio),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetUpperRight),t.push(this._texUpperRight),t.push(this._bitestAndDistRatio),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetBottomLeft),t.push(this._texBottomLeft),t.push(this._bitestAndDistRatio),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),t.push(s),t.push(this._offsetBottomRight),t.push(this._texBottomRight),t.push(this._bitestAndDistRatio),t.push(i),t.push(this._fillColor),t.push(this._outlineColor),t.push(this._sizeOutlineWidth),e.vertexCount+=4},t.prototype._writeIndices=function(e,t,i){var s=i;t.push(s+0),t.push(s+1),t.push(s+2),t.push(s+1),t.push(s+3),t.push(s+2),e.indexCount+=6},t}(e)}}));