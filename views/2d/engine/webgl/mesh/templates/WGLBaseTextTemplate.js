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

define(["require","exports","tslib","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../layers/graphics/featureConversionUtils","../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper","../../definitions","../../enums","../../number","../../materialKey/MaterialKey","./shapingUtils"],(function(e,t,r,i,o,n,s,a,h,p,u,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i._isCIM=!1,i.geometryType=h.WGLGeometryType.TEXT,i._aux=p.i8888to32(0,0,i._referenceSize,i._bitset),i}return r.__extends(t,e),t.prototype.bindTextInfo=function(e,t){var r=this;e&&e.length?this._shapingInfo=i.andThen(e,(function(e){return l.shapeGlyphs(e,t,{scale:r._scale,angle:r._angle,xOffset:r._xOffset,yOffset:r._yOffset,hAlign:r._xAlignD,vAlign:r._yAlignD,maxLineWidth:Math.max(32,Math.min(r._lineWidth,512)),lineHeight:a.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(r._lineHeight,4)),decoration:r._decoration,isCIM:r._isCIM})})):this._shapingInfo=null},t.prototype.writeMeshWithGeometry=function(e,t,r,o,s,a){var h=this;if(i.isSome(this._textPlacement)){var p=null!=a?a:r.readLegacyGeometry();return this._writePlacedText(e,t,s,p)}var u=a?n.deltaDecodeGeometry(n.convertFromGeometry(a),2):"esriGeometryPolygon"===o?r.readCentroid():r.readUnquantizedGeometry();if(u){if(u.isPoint){var l=u.coords,f=l[0],c=l[1];return this._writeGlyphs(e,t,s,{x:f,y:c})}u.forEachVertex((function(r,i){return h._writeGlyphs(e,t,s,{x:r,y:i})}))}},t.prototype._writePlacedText=function(e,t,r,n){var a=this._shapingInfo;if(!i.isNone(a)){var h=u.MaterialKeyBase.load(this._materialKey),l=i.unwrap(this._textPlacement),f=s.CIMMarkerPlacementHelper.getPlacement(n,l,o.pt2px(1));if(f)for(var c,y,_=f.next();null!=_;){y=p.i1616to32(Math.round(8*_.tx),Math.round(8*_.ty)),c=_.getAngle(),a.setRotation(c);for(var d=0,g=a.glyphs;d<g.length;d++){var m=g[d];h.textureBinding=m.textureBinding;var x=t.getVector("geometry").vertexCount,v=t.indexVector.length,w=this._writeIndices(t),M=this._writeVertex(t,r,y,m);e.writeDisplayRecord(this.geometryType,h.data,x,M,v,w)}a.setRotation(-c),_=f.next()}}},t.prototype._writeGlyphs=function(e,t,r,o){var n=this._shapingInfo;if(!i.isNone(n))for(var s=u.MaterialKeyBase.load(this._materialKey),a=p.i1616to32(Math.round(8*o.x),Math.round(8*o.y)),h=0,l=n.glyphs;h<l.length;h++){var f=l[h];s.textureBinding=f.textureBinding;var c=t.getVector("geometry").vertexCount,y=t.indexVector.length,_=this._writeIndices(t),d=this._writeVertex(t,r,a,f);e.writeDisplayRecord(this.geometryType,s.data,c,d,y,_)}},t.prototype._writeVertexCommon=function(e,t,r,i){var o=this._color,n=this._haloColor,s=p.i8888to32(0,0,this._referenceSize,this._bitset),a=p.i8888to32(0,0,this._size,this._haloSize);e.push(r),e.push(t),e.push(o),e.push(n),e.push(a),e.push(s)},t.prototype._writeVertex=function(e,t,r,i){var o=e.get("geometry");return this._writeVertexCommon(o,t,r,i),o.push(i.offsets.upperLeft),o.push(i.texcoords.upperLeft),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.upperRight),o.push(i.texcoords.upperRight),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.lowerLeft),o.push(i.texcoords.lowerLeft),this._writeVertexCommon(o,t,r,i),o.push(i.offsets.lowerRight),o.push(i.texcoords.lowerRight),4},t.prototype._writeIndices=function(e){var t=e.getVector("geometry").vertexCount,r=e.indexVector;return r.push(t+0),r.push(t+1),r.push(t+2),r.push(t+1),r.push(t+3),r.push(t+2),6},t}(e)}}));