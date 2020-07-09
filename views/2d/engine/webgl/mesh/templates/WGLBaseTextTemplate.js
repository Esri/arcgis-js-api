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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/maybe","../../../../../../core/screenUtils","../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper","../../../../engine","../../definitions","../../enums","../../number","../../WGLDisplayRecord","../../materialKey/MaterialKey","./util"],(function(e,t,i,r,n,o,s,h,a,l,p,u,f,g,_){Object.defineProperty(t,"__esModule",{value:!0});var c=n.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate");t.default=function(e){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.apply(this,t)||this;return r._isCIM=!1,r.geometryType=p.WGLGeometryType.TEXT,r._aux=u.i8888to32(0,0,r._referenceSize,r._bitset),r}return i.__extends(t,e),t.prototype.bindTextInfo=function(e,t){var i=this;e&&e.length?this._shapingInfo=o.andThen(e,(function(e){return a.shapeGlyphs(e,t,{scale:i._scale,angle:i._angle,xOffset:i._xOffset,yOffset:i._yOffset,hAlign:i._xAlignD,vAlign:i._yAlignD,maxLineWidth:Math.max(32,Math.min(i._lineWidth,512)),lineHeight:l.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(i._lineHeight,4)),decoration:i._decoration,isCIM:i._isCIM})})):this._shapingInfo=null},t.prototype.writeMeshWithGeometry=function(e,t,i,n,s,h){var a,l,p=this;if(o.isSome(this._textPlacement))this._writePlacedText(e,t,n,s,h);else if(_.isPoint(h))this._writeGlyphs(e,t,n,h);else if(_.isPolygon(h))o.andThen(s.centroid,(function(i){return p._writeGlyphs(e,t,n,i)}));else if(_.isMultipoint(h))for(var u=0,f=0,g=0,x=h.points;g<x.length;g++){var y=x[g];u+=y[0],f+=y[1],this._writeGlyphs(e,t,n,{x:u,y:f})}else a="Unable to handle geometryType: "+i,void 0===l&&(l="mapview-processing"),c.error(new r(l,a))},t.prototype._writePlacedText=function(e,t,i,r,n){var a=this._shapingInfo;if(!o.isNone(a)){var l=g.MaterialKeyBase.load(this._materialKey),p=h.CIMMarkerPlacementHelper.getPlacement(n,o.unwrap(this._textPlacement),s.pt2px(1));if(p)for(var _,c,x=p.next();null!=x;){c=u.i1616to32(Math.round(8*x.tx),Math.round(8*x.ty)),_=x.getAngle(),a.setRotation(_);for(var y=0,d=a.glyphs;y<d.length;y++){var m=d[y],v=new f(i,this.geometryType,l.data,0,0);l.textureBinding=m.textureBinding,v.materialKey=l.data,v.indexFrom=t.indexVector.length,v.indexCount=this._writeIndices(t),v.vertexFrom=t.getVector("geometry").vertexCount,v.vertexCount=this._writeVertex(t,i,c,m),e.push(v)}a.setRotation(-_),x=p.next()}}},t.prototype._writeGlyphs=function(e,t,i,r){var n=this._shapingInfo;if(!o.isNone(n))for(var s=g.MaterialKeyBase.load(this._materialKey),h=u.i1616to32(Math.round(8*r.x),Math.round(8*r.y)),a=0,l=n.glyphs;a<l.length;a++){var p=l[a],_=new f(i,this.geometryType,s.data,0,0);s.textureBinding=p.textureBinding,_.materialKey=s.data,_.indexFrom=t.indexVector.length,_.indexCount=this._writeIndices(t),_.vertexFrom=t.getVector("geometry").vertexCount,_.vertexCount=this._writeVertex(t,i,h,p),e.push(_)}},t.prototype._writeVertexCommon=function(e,t,i,r){var n=this._color,o=this._haloColor,s=u.i8888to32(0,0,this._referenceSize,this._bitset),h=u.i8888to32(0,0,this._size,this._haloSize);e.push(i),e.push(t),e.push(n),e.push(o),e.push(h),e.push(s)},t.prototype._writeVertex=function(e,t,i,r){var n=e.get("geometry");return this._writeVertexCommon(n,t,i,r),n.push(r.offsets.upperLeft),n.push(r.texcoords.upperLeft),this._writeVertexCommon(n,t,i,r),n.push(r.offsets.upperRight),n.push(r.texcoords.upperRight),this._writeVertexCommon(n,t,i,r),n.push(r.offsets.lowerLeft),n.push(r.texcoords.lowerLeft),this._writeVertexCommon(n,t,i,r),n.push(r.offsets.lowerRight),n.push(r.texcoords.lowerRight),4},t.prototype._writeIndices=function(e){var t=e.getVector("geometry").vertexCount,i=e.indexVector;return i.push(t+0),i.push(t+1),i.push(t+2),i.push(t+1),i.push(t+3),i.push(t+2),6},t}(e)}}));