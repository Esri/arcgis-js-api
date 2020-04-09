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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/maybe","../../../../engine","../../definitions","../../enums","../../number","../../WGLDisplayRecord","../../materialKey/MaterialKey"],(function(e,t,r,i,o,n,s,h,p,a,u,l){Object.defineProperty(t,"__esModule",{value:!0});var f=o.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate");t.default=function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i._isCIM=!1,i.geometryType=p.WGLGeometryType.TEXT,i._aux=a.i8888to32(0,0,i._referenceSize,i._bitset),i}return r(t,e),t.prototype.bindTextInfo=function(e,t){var r=this;e&&e.length?this._shapingInfo=n.andThen(e,(function(e){return s.shapeGlyphs(e,t,{scale:r._scale,angle:r._angle,xOffset:r._xOffset,yOffset:r._yOffset,hAlign:r._xAlignD,vAlign:r._yAlignD,maxLineWidth:Math.max(32,Math.min(r._lineWidth,512)),lineHeight:h.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(r._lineHeight,4)),decoration:r._decoration,isCIM:r._isCIM})})):this._shapingInfo=null},t.prototype.writeMesh=function(e,t,r,o,s){var h,p,a=this;switch(r){case"esriGeometryPoint":this._writeGlyphs(e,t,o,s.geometry);break;case"esriGeometryPolygon":n.andThen(s.centroid,(function(r){return a._writeGlyphs(e,t,o,r)}));break;case"esriGeometryMultipoint":for(var u=0,l=0,g=0,y=s.geometry.points;g<y.length;g++){var _=y[g];u+=_[0],l+=_[1],this._writeGlyphs(e,t,o,{x:u,y:l})}break;default:h="Unable to handle geometryType: "+r,void 0===p&&(p="mapview-processing"),f.error(new i(p,h))}},t.prototype._writeGlyphs=function(e,t,r,i){var o=this._shapingInfo;if(!n.isNone(o))for(var s=l.MaterialKeyBase.load(this._materialKey),h=a.i1616to32(2*i.x,2*i.y),p=0,f=o.glyphs;p<f.length;p++){var g=f[p],y=new u(r,this.geometryType,s.data,0,0);s.textureBinding=g.textureBinding,y.materialKey=s.data,y.indexFrom=t.indexVector.length,y.indexCount=this._writeIndices(t),y.vertexFrom=t.getVector("geometry").vertexCount,y.vertexCount=this._writeVertex(t,r,h,g),e.push(y)}},t.prototype._writeVertexCommon=function(e,t,r,i){var o=this._color,n=this._haloColor,s=a.i8888to32(0,0,this._referenceSize,this._bitset),h=a.i8888to32(0,0,this._size,this._haloSize);e.push(r),e.push(t),e.push(o),e.push(n),e.push(h),e.push(s)},t.prototype._writeVertex=function(e,t,r,i){var o=e.get("geometry");return this._writeVertexCommon(o,t,r,i),o.push(i.offsets.upperLeft),o.push(i.texcoords.upperLeft),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.upperRight),o.push(i.texcoords.upperRight),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.lowerLeft),o.push(i.texcoords.lowerLeft),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.lowerRight),o.push(i.texcoords.lowerRight),4},t.prototype._writeIndices=function(e){var t=e.getVector("geometry").vertexCount,r=e.indexVector;return r.push(t+0),r.push(t+1),r.push(t+2),r.push(t+1),r.push(t+3),r.push(t+2),6},t}(e)}}));